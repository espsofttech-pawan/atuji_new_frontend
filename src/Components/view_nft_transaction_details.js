import React, { Component } from 'react';
import config from '../config/config'
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../directives/header'
import Footer from '../directives/footer'

export default class viewNfttransaction extends Component {

   constructor(props) {
      super(props);

      const { match: { params } } = this.props;
      this.id = params.id      

      this.loginData = (!Cookies.get('loginSuccess'))?[]:JSON.parse(Cookies.get('loginSuccess'))
      if(!this.loginData.data){
         window.location.href=`${config.baseUrl}`
      }
      this.state = {
         orderData:[],
         email: this.loginData.data.user_email,
      };
   }


   componentDidMount() {
      this.getOrderDetailsAPI()
   }


   async getOrderDetailsAPI(){
      await axios({
         method: 'post',
         url: `${config.apiUrl}/getOrderDetails`,
         headers: { "Authorization": this.loginData.message },
         data: { "id": this.id }
      }).then(response => {
         if (response.data.success === true) {
            this.setState({
               orderData: response.data?.data
            })
         }
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
                     <div className="row">
                                <div className="col-sm-3"></div>
                              <div className="col-sm-6 login_edit_detail">
                                <ul className="list-group task-list-group">

                                        <li className="list-group-item list-group-item-action">
                                            <div className="n-chk"><label className="new-control new-checkbox pl-0 checkbox-primary w-100 justify-content-between"><span className=" col-sm-12">Product Name:</span><span className=" d-block col-sm-12">{this.state.orderData?.name}</span></label></div>
                                        </li>

                                        <li className="list-group-item list-group-item-action">
                                            <div className="n-chk"><label className="new-control new-checkbox pl-0 checkbox-primary w-100 justify-content-between"><span className=" col-sm-12">Owner:</span><span className=" d-block col-sm-12">{this.state.orderData?.owner}</span></label></div>
                                        </li>    

                                        <li className="list-group-item list-group-item-action">
                                            <div className="n-chk"><label className="new-control new-checkbox pl-0 checkbox-primary w-100 justify-content-between"><span className=" col-sm-12">Price:</span><span className=" d-block col-sm-12">${this.state.orderData?.price}</span></label></div>
                                        </li>                                                                    
                                        <li className="list-group-item list-group-item-action">
                                            <div className="n-chk"><label className="new-control new-checkbox pl-0 checkbox-primary w-100 justify-content-between"><span className=" col-sm-12">Token ID:</span><span className=" d-block col-sm-12">{this.state.orderData?.token_id}</span></label></div>
                                        </li>   

                                                                  
                                        <li className="list-group-item list-group-item-action">
                                            <div className="n-chk"><label className="new-control new-checkbox pl-0 checkbox-primary w-100 justify-content-between"><span className=" col-sm-12">Date:</span><span className=" d-block col-sm-12">{this.state.orderData?.datetime}</span></label></div>
                                        </li>                                                          

                                        <li className="list-group-item list-group-item-action">
                                            <div className="n-chk"><label className="new-control new-checkbox pl-0 checkbox-primary w-100 justify-content-between"><span className=" col-sm-12">Product Image:</span><span className=" d-block col-sm-12">
                                                <img style={{width: "150px"}} src={`${config.ipfsUrl}/${this.state.orderData?.image}`}  alt="View" />
                                               </span></label></div>
                                        </li>

                                        <li className="list-group-item list-group-item-action">
                                            <div className="n-chk"><label className="new-control new-checkbox pl-0 checkbox-primary w-100 justify-content-between"><span className=" col-sm-12">Status:</span><span className=" d-block col-sm-12">
                                                {(this.state.orderData?.status ==1)?'Completed':'Pending'}  
                                               </span></label></div>
                                        </li>
                                                                                

                                        <li className="list-group-item list-group-item-action">
                                            <div className="n-chk"><label className="new-control new-checkbox pl-0 checkbox-primary w-100 justify-content-between"><span className=" col-sm-12">Description:</span><span className=" d-block col-sm-12">{this.state.orderData?.description}</span></label></div>
                                        </li>

                                        <li className="list-group-item list-group-item-action">
                                            <div className="n-chk"><label className="new-control new-checkbox pl-0 checkbox-primary w-100 justify-content-between"><span className=" col-sm-12">Blockchain View:</span><span className=" d-block col-sm-12">
                                            <a href={`${config.trxHash}`+this.state.orderData?.transfer_hash} rel="noopener noreferrer" target="_blank" className="link">
                            <button className="btn btn-success">Blockchain View</button>    
                        </a>
                                               </span></label></div>
                                        </li> 

                                        <li className="list-group-item list-group-item-action">
                                            <div className="n-chk"><label className="new-control new-checkbox pl-0 checkbox-primary w-100 justify-content-between"><span className=" col-sm-12">Payment Mode:</span><span className=" d-block col-sm-12">
                                            {this.state.orderData.trx_type == "Stripe" ?
                                            "Credit Card" : "Crypto"    
                                        }
                                               </span></label></div>
                                        </li>                                                                                

                                    </ul>
                           
                              </div>
                              <div className="col-sm-3"></div>
                              </div>
                     </div>
                  </div>
               </div>
            </section>
       
              <Footer/>
                  </div>
                </>
        )
    }
}
