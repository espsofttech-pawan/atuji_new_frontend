import React, { Component } from 'react';
import Header from '../directives/header'
import Footer from '../directives/footer'
import axios from 'axios';
import config from '../config/config'
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const headers = {
    'Content-Type': 'application/json'
 };

export default class wishlist extends Component {

   constructor(props) {
      super(props)
       this.state = ({
         getWishlistData : []
      })           

      if(Cookies.get('loginSuccess')){
         this.loginData = JSON.parse(Cookies.get('loginSuccess'))
      }

  }

  componentDidMount() {
      this.getWishlistAPI()
  }

  //>>>>>>>>>>>>>>>>>>>>>>>>  Get NFT Details API Start  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
  async getWishlistAPI() {

      axios.post(`${config.apiUrl}/getWishlist`, { 'id': this.loginData.data.id }, { headers }).then(response => {
          if (response.data.success === true) {
              this.setState({
                  getWishlistData: response.data.response
              })
          }
          else if (response.data.success === false) {
              this.setState({
                  getWishlistData: []
              })
          }            
      })
      .catch(err => {
          this.setState({
              getWishlistData: []
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
            <section className="product_section">
                  <br /><br /><br />
                  <div className=" checkout-container">
                     <div className="container">

                        <div id="checkout" className="checkout tab-pane">
                              <div className="clr">
                                 <h1>Wishlist</h1>
                              </div>
                              <div className="cart-listing">
                                 <div className="listing-body clr">
                                    <ul>
                                    {this.state.getWishlistData.length > 0 ?
                                    this.state.getWishlistData.map((item) => (
                                          <li className="clr" style={{marginTop:"10px"}}>
                                          <div className="details clr">
                                             <div className="img-holder"><img src={`${config.ipfsUrl}`+item.image} alt="" /></div>
                                             <div className="txt">
                                                <h5>{item.name}</h5>
                                                <div className="id"><label for="">Category:</label><span>{item.category_name}</span></div>
                                                <div className="id owner"><label for="">Owner:</label><span>{item.owner}</span></div>
                                             </div>
                                          </div>
                                          <div className="price">${item.price}</div>
                                          <div className="actions">
                                             <a style={{color:"white", cursor : "pointer"}} onClick={this.removeItem.bind(this, item.wishlist_id)}>
                                                Remove
                                             </a>
                                          </div>
                                       </li>      
                                    ))
                                    : 
                                       <h4>No Data Found!!</h4>
                                    }
                                    </ul>
                                 </div>
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
