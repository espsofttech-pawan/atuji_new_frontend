import React, { Component } from 'react';
import Header from '../directives/header'
import Footer from '../directives/footer'
import axios from 'axios';
import config from '../config/config'
import Cookies from 'js-cookie';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const headers = {
    'Content-Type': 'application/json'
 };

export default class forgot extends Component {

    constructor(props) {
        super(props);
          this.state = {
            email : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    componentDidMount() {

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }   
    handleSubmit = event =>{
        event.preventDefault();
        const { email } = this.state;
        const data = this.state 

        axios.post(`${config.apiUrl}/forgot`, data, { headers }, {email})
            .then(result=>{
            // alert(' ALL field');
            if(result.data.success === true ){
                toast.success(result.data.msg, {
                    position: toast.POSITION.TOP_CENTER
                    });
            setTimeout(() => {
            
           window.location.href = `${config.baseUrl}login`
            }, 2000);
            }
            else if (result.data.success === false) {
            toast.error(result.data.msg, {
            position: toast.POSITION.TOP_CENTER
            });
            
            this.setState({
            email : '',
          
        })
            }
            }).catch(err=>{
            toast.error(err.response.data?.msg, {
            position: toast.POSITION.TOP_CENTER
            })
            })
            }
            
    render() {
     
        return (    

            <>
             
              <div class="body_bg">
                  <Header/>
                  <ToastContainer/>
                  <section class="product_section pt-5">
          
          <img src="img/banner.gif" class="gif-banner"/>
          <div class="container">
            <div class="row  ">
              {/* <!-- <h2>All Products</h2> --> */}
             

                 <div class="col-sm-4">
                   
                 </div>
                 <div class="col-sm-4 mt-5">
                   <div class="login-wrap mt-5 py-4">
                    <div class="img d-flex align-items-center justify-content-center"  ><img src="img/a.png"/></div>
                    <div class="meta-mask">
                      <div class="row">
                      
                        <div class="col-12">
                        <h2>Forgot your password</h2>
                    <p>Please enter the email address you'd like your password reset information sent to</p>
                        </div>
                      </div>
                    </div>
                   <div class="or-login clearfix">
                        <span>Or</span>
                    </div>
                    <form action="#" class="login-form">
                    <div class="form-group">
                    <div class="icon d-flex align-items-center justify-content-center"></div>
                    <input type="text" class="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </div>
                   
                    <div class="form-group">
                    <button type="submit" onClick={this.handleSubmit} class="btn form-control btn-primary rounded submit px-3">Request Rsend Link</button>
                    </div>
                    </form>
                    <div class="w-100 text-center mt-4 text">
                    {/* <p class="mb-0">Don't have an account?</p> */}
                    <a href={`${config.baseUrl}login`}>Back to Login</a>
                    </div>
                    </div>
                 </div>
                 <div class="col-sm-4">
                   
                 </div>
                
                
               </div>
              
            </div>
{/*             
          </div> */}
         </section>

</div>

              <Footer/>
            </>
        )
    }
}
