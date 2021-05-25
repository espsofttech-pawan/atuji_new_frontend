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

export default class transactions extends Component {

   constructor(props) {
      super(props)
       this.state = ({
         getTransactionsData : []
      })           

      if(Cookies.get('loginSuccess')){
         this.loginData = JSON.parse(Cookies.get('loginSuccess'))
      }

      this.columns = [
        {
            key: "name",
            text: "Name",
            sortable: true
        },
        {
            key: "category_name",
            text: "Category",
            sortable: true
        },
        {
            key: "owner",
            text: "Owner",
            sortable: true
        },
        {
            key: "price",
            text: "Price",
            sortable: true,
            cell: record => { 
                return (
                    <Fragment>
                        ${record.price}
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
      this.getTransactionsAPI()
  }

  //>>>>>>>>>>>>>>>>>>>>>>>>  Get NFT Details API Start  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
  async getTransactionsAPI() {

      axios.post(`${config.apiUrl}/getTransactions`, { 'user_id': this.loginData.data.id }, { headers }).then(response => {
          if (response.data.success === true) {
              this.setState({
                getTransactionsData: response.data.response
              })
          }
          else if (response.data.success === false) {
              this.setState({
                getTransactionsData: []
              })
          }            
      })
      .catch(err => {
          this.setState({
            getTransactionsData: []
          })
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
                        <li className="edit-ln"><Link className="dropdown-item" to={`${config.baseUrl}myNft`}>My NFT</Link></li>
                        <li className="edit-ln active"><Link className="dropdown-item" to={`${config.baseUrl}transactions`}>Transactions</Link></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-xs-12 col-md-9 _editor-content_">

                <div className="sec" data-sec="edit-password">
                <div className="be-large-post mb-4">
                    <div className="info-block style-2">
                        <div className="be-large-post-align">
                            <h3 className="info-block-label">Transactions</h3>
                        </div>
                    </div>

                        <ReactDatatable
                            config={this.config}
                            records={this.state.getWishlistData}
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