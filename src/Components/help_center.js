import React, { Component } from 'react';
 import axios from 'axios';
 import config from '../config/config'
import Header from '../directives/header'
import Footer from '../directives/footer'
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
// const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // for local server
 const TEST_SITE_KEY = "6LcbmakaAAAAAD7pW2H9OZVULdhO2M_G8YutYckO"   // for live server


const headers = {
    'Content-Type': 'application/json'
 };

export default class helpcenter extends Component {

   constructor(props){
      super(props)
  
      this.state={
          captcha_code:''
      };    
  
      this.onChange = this.onChange.bind(this);
      this.saveContactForm = this.saveContactForm.bind(this);
    }  
  
    onChange(e) {   
      this.setState({
          [e.target.name]: e.target.value
      })
  }   
  
  handleChange1 = value => {
      console.log("Captcha value:", value);
      this.setState({
          captcha_code:'1'
      })
    };
  
  componentDidMount() {
  
  }
  
  async saveContactForm(e) {
      e.preventDefault()
      this.setState(this.state)
      const data = this.state
      data.type = 2;
      axios.post(`${config.apiUrl}/saveContactForm`, data, { headers })
         .then(response => {
          if (response.data.success === true) {
              toast.success('Help center form submitted successfully.!', {
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
          this.setState({
              buyOrdersList: []
          })
      })
  }  
  

    render() {
      
        return (    

            <>
            <div className="body_bg">
              <Header/>
              <ToastContainer/>
              {/* <ReCAPTCHA/> */}
              <section className="product_section pt-5">
          <img src="img/banner.gif" className="gif-banner"/>

          <div className="container">
            <div className="row  contactform">
              {/* <!-- <h2>All Products</h2> --> */}
             

                 <div className="col-md-2"></div>

                 <div className="col-md-8 mt-5">
                   <div className="login-wraps mt-5 py-4">
                    
                    <h2 className="text-center mb-4">Help Center</h2>
                    <p className="text-center mb-4">In case you face any difficulty or inconvenience within the Atujii platform, kindly fill in the form below, and we shall contact you shortly.</p>
                  
                    <form onSubmit={this.saveContactForm}>
                        <div className="row">
                           <div className="col-md-6 col-lg-6">
                              <div className="form-group"><label for="">Name</label>
                              <input type="text" onChange={this.onChange}  className="form-control input-lg" placeholder="Name" name="name" /></div>
                           </div>
                           <div className="col-md-6 col-lg-6">
                              <div className="form-group"><label for="">Email Address</label><input type="email" onChange={this.onChange} className="form-control input-lg" placeholder="Email Address" name="email"/></div>
                           </div>

                           <div className="col-md-12 col-lg-12">
                              <div className="form-group"><label for="">Subject</label><input type="text" onChange={this.onChange} className="form-control input-lg" placeholder="Subject" name="subject" /></div>
                           </div>

                           <div className="col-md-12 col-lg-12">
                              <div className="form-group"><label for="">Comments</label>
                              <textarea style={{background: "white"}} name="comment" id="comments" className="form-control" rows="5" onChange={this.onChange} cols="50" placeholder="Type here ..."></textarea></div>
                           </div>
                           <div className="col-md-12 col-lg-12">
                              <div>
                                 <div>
                                    <div style={{width: "304px", height: "78px"}}>
                                       <div>
                                       <ReCAPTCHA
                                            style={{ display: "inline-block" }}
                                            theme="dark"
                                            ref={this._reCaptchaRef}
                                            sitekey={TEST_SITE_KEY}
                                            onChange={this.handleChange1}
                                            asyncScriptOnLoad={this.asyncScriptOnLoad}
                                        />
                                           </div>
                                       <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: "250px", height: "40px", border: "1px solid rgb(193, 193, 193)", margin: "10px 25px; padding: 0px",resize: "none", display: "none"}}></textarea>
                                    </div>
                                    <iframe style={{display: "none"}}></iframe>
                                 </div>
                              </div>
                              <div className="clr formBottom">
                                 <div className="formText float-left">* All the field are necessary to fill in.</div>
                                 <button type="submit" disabled="" className="custom-btn gradient lg float-right" style={{padding: "0px 47px"}}><span> Submit </span></button>
                              </div>
                           </div>
                        </div>
                     </form>
                   
                    </div>
                 </div>
                 <div className="col-md-2"></div>
                
                
               </div>
              
            </div>
            
          {/* </div> */}




         </section>
              <Footer/>


          </div>

            </>
        )
    }

        }