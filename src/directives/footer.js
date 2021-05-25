import React, { Component } from 'react';
import config from '../config/config';
import Cookies from 'js-cookie'

export default class footer extends Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }

    render() {
        return (    

            <>
    <footer className="footer_part">
       	<img src="img/footer.gif" className="gif-footer"/>
            <div className="footer_top">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-6 col-lg-4">
                        <div className="single_footer_part">
                           <a href="" className="footer_logo_iner"> <img src="img/a.png" alt="#" className="Main_logo"/> </a>
                           <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing
                              days
                              open
                           </p>
                           <div className="footer_icon social_icon">
                           <ul className="list-unstyled">
                              {/* <!-- <li><a href="#" className="single_social_icon"><i className="fab fa-facebook-f"></i></a></li> --> */}
                              {/* <li><a href="#" className="single_social_icon"><i className="fab fa-twitter"></i></a></li> */}
                              {/* <!-- <li><a href="#" className="single_social_icon"><i className="fab fa-instagram"></i></a></li> -->
                              <!-- <li><a href="#" className="single_social_icon"><i className="fab fa-telegram"></i></a></li> -->
                              <!-- <li><a href="#" className="single_social_icon"><i className="fab fa-medium"></i></a></li> -->
                              <!-- <li><a href="#" className="single_social_icon"><i className="fab fa-youtube"></i></a></li> --> */}
                              {/* <li><a href="#" className="single_social_icon"><i className="fab fa-discord"></i></a></li> */}
                              {/* <!-- <li><a href="#" className="single_social_icon"><i className="fab fa-reddit"></i></a></li> --> */}
                           </ul>
                        </div>
                        </div>
                     </div>
                     <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                           <h4>Social Link</h4>
                           <ul>
                              <li><a href="https://www.facebook.com/atujii">
                                 {/* <i className="fab fa-facebook-f"></i> &nbsp; */}
                                 Facebook</a></li>
                              <li><a href="https://twitter.com/?lang=en/atujii">
                                 {/* <i className="fab fa-twitter"></i> &nbsp; */}
                                 Twitter</a></li>
                              <li><a href="https://www.instagram.com/atujii">
                                 {/* <i className="fab fa-instagram"></i>&nbsp;  */}
                                 Instagram</a></li>
                              <li><a href="https://telegram.org/atujii">
                                 {/* <i className="fab fa-telegram"></i> &nbsp; */}
                                 Telegram</a></li>
                              <li><a href="https://www.youtube.com/atujii">
                                 {/* <i className="fab fa-youtube"></i> &nbsp; */}
                                 Youtube</a></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-sm-6 col-lg-2 mt-1">
                        <div className="single_footer_part">
                           <h4 className="">Quick link</h4>
                           <ul>
                           <li><a href=""> Home</a></li>
                              <li><a href={`${config.baseUrl}store`}>Store</a></li>
                              <li><a href={`${config.baseUrl}limitedEdition`}>Limited Edition</a></li>

                              {!Cookies.get('loginSuccess')? 
                                 <li><a href={`${config.baseUrl}login`} >Profile</a></li>
                              : 
                                 <li><a href={`${config.baseUrl}userprofile`}>Profile</a></li>
                              }

                              {!Cookies.get('loginSuccess')? 
                                 <li><a href={`${config.baseUrl}login`}>My NFT</a></li>
                              : 
                                 <li><a href={`${config.baseUrl}myNft`}>My NFT</a></li>
                              }
                           </ul>
                        </div>
                     </div>
                     <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                           <h4>About</h4>
                           <ul>
                             {/* <li><a href="#">Why ajutii</a></li>
                             <li><a href="#">Company</a></li> */}
                             <li><a href={`${config.baseUrl}contactus`} >Contact Us</a></li>
                             <li><a href={`${config.baseUrl}aboutus`}>About us</a></li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-sm-6 col-lg-2">
                        <div className="single_footer_part">
                           <h4>Help</h4>
                           <ul>
                             <li><a href={`${config.baseUrl}helpcenter`}>Help Center</a></li>
                             <li><a href={`${config.baseUrl}privacypolicy`}>Privacy Policy</a></li>
                             <li><a href={`${config.baseUrl}termsandcondition`}>Term & Condition</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copygight_text">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-8">
                        <div className="copyright_text">
                           <p>
                              Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved <i className="ti-heart" aria-hidden="true"></i> by <a href="#  " target="_blank">ajutii</a>
                           </p>
                        </div>
                     </div>
                     <div className="col-lg-4">
                       
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         </>

         )
         }
         }