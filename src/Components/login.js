import React, { Component } from 'react';
import Header from '../directives/header'
import Footer from '../directives/footer'
import axios from 'axios';
import config from '../config/config'
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Web3 from 'web3';


export default class login extends Component {

    constructor(props) {
        super(props);
        this.state={
            email : '',
            password : ""
        };
    }
    componentDidMount() {

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
         toast.error(`Please install MetaMask to use this dApp!`, {
            position: toast.POSITION.TOP_CENTER
         });
      }
   }     

    handleSubmit = event =>{
        event.preventDefault();
        const { email,password } = this.state;
        const data = this.state 
            axios.post(`${config.apiUrl}/login`, data,  {email,password})
            .then(result=>{
            if(result.data.success === true ){
            toast.success('Login Successfully!', {
            position: toast.POSITION.TOP_CENTER
            });
            setTimeout(() => {
            
            window.location.href = `${config.baseUrl}`
            
            }, 2500);
            console.log(result.data);
            Cookies.set('loginSuccess', result.data);
            }
            else if (result.data.success === false) {
            toast.error(result.data.msg, {
            position: toast.POSITION.TOP_CENTER
            });
            
            this.setState({
            email : '',
            password : ''
            })
            }
            }).catch(err=>{
            toast.error(err.response?.data?.msg, {
            position: toast.POSITION.TOP_CENTER
            })
            })
            }
            
            

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
         })
     }

    render() {

        return (    

            <>
              <div className="body_bg">
              <Header/>
              <ToastContainer/>
              <section className="product_section pt-5">
          
          <img src="img/banner.gif" className="gif-banner"/>
          <div className="container">
            <div className="row  ">
              {/* <!-- <h2>All Products</h2> --> */}
             

                 <div className="col-sm-4">
                   
                 </div>
                 <div className="col-sm-4 mt-5">
                   <div className="login-wrap mt-5 py-4">
                    <div className="img d-flex align-items-center justify-content-center"  ><img src="img/a.png"/></div>
                    <div className="meta-mask">
                      <div className="row">
                        <div className="col-md-4">
                          <img src="https://cdn.iconscout.com/icon/free/png-512/metamask-2728406-2261817.png" className="meta-icon"/>
                        </div>
                        <div className="col-8">
                          <p style={{cursor: 'pointer'}} onClick={this.connectMetasmask.bind(this)}>Login to Metamask</p>
                        </div>
                      </div>
                    </div>
                   <div className="or-login clearfix">
                        <span>Or</span>
                    </div>
                    <form action="#" className="login-form">
                    <div className="form-group">
                    <div className="icon d-flex align-items-center justify-content-center"></div>
                    <input type="text" className="form-control" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    </div>
                    <div className="form-group">
                    <div className="icon d-flex align-items-center justify-content-center"></div>
                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <div className="form-group d-md-flex">
                    <div className="w-100 text-md-right">
                    <a href={`${config.baseUrl}forgot`}>Forgot Password ?</a>
                    </div>
                    </div>
                    <div className="form-group">
                    <button type="submit" onClick={this.handleSubmit} className="btn form-control btn-primary rounded submit px-3">Login</button>
                    </div>
                    </form>
                    <div className="w-100 text-center mt-4 text">
                    <p className="mb-0">Don't have an account?</p>
                    <a href={`${config.baseUrl}register`}>Sign Up</a>
                    </div>
                    </div>
                 </div>
                 <div className="col-sm-4">
                   
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