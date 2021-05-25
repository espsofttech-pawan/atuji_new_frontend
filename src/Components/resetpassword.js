import React, { Component } from 'react';
import Header from '../directives/header'
import Footer from '../directives/footer'
import axios from 'axios';
import config from '../config/config'
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const headers = {
  'Content-Type': 'application/json'
};

export default class resetpassword extends Component {

    constructor(props) {
        super(props);
            this.state={
          password : '',
          password2 : ''
      };
      const { match: { params } } = this.props;
    this.token = params.token 
    
    }

    componentDidMount() {

    }

    
  
    handleSubmit = event =>{
      event.preventDefault();
      const { password,password2 } = this.state;
      const data = this.state 

      axios.post(`${config.apiUrl}/resetpassword`, {token:this.token,password:password,password2:password2}, { headers })
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
          
        
          }
          }).catch(err=>{
          toast.error(err.response.data?.msg, {
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
                        <h2>Reset your password</h2>
                        </div>
                      </div>
                    </div>
                   <div class="or-login clearfix">
                        <span>Or</span>
                    </div>
                    <form action="#" class="login-form">
                    <div class="form-group">
                    <div class="icon d-flex align-items-center justify-content-center"></div>
                    <input type="text" class="form-control" placeholder="New Password" name="password" onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <div class="form-group">
                    <div class="icon d-flex align-items-center justify-content-center"></div>
                    <input type="text" class="form-control" placeholder="Re-type New Password" name="password2" onChange={this.handleChange} value={this.state.password2} />
                    </div>
                    <div class="form-group">
                    <button type="submit" onClick={this.handleSubmit} class="btn form-control btn-primary rounded submit px-3">Update Password</button>
                    </div>
                    </form>
                    <div class="w-100 text-center mt-4 text">
                    {/* <p class="mb-0">Don't have an account?</p> */}
                    <a href={`${config.baseUrl}login`}>Let's go to Sign In</a>
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
