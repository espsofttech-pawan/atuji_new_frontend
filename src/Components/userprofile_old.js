import React, { Component } from 'react';

import axios from 'axios';
import config from '../config/config'
import Cookies from 'js-cookie';
import Profileheader from "../directives/profileheader";
import 'react-toastify/dist/ReactToastify.css';

// import '../css/bootstrap.min.css';
// import '../css/plugins.css';

import { ToastContainer, toast } from 'react-toastify';

export default class userProfile extends Component {

    constructor(props) {
        super(props);
        this.state={
         user_name : '',  
         first_name : '',
         last_name : '',
         phone : '',
         profile_pic : '',
         countryid:[],
         countrylistData :[],
         getUser : '',
         currentPassword:'',
         password : '',
         password2 :'',
         image_file: null,
			image_preview: '',
      };
      this.deActivateAPI= this.deActivateAPI.bind(this)
      this.userProfileAPI = this.userProfileAPI.bind(this)
      this.updateProfilePicAPI = this.updateProfilePicAPI.bind(this)
      this.changePasswordAPI  = this.changePasswordAPI.bind(this)
      this.loginData =  JSON.parse(Cookies.get('loginSuccess'));
      
    }
    componentDidMount() {
      this.countryList()
      this.getUserProfileAPI()
     this.getUserProfilePicAPI()
   }

    
    async countryList() {
		axios({
			method: 'get',
			url: `${config.apiUrl}/getCountries`,
		//	headers: { "Authorization": this.loginData.message },
		}).then(response => {
			if (response.data.success === true) {
				this.setState({
					countrylistData: response.data.response
				})
			}
		})
	}
   
   async getUserProfileAPI() {
		await axios({
			method: 'post',
			url: `${config.apiUrl}/getuserprofile`,
		//	headers: { "Authorization": this.loginData.message },
      data:{'email':this.loginData.data.user_email}
		})
      .then(response => {
			if (response.data.success === true) {
				this.setState({
					getUser: response.data.response
				})
             
           
      }
   })
	}
       
   async getUserProfilePicAPI() {
		await axios({
			method: 'post',
			url: `${config.apiUrl}/getprofilepic`,
		//	headers: { "Authorization": this.loginData.message },
      data:{'email':this.loginData.data.user_email}
		})
      .then(response => {
			if (response.data.success === true) {
				this.setState({
					profile_pic: response.data.response
				})
            //  alert(JSON.stringify(this.state.profile_pic))
            console.log(this.state.profile_pic);
           
      }
   })
	}
   
   async updateProfilePicAPI(e) {
     
      e.preventDefault()
      const formData = new FormData();
		formData.append('profile_pic', this.state.image_file);
		formData.append('email', this.loginData.data.user_email);

      await axios({
         method: 'post', 
         url: `${config.apiUrl}/updateprofilepic`,
         data:formData
      })
         .then(result => {
            console.log('result',result);
             if (result.data.success === true) {
               
               toast.success(result.data.msg, {
                  position: toast.POSITION.TOP_CENTER
                  });
          this.getUserProfilePicAPI()
           } 
   
             else if (result.data.success === false) {
               toast.error(result.data.msg, {
                  position: toast.POSITION.TOP_CENTER
                  });
        
           }

          }).catch(err => {
         console.log(err);
         
      });
   }
 

   async deActivateAPI() {
		axios({
			method: 'post',
			url: `${config.apiUrl}/deactivate`,
		//	headers: { "Authorization": this.loginData.message },
      data:{'email':this.loginData.data.user_email}
		})
      .then(result => {
			if (result.data.success === true) {
            toast.success(result.data.msg, {
               position: toast.POSITION.TOP_CENTER , 
               })
               setTimeout(() => {
               
               window.location.href = `${config.baseUrl}`
               
               }, 3500);
           }
			
		})
	}
   

   async userProfileAPI(e) {
      e.preventDefault()
      await axios({
         method: 'post', 
         url: `${config.apiUrl}/updateuserprofile`,
         data:this.state.getUser
      })
         .then(result => {
            console.log('result',result);
             if (result.data.success === true) {
               
               toast.success(result.data.msg, {
                  position: toast.POSITION.TOP_CENTER
                  });
          this.getUserProfileAPI()
           } 
   
             else if (result.data.success === false) {
               toast.error(result.data.msg, {
                  position: toast.POSITION.TOP_CENTER
                  });
        
           }

          }).catch(err => {
         console.log(err);
         
      });
   }

  

   async changePasswordAPI(e) {
      e.preventDefault()
      await axios({
         method: 'post', 
         url: `${config.apiUrl}/changepassword`,
         data:{"email":this.loginData.data.user_email,"currentPassword":this.state.currentPassword,"password":this.state.password,"password2":this.state.password2}
      })
         .then(result => {
            console.log('result',result);
             if (result.data.success === true) {
               
               toast.success(result.data.msg, {
                  position: toast.POSITION.TOP_CENTER
                  });
         
           } 
   
             else if (result.data.success === false) {
               toast.error(result.data.msg, {
                  position: toast.POSITION.TOP_CENTER
                  });
           }

          }).catch(err => {
         console.log(err);
         
      });
   }
    handlePhoto = (e) => {
      this.setState({
        profile_pic :  e.target.files[0]
      })
    }
   //For Updation 
   handleChange = event =>{
   
      let value = event.target.value;

      this.setState(prevState => ({
      getUser: { ...prevState.getUser, [event.target.name]: value }
      }))
   }

   handleChange1 = e =>{
       
      this.setState({
          [e.target.name] : e.target.value
       })
   }
  refreshPage(){
            window.location.reload();
  } 


  handleImagePreview = (e) => {
   let image_as_base64 = URL.createObjectURL(e.target.files[0])
   let image_as_files = e.target.files[0];
   // if (image_as_files.type.indexOf('image') === 0) {
   //    file_type = 'image';
   // } else {
   //    file_type = 'video';
   // }

   this.setState({
      image_preview: image_as_base64,
      image_file: image_as_files,
   })


}

 


    render() {
   
        return (    

            <>   
            <ToastContainer/>
 <body className="alt-menu sidebar-noneoverflow">
    <Profileheader/>
 {/* <!--  BEGIN NAVBAR  --> */}
        
      {/* <!--  END NAVBAR  -->
      <!--  BEGIN MAIN CONTAINER  --> */}
      <div className="main-container sidebar-closed sbar-open" id="container">
         <div className="overlay"></div>
         <div className="cs-overlay"></div>
         <div className="search-overlay"></div>
         {/* <!--  BEGIN SIDEBAR  --> */}
         <div className="sidebar-wrapper sidebar-theme">
            <nav id="sidebar">
               <ul className="navbar-nav theme-brand flex-row  text-center logo-sidebar">
                  <li className="nav-item theme-logo">
                     <a href="index.html">
                     <img src="assets/img/a.png" className="navbar-logo" alt="logo"/>
                     </a>
                  </li>
                  <li className="nav-item theme-text">
                     <a href="index.html" className="nav-link"> Ajutii </a>
                  </li>
               </ul>
               <ul className="list-unstyled menu-categories" id="accordionExample">
                  <li className="menu active">
                     <a href="index.html"  aria-expanded="true" className="dropdown-toggle">
                        <div className="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                              <polyline points="9 22 9 12 15 12 15 22"></polyline>
                           </svg>
                           <span>Dashboard</span>
                        </div>
                     </a>
                  </li>
                  <li className="menu">
                     <a href="index.html" aria-expanded="false" className="dropdown-toggle">
                        <div className="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                           </svg>
                           <span>Activity</span>
                        </div>
                     </a>
                  </li>
                   <li className="menu">
                        <a href="my-product.html" aria-expanded="false" className="dropdown-toggle">
                            <div className="">
                             <i className="far fa-box-open"></i>
                                
                                <span>My Product</span>
                            </div>
                        </a>
                    </li>
                  <li className="menu">
                     <a href="whishlist.html" aria-expanded="false" className="dropdown-toggle">
                        <div className="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-list">
                              <line x1="8" y1="6" x2="21" y2="6"></line>
                              <line x1="8" y1="12" x2="21" y2="12"></line>
                              <line x1="8" y1="18" x2="21" y2="18"></line>
                              <line x1="3" y1="6" x2="3.01" y2="6"></line>
                              <line x1="3" y1="12" x2="3.01" y2="12"></line>
                              <line x1="3" y1="18" x2="3.01" y2="18"></line>
                           </svg>
                           <span>Whishlist</span>
                        </div>
                     </a>
                  </li>
                  <li className="menu">
                     <a target="_blank" href="transaction_list.html" aria-expanded="false" className="dropdown-toggle">
                        <div className="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layout">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="3" y1="9" x2="21" y2="9"></line>
                              <line x1="9" y1="21" x2="9" y2="9"></line>
                           </svg>
                           <span>Transaction</span>
                        </div>
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
         {/* <!--  END SIDEBAR  -->
         <!--  BEGIN CONTENT AREA  --> */}
         <div id="content" className="main-content">
            <div className="layout-px-spacing">
               <div className="row layout-spacing pt-5 pl-2">
                <div className="col-sm-1 col-lg-1">
                  
                </div>
                  {/* <!-- Content --> */}
                  <div className="col-md-10 col-lg-10 widget widget-content-area p-4">
                     
                     <div className="user-details section ">
                        <h2 className="section-title">User Details</h2>
                        <div className="section-content">
                           <div className="row">

                              <div className="col-lg-12">
                                 <div className="row">
                                   <div className="col-12 col-lg-4">
                                       <div className="form-group BlockchainID">
                                          {this.state.image_preview === '' ? 
                                          <img src={`${config.imageUrl + `/` + this.state.profile_pic.profile_pic}`} style={{width:"100px", height:"100px"}} className="img-fluid mr-2 browser_img" alt="avatar"/>
                                          :
                                          <img src={this.state.image_preview} style={{width:"100px", height:"100px"}} className="img-fluid mr-2 browser_img" alt="avatar"/>

                                       }
                                              <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={this.handleImagePreview}
            />

                                            {/* <a href="#" className="btn btn-primary btn-browser"><i className="fas fa-images"></i></a> */}
                                        
                                       </div>
                                    </div>
                                    <div className="col-12 col-md-4 col-lg-2">
                                       <div className="form-group">
                                          <label for="">User Name</label>
                                          <div>
                                          <input type="text" className="form-control authCss"  onChange={this.handleChange} placeholder="User Name" name="user_name" value={this.state.getUser.user_name}/>
 </div>
                                       </div>
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-5">
                                       <div className="form-group emailAddressField">
                                          <label for="">Email Address</label>
                                          <div className="field-txt">{this.state.getUser.email}</div>
                                       </div>
                                    </div>
                                   
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="personal-info section mt-4">
                        <h2 className="section-title">Personal Info</h2>
                        <div className="section-content">
                           <div className="row">
                              <div className="col-md-6 col-lg-6">
                                 <div className="form-group"><label for="">First Name</label><input type="text" className="form-control input-lg"  onChange={this.handleChange} placeholder="First Name" name="first_name" value={this.state.getUser.first_name}/></div>
                              </div>
                              <div className="col-md-6 col-lg-6">
                                 <div className="form-group"><label for="">Last Name</label><input type="text" className="form-control input-lg"  onChange={this.handleChange} placeholder="Last Name" name="last_name" value={this.state.getUser.last_name}/></div>
                              </div>
                              <div className="col-md-6 col-lg-6">
                                 <div className="form-group"><label for="datepicker">Date of Birth (Optional)</label><input type="date" className="form-control input-lg datepicker" name="dob" id="datepicker"  onChange={this.handleChange} placeholder="mm/dd/yyyy"  value={this.state.getUser.dob}/></div>
                              </div>
                              <div className="col-md-6 col-lg-6">
                                 <div className="form-group"><label for="">Contact Number (Optional)</label><input className="form-control input-lg"  onChange={this.handleChange} placeholder="Contact Number" name="phone" type="text" value={this.state.getUser.phone}/></div>
                              </div>
                              <div className="col-md-6 col-lg-6 country-dropdown">
                               
                                 <div className="form-group">
                                    <label for="countryOrigin">Select Country of Origin</label>
                                    <div className="customSelectHolder">
                                    
                                    <select name="countryid" onChange={this.handleChange} value={this.state.getUser.countryid} class="form-control  basic">
                                       <option selected="selected" value="">Select Country of Origin</option>
                                       {this.state.countrylistData.map(item=>(
                                       <option value={item.id}>{item.name}</option>
                                          ))}
                                             </select>
                                    </div>
                                    <div className="feeNote">
                                       <p>Please select your country of residence. We do not share this information - it is for our own tax purposes. <strong>Note</strong> that once the country of origin has been selected, it can not be changed.</p>
                                    </div>
                                 </div>
                              </div>
                              {/* <!-- <div className="col-md-6 col-lg-6">
                                 <div className="form-group"><label for="referralcode">Referral Code</label><input type="text" className="form-control input-lg referralcode" id="referral_code" name="referral_code" placeholder="Referral Code" value=""></div>
                              </div> --> */}
                              <div className="col-lg-12">
                                 {/* {this.state.image_preview === '' ? */}
                                 <button type="submit" onClick={this.state.image_preview === '' ? this.userProfileAPI :this.updateProfilePicAPI} className="btn btn-primary gradient md"><span>Update Info</span></button>
                                 
                              
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="bottomLinksOption clr">
                        <div>
                           <div className="form-group resetPassword last-child"><a href="#reset-password" className="link" data-toggle="modal" data-target="#reset-password-modal">Reset Password</a></div>
                           <div className="modal fade" id="reset-password-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
                              <div className="modal-dialog" role="document">
                                 <div className="modal-content">
                                    <div className="modal-body">
                                       <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                       <h5 className="modal-title">Reset Your Password</h5>
                                       <p></p>
                                       <form>
                                          <div className="input_row"><span className="reveal_pass">Old Password</span><input className="form-control input-lg" type="password" placeholder="Old Password" onChange={this.handleChange1} name="currentPassword" id="old_password" value={this.state.currentPassword}/></div>
                                          <div className="input_row"><span className="reveal_pass">New Password</span><input className="form-control input-lg" type="password" placeholder="New Password" onChange={this.handleChange1} name="password" id="new_password" value={this.state.password}/></div>
                                          <div className="input_row"><span className="reveal_pass">Confirm New Password</span><input className="form-control input-lg" type="password" placeholder="Confirm New Password" onChange={this.handleChange1} id="confirm_new_password" name="password2" value={this.state.password2}/></div>
                                          <div className="form-group last-child"><button type="submit" onClick={this.changePasswordAPI} className="btn mt-3 btn-primary custom-btn gradient md" style={{width:"100"}}><span>Update Password</span></button></div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* <div className="form-group resetPassword deactivateAccount last-child"><a href="#" className="link float-right" data-toggle="modal" data-target="#deactivate-modal">Deactivate Account</a></div> */}
                        <div class="form-group resetPassword deactivateAccount last-child"><a href="#" class="link float-right" data-toggle="modal" data-target="#deactivate-modal">Deactivate Account</a></div>
                        <div class="modal" id="deactivate-modal" tabindex="-1">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                 <h5 class="modal-title">Are You Sure?</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                <p className="account-heading">Going away for a long journey are we? Don't fret! Your data is always secure, and you can always reactivate your account by contacting support@atujifantasy.io.</p>
                              </div>
                              <div class="modal-footer">
                                 {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                <button type="button" onClick={this.refreshPage} class="btn btn-primary">Cancel</button>
                                <button type="button" onClick={this.deActivateAPI}  class="btn btn-primary">Deactivated Account</button>
                              </div>
                            </div>
                          </div>
                        </div>
                     
              
                     </div>
                  </div>
                  <div className="col-sm-1 col-lg-1">
                  
                </div>
               </div>
            </div>
         </div>
         {/* <!--  END CONTENT AREA  --> */}
      </div>

      </body>
        </>
        )
    }

        }