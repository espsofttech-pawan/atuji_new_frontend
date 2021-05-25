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

const initialState = {
    old_password: '',
    new_password: '',
    confirm_password: '',
}

export default class Marketplacedetail extends Component {

constructor(props) {
    super(props)

    this.state = ({
        initialState : [],
        countrylistData :[],
        countryid:[],
        getUser : '',
        image_preview: '',
        profile_pic : '',
    })

    if(Cookies.get('loginSuccess')){
        this.loginData = JSON.parse(Cookies.get('loginSuccess'))
     }    

    this.onChange = this.onChange.bind(this);
    this.changePasswordAPI  = this.changePasswordAPI.bind(this)
    this.userProfileAPI = this.userProfileAPI.bind(this)
    this.updateProfilePicAPI = this.updateProfilePicAPI.bind(this)
}

onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleChange1 = e =>{
       
    this.setState({
        [e.target.name] : e.target.value
     })
 }

 handleChange = event =>{
   
    let value = event.target.value;

    this.setState(prevState => ({
    getUser: { ...prevState.getUser, [event.target.name]: value }
    }))
 }

componentDidMount() {
    this.getUserProfilePicAPI()
    this.getUserProfileAPI()
    this.countryList()
}

async countryList() {
    axios({
        method: 'get',
        url: `${config.apiUrl}/getCountries`,
    }).then(response => {
        if (response.data.success === true) {
            this.setState({
                countrylistData: response.data.response
            })
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

                setTimeout(() => {
                    window.location.reload()
                }, 2000);                 

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

handleImagePreview = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0])
    let image_as_files = e.target.files[0];
    this.setState({
       image_preview: image_as_base64,
       image_file: image_as_files,
    })
 }

 async getUserProfilePicAPI() {
    await axios({
        method: 'post',
        url: `${config.apiUrl}/getprofilepic`,
        data:{'email':this.loginData.data.user_email}
    })
    .then(response => {
        if (response.data.success === true) {
            this.setState({
                profile_pic: response.data.response
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

    //======================================  Change Password API Start  ======================        

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
					setTimeout(() => {
						window.location.reload()
					}, 2000);                
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
                        <li className="edit-ln active"><Link className="dropdown-item" to={`${config.baseUrl}userProfile`}>Account Setting</Link></li>
                        <li className="edit-ln"><Link className="dropdown-item" to={`${config.baseUrl}wishlist`}>WishList</Link></li>
                        <li className="edit-ln"><Link className="dropdown-item" to={`${config.baseUrl}myNft`}>My NFT</Link></li>
                        {/* <li className="edit-ln"><Link className="dropdown-item" to={`${config.baseUrl}transactions`}>Transactions</Link></li> */}
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-xs-12 col-md-9 _editor-content_">
                <div className="sec" data-sec="">
                <div className="be-large-post mb-4">
                    <div className="info-block style-2">
                        <div className="be-large-post-align ">
                            <h3 className="info-block-label">Account Setting</h3>
                        </div>
                    </div>
                    <div className="be-large-post-align">
                        <div className="Toastify"></div>
                        <div className="be-change-ava">
                            <a className="be-ava-user style-2" href="javascript:void(0)">
                            {this.state.image_preview === '' ? 
                                <img src={`${config.imageUrl + `/` + this.state.profile_pic.profile_pic}`} style={{width:"100px", height:"100px"}} className="img-fluid mr-2 browser_img" alt="avatar"/>
                                :
                                <img src={this.state.image_preview} style={{width:"100px", height:"100px"}} className="img-fluid mr-2 browser_img" alt="avatar"/>
                            }
                            <p>Profile Image</p>
                            </a>
                        </div>
                    </div>
                    <div className="be-large-post-align mt-4">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12">
                            <div className="input-group mb-4">
                                <div className="custom-file">
                                    <input type="file" accept=".png, .jpg, .jpeg" name="photo" onChange={this.handleImagePreview} className="custom-file-input" id="inputGroupFile01" />
                                    <label className="custom-file-label" for="inputGroupFile01">Profile Picture</label></div>
                            </div>
                            </div>

                            <div className="input-col col-xs-12 col-sm-12">
                            <div className="form-group fg_icon focus-2">
                                <div className="form-label">First Name</div>
                                <input className="form-input" type="text"  onChange={this.handleChange} name="first_name" value={this.state.getUser.first_name} />
                            </div>
                            </div>

                            <div className="input-col col-xs-12 col-sm-12">
                            <div className="form-group focus-2">
                                <div className="form-label">Last Name</div>
                                <input className="form-input" type="text" onChange={this.handleChange} name="last_name" value={this.state.getUser.last_name} />
                            </div>
                            </div>

                            <div className="input-col col-xs-12 col-sm-12">
                            <div className="form-group focus-2">
                                <div className="form-label">Mobile Number</div>
                                <input className="form-input" type="text" onChange={this.handleChange} name="phone" value={this.state.getUser.phone} />
                            </div>
                            </div>

                            <div className="input-col col-xs-12 col-sm-12">
                            <div className="form-group focus-2">
                                <div className="form-label">Country</div>
                                <select name="countryid" onChange={this.handleChange} value={this.state.getUser.countryid} class="form-control" style={{display:"block"}}>
                                       <option selected="selected" value="">Select Country</option>
                                       {this.state.countrylistData.map(item=>(
                                        <option value={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            </div>

                            <div className="col-xs-12 col-sm-12">
                            <div>
                                <button className="btn color-1 size-1 hover-1 btn-right mt-2" onClick={this.state.image_preview === '' ? this.userProfileAPI :this.updateProfilePicAPI}>Update</button>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="sec" data-sec="edit-password">
                <div className="be-large-post mb-4">
                    <div className="info-block style-2">
                        <div className="be-large-post-align">
                            <h3 className="info-block-label">Password</h3>
                        </div>
                    </div>
                    <div className="be-large-post-align">
                        <div className="row">
                            <div className="input-col col-xs-12 col-sm-4">
                            <div className="form-group focus-2">
                                <div className="form-label">Old Password</div>
                                <input className="form-control input-lg form-input" type="password" placeholder="Old Password" onChange={this.handleChange1} name="currentPassword" id="old_password" value={this.state.currentPassword}/>
                            </div>
                            </div>
                            <div className="input-col col-xs-12 col-sm-4">
                            <div className="form-group focus-2">
                                <div className="form-label">New Password</div>
                                <input className="form-control input-lg form-input" type="password" placeholder="New Password" onChange={this.handleChange1} name="password" id="new_password" value={this.state.password}/>
                            </div>
                            </div>
                            <div className="input-col col-xs-12 col-sm-4">
                            <div className="form-group focus-2">
                                <div className="form-label">Repeat Password</div>
                                <input className="form-control input-lg form-input" type="password" placeholder="Confirm New Password" onChange={this.handleChange1} id="confirm_new_password" name="password2" value={this.state.password2}/>
                            </div>
                            </div>
                            <div><button type="submit" onClick={this.changePasswordAPI} className="btn color-1 size-1 hover-1 btn-right mt-2">Change Password</button></div>
                        </div>
                    </div>
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