import React, { Component } from 'react';
 import axios from 'axios';
 import config from '../config/config'
import Header from '../directives/header'
import Footer from '../directives/footer'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const headers = {
    'Content-Type': 'application/json'
 };

export default class register extends Component {

    constructor(props) {
        super(props);
         this.state={
            first_name : '',
            last_name : '',
            email : '',
            password : '',
            password2 : ''
        };
         
      const { match: { params } } = this.props;
     
      this.token = params.token 
    }
  

    handleChange = e =>{
       
        this.setState({
            [e.target.name] : e.target.value
         });
     }
     
    componentDidMount() {
      
        if(this.token){
            this.verifyAccountAPI()
            }
    }

    async verifyAccountAPI() {
        axios.post(`${config.apiUrl}/verifyAccount/`+this.token, { headers })
        .then(result => {
            console.log(result);
            if(result.data.success === true ){
                toast.success(result.data.msg, {
                position: toast.POSITION.TOP_CENTER , 
                })
                setTimeout(() => {
                
                window.location.href = `${config.baseUrl}login`
                
                }, 3500);
            }
             if (result.data.success === false) {
                toast.error(result.data.msg, {
                    position: toast.POSITION.TOP_CENTER
                  });
            }           
        })
        .catch(err => {
         // console.log(err);
          toast.error(err.response.data?.msg, {
            position: toast.POSITION.TOP_CENTER , 
            })
        });
        setTimeout(() => {
            window.location.href = `${config.baseUrl}login`
        }, 3500);
    }  
     

    handleSubmit = event =>{
        event.preventDefault();
        const {first_name,last_name,email,password,password2 } = this.state;
    
            axios.post(`${config.apiUrl}/register`,{first_name,last_name,email,password,password2})
            .then(result=>{
        
    console.log('Result',result);
        if(result.data.success === true ){
            toast.success(result.data.msg, {
                position: toast.POSITION.TOP_CENTER
                });
        setTimeout(() => {
        
            window.location.href = `${config.baseUrl}login`
        }, 2000);
         }
        }).catch(err=>{
        // console.log(err);
        toast.error(err.response.data?.msg, {
            position: toast.POSITION.TOP_CENTER, autoClose:1500
        
        }, setTimeout(() => {
                
        }, 500));
     
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
            <div className="row  ">
              {/* <!-- <h2>All Products</h2> --> */}
             

                 <div className="col-sm-4">
                   
                 </div>
                 <div className="col-sm-4 mt-5">
                   <div className="login-wrap mt-5 py-4">
                    
                    <h2 className="text-center mb-4">Sign up</h2>
                    
                    <form action="#" className="login-form">
                    <div className="form-group mb-4">
                    <div className="icon d-flex align-items-center justify-content-center"></div>
                    <input type="text" className="form-control" name="first_name" onChange={this.handleChange} placeholder="First Name" />
                    </div>
                    <div className="form-group mb-4">
                    <div className="icon d-flex align-items-center justify-content-center"></div>
                    <input type="text" className="form-control" name="last_name" onChange={this.handleChange} placeholder="Last Name" />
                    </div>
                    <div className="form-group mb-4">
                    <div className="icon d-flex align-items-center justify-content-center"></div>
                    <input type="Email" className="form-control" name="email" onChange={this.handleChange} placeholder="Email" />
                    </div>
                    <div className="form-group mb-4">
                    <div className="icon d-flex align-items-center justify-content-center"></div>
                    <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password" />
                    </div>
                    <div className="form-group mb-4">
                    <div className="icon d-flex align-items-center justify-content-center"></div>
                    <input type="password" className="form-control" name="password2" onChange={this.handleChange} placeholder="Confirm Password" />
                    </div>
                    <div className="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1"> I accept the Terms of Use & Privacy Policy</label>
                      </div>
                   
                    <div className="form-group">
                    <button type="submit" onClick={this.handleSubmit} className="btn form-control btn-primary rounded submit px-3">Sign up</button>
                    </div>
                    </form>
                   
                    </div>
                 </div>
                 <div className="col-sm-4">
                   
                 </div>
                
                
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