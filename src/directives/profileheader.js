import React, { Component } from 'react';
// import Header from '../directives/header'
// import Footer from '../directives/footer'
import config from '../config/config'
import Cookies from 'js-cookie';
export default class Profileheader extends Component {

    constructor(props) {
        super(props)

        this.loginData =  JSON.parse(Cookies.get('loginSuccess'));
     
    }
    componentDidMount() {

    }


    logout() {
        window.location.href = `${config.baseUrl}login`
        Cookies.remove('loginSuccess');
        
    }
    render() {
        return (    

            <>
    <div className="header-container fixed-top">
         <header className="header navbar navbar-expand-sm expand-header header-height">
            <a href="javascript:void(0);" className="sidebarCollapse" data-placement="bottom">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
               </svg>
            </a>
            <ul className="navbar-item flex-row ml-auto mr-auto">
               <li className="nav-item align-self-center menu-spc ">
                  <a href="#"> Our World</a>
               </li>
               <li className="nav-item align-self-center menu-spc ">
                  <a href="#"> Store</a>
               </li>
               <li className="nav-item align-self-center menu-spc ">
                  <a href="#">Limited Edition NFTs </a>
               </li>
               
                  {/* <!-- <li className="nav-item dropdown language-dropdown">
                      <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="language-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="assets/img/ca.png" className="flag-width" alt="flag">
                      </a>
                      <div className="dropdown-menu position-absolute" aria-labelledby="language-dropdown">
                          <a className="dropdown-item d-flex" href="javascript:void(0);"><img src="assets/img/de.png" className="flag-width" alt="flag"> <span className="align-self-center">&nbsp;German</span></a>
                          <a className="dropdown-item d-flex" href="javascript:void(0);"><img src="assets/img/jp.png" className="flag-width" alt="flag"> <span className="align-self-center">&nbsp;Japanese</span></a>
                          <a className="dropdown-item d-flex" href="javascript:void(0);"><img src="assets/img/fr.png" className="flag-width" alt="flag"> <span className="align-self-center">&nbsp;French</span></a>
                          <a className="dropdown-item d-flex" href="javascript:void(0);"><img src="assets/img/ca.png" className="flag-width" alt="flag"> <span className="align-self-center">&nbsp;English</span></a>
                      </div>
                  </li> --> */}
                
            </ul>
            <ul className="navbar-item flex-row ml-auto">
               <li className="nav-item align-self-center search-animated">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search toggle-search">
                     <circle cx="11" cy="11" r="8"></circle>
                     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <form className="form-inline search-full form-inline search" role="search">
                     <div className="search-bar">
                        <input type="text" className="form-control search-form-control  ml-lg-auto" placeholder="Search..."/>
                     </div>
                  </form>
               </li>
               
                  {/* <!-- <li className="nav-item dropdown language-dropdown">
                      <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="language-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src="assets/img/ca.png" className="flag-width" alt="flag">
                      </a>
                      <div className="dropdown-menu position-absolute" aria-labelledby="language-dropdown">
                          <a className="dropdown-item d-flex" href="javascript:void(0);"><img src="assets/img/de.png" className="flag-width" alt="flag"> <span className="align-self-center">&nbsp;German</span></a>
                          <a className="dropdown-item d-flex" href="javascript:void(0);"><img src="assets/img/jp.png" className="flag-width" alt="flag"> <span className="align-self-center">&nbsp;Japanese</span></a>
                          <a className="dropdown-item d-flex" href="javascript:void(0);"><img src="assets/img/fr.png" className="flag-width" alt="flag"> <span className="align-self-center">&nbsp;French</span></a>
                          <a className="dropdown-item d-flex" href="javascript:void(0);"><img src="assets/img/ca.png" className="flag-width" alt="flag"> <span className="align-self-center">&nbsp;English</span></a>
                      </div>
                  </li> --> */}
               <li className="nav-item dropdown message-dropdown">
                 
                      <button className="btn btn-outline-primary btn-rounded text-white ">Connect Wallet</button>
               
                  </li>
                  
                 {/* <!-- <li className="nav-item dropdown notification-dropdown">
                  <a href="javascript:void(0);" className="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span className="badge badge-success"></span>
                  </a>
                  
                  <div className="dropdown-menu position-absolute" aria-labelledby="notificationDropdown">
                      <div className="notification-scroll">
                  
                          <div className="dropdown-item">
                              <div className="media server-log">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
                                  <div className="media-body">
                                      <div className="data-info">
                                          <h6 className="">Server Rebooted</h6>
                                          <p className="">45 min ago</p>
                                      </div>
                  
                                      <div className="icon-status">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                      </div>
                                  </div>
                              </div>
                          </div>
                  
                          <div className="dropdown-item">
                              <div className="media ">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                  <div className="media-body">
                                      <div className="data-info">
                                          <h6 className="">Licence Expiring Soon</h6>
                                          <p className="">8 hrs ago</p>
                                      </div>
                  
                                      <div className="icon-status">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                      </div>
                                  </div>
                              </div>
                          </div>
                  
                          <div className="dropdown-item">
                              <div className="media file-upload">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                  <div className="media-body">
                                      <div className="data-info">
                                          <h6 className="">Kelly Portfolio.pdf</h6>
                                          <p className="">670 kb</p>
                                      </div>
                  
                                      <div className="icon-status">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  </li> --> */}
               <li className="nav-item dropdown user-profile-dropdown  order-lg-0 order-1">
                  <a href="javascript:void(0);" className="nav-link dropdown-toggle user" id="userProfileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="assets/img/profile-7.jpeg" className="img-fluid mr-2 profile_img profile-image" alt="avatar"/>
                  </a>
                  <div className="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
                     <div className="user-profile-section">
                        <div className="media mx-auto">
                           <img src="assets/img/profile-7.jpeg" className="img-fluid mr-2" alt="avatar"/>
                           <div className="media-body">
                              <h5>   {this.loginData.data.first_name}  {this.loginData.data.last_name}</h5>
                              <p>Project Leader</p>
                           </div>
                        </div>
                     </div>
                     <div className="dropdown-item">
                        <a href={`${config.baseUrl}userprofile`}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                           </svg>
                           <span>Profile</span>
                        </a>
                     </div>
                     {/* <!-- <div className="dropdown-item">
                        <a href="apps_mailbox.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg> <span>Inbox</span>
                        </a>
                        </div>
                        <div className="dropdown-item">
                        <a href="auth_lockscreen.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> <span>Lock Screen</span>
                        </a>
                        </div> --> */}
                     <div className="dropdown-item">
                        <a href={`${config.baseUrl}login`} onClick={this.logout}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out">
                              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                              <polyline points="16 17 21 12 16 7"></polyline>
                              <line x1="21" y1="12" x2="9" y2="12"></line>
                           </svg>
                           <span>Log Out</span>
                        </a>
                     </div>
                  </div>
               </li>
            </ul>
         </header>
      </div>

</>
)
}
}