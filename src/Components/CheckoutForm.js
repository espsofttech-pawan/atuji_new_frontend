import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import config from '../config/config'
import Web3 from 'web3';
import Cookies from 'js-cookie';

import { ToastContainer, toast } from 'react-toastify';

export const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const item = props.item;
  const [ payBtn, setpayBtn ] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = (!Cookies.get('loginSuccess')) ? [] : JSON.parse(Cookies.get('loginSuccess'))
    var user_id = loginData.data?.id
    setpayBtn(true)
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      var from_address = accounts[0];

      var arr = {
        "item_id": item[0],
        "user_id": loginData.data?.id,
        "user_name": loginData.data?.first_name + ' ' + loginData.data?.last_name,
        "price": item[1],
        "buyerAddress": from_address,
        "tokenId": item[2],
        "trx_amount": item[1],
        "trx_currency": 'USD',
        "trx_hash": "0000",
        "trx_type" : "Credit Card"
     }
      
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
  
      if (!error) {
        // console.log("Stripe 23 | token generated!", paymentMethod);
        try {
          const  {id}  = paymentMethod;
          const response = await axios.post(
            `${config.apiUrl}/charge`,
            {
              amount: item[1],
              id: id,
            }
          );
  
          console.log("Stripe 35 | data", response);
          if (response.data.success) {
            arr.stripe_res = response.data.res
            // console.log("CheckoutForm.js 25 | payment successful!");
           console.log(arr);
            const response1 = await axios.post(
              `${config.apiUrl}/itemBuy`, arr
            );
            
            if (response1.data.success === true) {
              toast.success(response1.data.msg, {
                 position: toast.POSITION.TOP_CENTER
              });
              setTimeout(() => {
                window.location.href= `${config.baseUrl}`+"myNft/"
             }, 2000);              
           } else {
              toast.error(response1.data.msg, {
                 position: toast.POSITION.TOP_CENTER
              });
           }            

          }
        } catch (error) {
          toast.error(error, {
            position: toast.POSITION.TOP_CENTER
         });          
          // console.log("CheckoutForm.js 28 | ", error);
        }
      } else {
        setpayBtn(false)
        toast.error(error.message , {
          position: toast.POSITION.TOP_CENTER
       });         
        // console.log(error.message);
      }

   } else {
    setpayBtn(false)
      toast.error(`Please connect your MetaMask wallet!`, {
         position: toast.POSITION.TOP_CENTER
      });
      return false;
   }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
      <ToastContainer />
      <button className="btn btn-primary size-1" disabled={payBtn}>{(payBtn)? 'Processing...':'Pay' }</button>
    </form>
  );
};