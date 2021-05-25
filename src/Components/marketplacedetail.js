import React, { Component } from 'react';
import Header from '../directives/header'
import Footer from '../directives/footer'
import axios from 'axios';
import config from '../config/config'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Web3 from 'web3'

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';

const headers = {
   'Content-Type': 'application/json'
};


const PUBLIC_KEY = "pk_test_51IpRmeSD2c5qKNYTXSuDr5yfTYmYNh3KdjAjHsf6sNDbKiyxEDFENB2JGxP7YEhHDTa9UxID7LvBkMXg3UvYobZu00WOufMwVp";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default class Marketplacedetail extends Component {

   constructor(props) {
      super(props)
       this.state = ({
          getNftDetails : []
      })           

      const { match: { params } } = this.props;
      this.id = params.id

      if(Cookies.get('loginSuccess')){
         this.loginData = JSON.parse(Cookies.get('loginSuccess'))
      }

  }

  componentDidMount() {
      this.getNftDetailsAPI()
      this.getWishlistNftAPI()
  }

  //>>>>>>>>>>>>>>>>>>>>>>>>  Get NFT Details API Start  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
  async getNftDetailsAPI() {

      axios.post(`${config.apiUrl}/getNftDetails`, { 'id': this.id }, { headers }).then(response => {
          if (response.data.success === true) {
              this.setState({
                  getNftDetails: response.data.response
              })
          }
          else if (response.data.success === false) {
              this.setState({
                  getNftDetails: []
              })
          }            
      })
      .catch(err => {
          this.setState({
              getNftDetails: []
          })
      })
  } 
  
  //>>>>>>>>>>>>>>>>>>>>>>>>  Get wishlist nft API Start  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
  async getWishlistNftAPI() {
   axios.post(`${config.apiUrl}/getWishlistNft`, { 'id': this.id }, { headers }).then(response => {
       if (response.data.success === true) {
           this.setState({
               getWishlistNft: response.data.response
           })
       }
       else if (response.data.success === false) {
           this.setState({
               getWishlistNft: []
           })
       }            
   })
   .catch(err => {
       this.setState({
           getWishlistNft: []
       })
   })
}   
  
  //>>>>>>>>>>>>>>>>>>>>>>>>  Get NFT Details API End  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     
  addWishList(nftId)
  {
      axios.post(`${config.apiUrl}/addWishList`, { 'id': nftId, 'user_id' : this.loginData.data.id }, { headers }).then(response => {
         if(response.data.success === true ){
            toast.success(response.data.message, {
            position: toast.POSITION.TOP_CENTER , 
            })
            setTimeout(() => {
               window.location.reload()
            }, 2000);
        }
         if (response.data.success === false) {
            toast.error(response.data.message, {
                position: toast.POSITION.TOP_CENTER
              });
        }           
   })
   .catch(err => {
      toast.error(err.response.data?.message, {
         position: toast.POSITION.TOP_CENTER, autoClose:1500
     }, setTimeout(() => {
             
     }, 500));
   })
  }  

  async connectMetasmask() {
   if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.setState({
         ConnectWalletAddress: accounts
      })
   }
   else {
      toast.error(`Please install MetaMask to use this App!`, {
         position: toast.POSITION.TOP_CENTER
      });
   }
}
async buyItem(item) {
   const itemPrice = item.price;
   if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      this.setState({
         ConnectWalletAddress: accounts
      })
      var web3 = new Web3(window.ethereum);

      let livePriceAPI = await axios({ url: 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH' });
      var usdInEth = livePriceAPI.data.ETH
      var usdvalue = (parseFloat(usdInEth) * parseFloat(itemPrice)).toFixed(6);
      try {

         var trx_amount = usdvalue*(10 ** 18);
         var to_address = '0x9CEE00358Da45Eb0F8E47a8fA0dcf275D8E031B9';
         var from_address = accounts[0];

         var getBalace = await web3.eth.getBalance(from_address) / (10 ** 18);
         var currentBal = parseFloat(getBalace).toFixed(6)

         if (currentBal < usdvalue) {
            toast.error(`insufficient funds for transfer`, {
               position: toast.POSITION.TOP_CENTER
            });
            return;
         }

         let gasPrice = await web3.eth.getGasPrice();
         let gasLimit = await web3.eth.estimateGas({
            gasPrice: web3.utils.toHex(gasPrice),
            to: to_address,
            from: from_address,
            value: web3.utils.toHex(trx_amount),
            chainId: '0x3',
         });

         const transactionParameters = {
            gasPrice: web3.utils.toHex(gasPrice),
            gas: web3.utils.toHex(30000),
            to: to_address,
            from: from_address,
            value: web3.utils.toHex(trx_amount),
            chainId: '0x3',
         };
         
         const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
         });
         if(txHash){
            var arr = {
               "item_id": item.id,
               'user_id'      : this.loginData.data.id,
               "user_name": this.loginData.data?.first_name + ' ' + this.loginData.data?.last_name,
               "price": item.price,
               'buyerAddress' : from_address,
               "tokenId": item.token_id,
               "trx_amount": item.price,
               "trx_currency": "ETH",
               "trx_hash": item.txHash,
               "trx_type" : "Crypto",
               "stripe_res" : "000000000"
            }
            console.log(arr);
            this.paymentConfirmFromMetamask(arr)            
         }

      } catch (error) {
         toast.error(`Something went wrong! Please try again later.`, {
            position: toast.POSITION.TOP_CENTER
         });
      }

   } else {
      toast.error(`Please connect your MetaMask wallet!`, {
         position: toast.POSITION.TOP_CENTER
      });
   }
}  

paymentConfirmFromMetamask(arr){
   axios.post(`${config.apiUrl}/itemBuy`, arr , { headers }).then(response => {
      if(response.data.success === true ){
         toast.success(response.data.msg, {
         position: toast.POSITION.TOP_CENTER , 
         })
         setTimeout(() => {
            window.location.reload()
         }, 2000);
   }
      if (response.data.success === false) {
         toast.error(response.data.msg, {
            position: toast.POSITION.TOP_CENTER
         });
   }           
   })
   .catch(err => {
      toast.error(err.response.data?.msg, {
         position: toast.POSITION.TOP_CENTER, autoClose:1500
   }, setTimeout(() => {
            
   }, 500));
   })
}

    render() {
     
        return (    

            <>
            <Header/>
            <ToastContainer/>
            <div className="body_bg authCss">
               <section class="product_section">
               <br />
               <div class="item-details-container">
                  <div class="container">
                     <div class="item-details-content">
                        <div class="row">
                           <div class=" col-md-10 col-xl-4">
                              <div class="item-dp">
                              
                                 <a class="img-holder" title="View">
                                    <img src={`${config.ipfsUrl}`+ this.state.getNftDetails?.image } alt="View" /></a>
                              </div>
                              <div class="shareItem">
                                 <a href="#"><i class="fab fa-facebook-square"></i></a>
                                 <a href="#"><i class="fab fa-twitter-square"></i></a>
                              </div>
                           </div>
                           <div class="col-md-8 col-xl-8 col-lg-7 item-info">
                              <div class="top">
                                 {/* <div class="itemMintedInfo float-right num">INTERACT WITH MY ATUJII</div> */}
                                 <h1 class=" name">{this.state.getNftDetails?.name}</h1>
                                 <div class="txt">
                                    <p>{this.state.getNftDetails?.description}</p>
                                 </div>
                              </div>
                              <div class="bottom">
                                 <ul>
                           
                                    {/* <li class="serial"><label>NFT Owner Ethereum Addres :</label><span>&nbsp; PRBEPSTILLSK100003</span></li> */}
                                    <li><label>Owner :</label><span>&nbsp;{this.state.getNftDetails?.owner}</span></li>

                                    <li><label>Category :</label><span>&nbsp;{this.state.getNftDetails?.category_name}</span></li>

                                    <li><label>Created Date :</label><span>&nbsp;{this.state.getNftDetails?.createdDate}</span></li>                                                                      

                                 <div class="clr"></div>
                                 
                                 <div class="price-bottom">
                                 <div class="price">
                                    <div>$<span>{this.state.getNftDetails?.price}</span></div>
                                 </div>
                              
                              {!Cookies.get('loginSuccess')?
                                 <Link to={`${config.baseUrl}login`} class="custom-btn gradient lg"><span>Buy Now
                                 </span></Link>
                              :

                              this.state.getNftDetails?.is_sold == 0 ?
                                 <a href="#" data-toggle="modal" data-target="#myModal" class="custom-btn gradient lg"><span>Buy Now
                                 </span></a>
                              : 
                              <a class="custom-btn gradient lg"><span style={{color:"white"}}>Not available for sell
                                 </span></a>
                              }
                              &nbsp;&nbsp;
                              {!Cookies.get('loginSuccess')?
                                 <Link to={`${config.baseUrl}login`} class="custom-btn gradient lg"><span>Add to Wishlist
                                 </span></Link>
                              :
                              !this.state.getWishlistNft?.id ?
                                 <a onClick={this.addWishList.bind(this,this.state.getNftDetails?.id)} class="custom-btn gradient lg"><span style={{color:"white", cursor : "pointer"}}>Add to Wishlist
                                 </span></a>
                                 :
                                 <a class="custom-btn gradient lg"><span style={{color:"white"}}>Added to Wishlist
                                 </span></a>
                              }
                              
                              </div>
                              </ul>
                              </div>

                           </div>
                           <div class="col-md-8 col-xl-9 col-lg-7"></div>
                           <div class=" col-md-4 col-xl-3 col-lg-5 item-callToActions">
                  
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
       

            <div id="myModal" class="modal fade cart-modal" role="dialog" aria-hidden="true" style={{display: "none"}}>
            <div class="modal-dialog modal-lg">
               <div class="modal-content">
                  <div class="modal-header pt-0 pb-0" style={{borderBottom: "1px solid transparent"}}><button type="button" class="close" data-dismiss="modal">×</button></div>
                  <div class="modal-body">
                     <div class="row">
                        <div class="col-md-6  " style={{borderRight: "1px solid rgb(224, 224, 224)"}}>
                           <div class="row p-3">
                              <div class="col-sm-12 mb-2 pl-0 pr-0">
                                 <h4 class="text-black">{this.state.getNftDetails?.category_name}</h4>
                              </div>
                              <div class="col-md-6 mb-2 pl-0 pr-0"><span class="h8 weak"><span class="collab-storename">{this.state.getNftDetails?.name}</span></span></div>
                              <div class="col-md-6 text-right mb-2"><span class="h weak">{this.state.getNftDetails?.createdDate}</span></div>
                              <div class="col-12 pl-0 pr-0">
                                 <div class="text-center mt-3">
                                    <img src={`${config.ipfsUrl}`+ this.state.getNftDetails?.image } style={{width: "100%"}} />
                                    </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-sm-6">
                           <div class="row">
                              <div class="col-12">
                                 <div class="heading-wrapper d-md-block mb-4">
                                    <h4 class="strong payment-method-options text-black">Offer Method</h4>
                                 </div>
                                 <div class="mt-3 ">
                                    <div class="tab-content" id="myTabContent">
                                     
                                    {this.state.getNftDetails?.type == 1?
                                       <div class="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                                          <Elements stripe={stripeTestPromise}>
                                                   <CheckoutForm item = { [ this.state.getNftDetails?.id, this.state.getNftDetails?.price, this.state.getNftDetails?.token_id ] } />
                                                </Elements> 
                                       </div>
                                       :

                                       <div class="tab-pane fade show active p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                                          <div class="col-12  pl-0 pr-0">
                                             <div class="mt-2">You need to first approve atujii for access to MetaMask to complete your purchase.</div>
                                          </div>
                                          <div class="mt-4">
                                             <div class="col-12  pl-0 pr-0">
                                                <div class="my-3 text-center">
                                                   <a onClick={this.buyItem.bind(this, this.state.getNftDetails)} class="btn btn-primary size-1 " title="Pay" mptrackaction="nux:giveapproval" href="javascript:void(0)">Pay</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       }
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

              <Footer/>
                  </div>
                </>
        )
    }
}
