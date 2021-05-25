import React, { Component, Fragment } from 'react';
import Header from '../directives/header'
import Footer from '../directives/footer'
import axios from 'axios';
import config from '../config/config'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ReactDatatable from '@ashvin27/react-datatable';
const headers = {
    'Content-Type': 'application/json'
 };

export default class myNft extends Component {

   constructor(props) {
      super(props)
       this.state = ({
         getMyOrdersData : []
      })           

      if(Cookies.get('loginSuccess')){
         this.loginData = JSON.parse(Cookies.get('loginSuccess'))
      }

      this.columns = [
        {
            key: "image",
            text: "Product image",
            sortable: true,
            cell: record => { 
                return (
                    <Fragment>
                        <a href={`${config.ipfsUrl}/${record.image}`} target="_blank">
                            <img src={`${config.ipfsUrl}/${record.image}`} className="profile-img" alt="avatar" width="64px"/>
                        </a>                       
                    </Fragment>
                );
            }                
        },
        {
            key: "name",
            text: "Product Name",
            sortable: true
        },
        {
            key: "price",
            text: "Product Price",
            sortable: true,
            cell: record => { 
                return (
                    <Fragment>
                        ${record.price}                      
                    </Fragment>
                );
            }                
        },
        {
            key: "token_id",
            text: "Product ID",
            sortable: true
        },
        {
            key: "status",
            text: "Status",
            sortable: true,
            cell: record => { 
                return (
                    <Fragment>
                        {(record.status==1)?'Completed':'Pending'}                  
                    </Fragment>
                );
            }                
        },  
        {
            key: "action",
            text: "Action",
            sortable: true,
            cell: record => { 
                return (
                    <Fragment>
                        <a href={`${config.trxHash}`+record.transfer_hash} rel="noopener noreferrer" target="_blank" className="link">
                            <button className="btn btn-success">Blockchain View</button>    
                        </a>
                        <a href={`${config.baseUrl}viewNfttransaction/`+record.id} rel="noopener noreferrer" className="link">
                            <button className="btn btn-success">View</button>    
                        </a>                 
                    </Fragment>
                );
            }                
        },                                
    ];

    this.config = {
        page_size: 10,
        length_menu: [10, 20, 50],
        show_filter: true,
        show_pagination: true,
        pagination: 'advance',
        button: {
            excel: false,
            print: false
        }
    }      

  }

  componentDidMount() {
      this.getWishlistAPI()
  }

  //>>>>>>>>>>>>>>>>>>>>>>>>  Get NFT Details API Start  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
  async getWishlistAPI() {

      axios.post(`${config.apiUrl}/getUserOrder`, { 'id': this.loginData.data.id }, { headers }).then(response => {
          if (response.data.success === true) {
              this.setState({
                  getMyOrdersData: response.data?.data
              })
          }
          else if (response.data.success === false) {
              this.setState({
                  getMyOrdersData: []
              })
          }            
      })
      .catch(err => {
          this.setState({
              getMyOrdersData: []
          })
      })
  }  
  
  //>>>>>>>>>>>>>>>>>>>>>>>>  Delete NFT Item   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     
  removeItem(id){
      axios.post(`${config.apiUrl}/removeNftItem`, { 'id': id }, { headers }).then(response => {
         if (response.data.success === true) {
            toast.success(response.data.msg, {
               position: toast.POSITION.TOP_CENTER
            });

            setTimeout(() => {
               window.location.reload()
           }, 2000);

         } 
         else if (response.data.success === false) {
            toast.error(response.data.msg, {
               position: toast.POSITION.TOP_CENTER
            });
        }
   })
   .catch(err => {
      toast.error(err.response.data.msg, {
         position: toast.POSITION.TOP_CENTER
      });
   })
  }

render() {
    return (    
    <>
    <Header/>
    <ToastContainer/>
    <div className="body_bg authCss">
    <div className="container be-detail-container userprofile ">
        <div className="row">
            <div className="col-xs-12 col-md-3 left-feild">
                <div className="be-vidget affix-top" id="scrollspy">
                <div className="creative_filds_block">
                    <ul className="ul nav">
                    <li className="edit-ln"><Link className="dropdown-item" to={`${config.baseUrl}userProfile`}>Account Setting</Link></li>
                        <li className="edit-ln"><Link className="dropdown-item" to={`${config.baseUrl}wishlist`}>WishList</Link></li>
                        <li className="edit-ln active"><Link className="dropdown-item" to={`${config.baseUrl}myNft`}>My NFT</Link></li>
                        {/* <li className="edit-ln"><Link className="dropdown-item" to={`${config.baseUrl}transactions`}>Transactions</Link></li> */}
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-xs-12 col-md-9 _editor-content_">

                <div className="sec" data-sec="edit-password">
                <div className="be-large-post mb-4">
                    <div className="info-block style-2">
                        <div className="be-large-post-align">
                            <h3 className="info-block-label">My NFT</h3>
                        </div>
                    </div>

                        <ReactDatatable
                            config={this.config}
                            records={this.state.getMyOrdersData}
                            columns={this.columns}
                            onSort={this.onSort} />
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