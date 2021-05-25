import React, { Component } from 'react';
import config from '../config/config'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import Web3 from 'web3';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default class header extends Component {

    constructor(props) {
        super(props)
        window.scrollTo({top: 0, left: 0 }); 
        this.loginData = (!Cookies.get('loginSuccess')) ? [] : JSON.parse(Cookies.get('loginSuccess'))
        this.state={
         ConnectWalletAddress:'',
         getProfilePicAPIData : []
        }         
    
      }   

    componentDidMount() {
      setTimeout(() => {
         if(window.ethereum){
            const { ethereum } = window;
            this.setState({
               ConnectWalletAddress:ethereum.selectedAddress
            })         
         }   
      }, 1000);       
      this.getProfilePicAPI()
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

    logout(){
      Cookies.remove("loginSuccess")
      window.location.href = 'login';
    }    

    async getProfilePicAPI() {
      await axios({
         method: 'post',
         url: `${config.apiUrl}/getProfilePic`,
         headers: { "Authorization": this.loginData.message },
         data: { "email": this.loginData.data?.user_email }
      }).then(response => {
         if (response.data.success === true) {
            this.setState({
               getProfilePicAPIData: response.data?.response
            })
         }
      })
   }   

    render() {
        return (    

            <>

{/* <div className="body_bg">    */}
<header className="main_menu single_page_menu">
	      	<img src="img/menu-test1.gif" className="gif-img"/>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-12">
                     <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href={`${config.baseUrl}`}> 
                        <img src="img/a.png" alt="logo" className="Main_logo"/> 
                           <span className="main_logo_text"></span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="menu_icon"><i className="fas fa-bars"></i></span>
                        

                        </button>
                       <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                           <ul className="navbar-nav">
                              <li className="nav-item">
                                 <Link className="nav-link" to={`${config.baseUrl}ourWorld`}>Our World </Link>
                              </li>
                              <li className="nav-item">
                                 <Link className="nav-link" to={`${config.baseUrl}store`}>
                                    Store </Link>
                              </li>
                               <li className="nav-item">
                               <Link className="nav-link" to={`${config.baseUrl}limitedEdition`}>Limited Edition NFTs </Link>
                              </li>
                              <li className="nav-item">
                              <Link className="nav-link" to={`${config.baseUrl}howItWorks`}>How it Works </Link>
                              </li>

                              {!Cookies.get('loginSuccess')?
                              <>
                              <li className="nav-item">
                                 <a className="nav-link" href={`${config.baseUrl}login`}>Login</a>
                              </li>
                              <li>
                                 <a className="nav-link" href={`${config.baseUrl}register`}>Signup</a>
                              </li> </>
                             : ''}
                           </ul>
                        </div>
                        <ul className="navbar-nav" id="side_nav">
                        
                             <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <img src="img/wallet.png" className="menu_icons"/>
                              </a>
                              <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                              {(this.state.ConnectWalletAddress)?
                              <a className="dropdown-item"  target="_blank"  href={`${config.blockchainUrl}address/${this.state.ConnectWalletAddress}`}>{this.state.ConnectWalletAddress.toString().substring(0,4)+'...'+this.state.ConnectWalletAddress.toString().substr(this.state.ConnectWalletAddress.length-4)}</a>
                              :

                                 <a style={{cursor: 'pointer'}} className="dropdown-item" onClick={this.connectMetasmask.bind(this)} > Connect Wallet</a>
                              }
                              </div>
                           </li>
                           
                           {/* <li className="nav-item">
                              <a className="nav-link" href="#"> <img src="img/shopping.png" className="menu_icons_s"/></a>
                           </li> */}
                          
                           {/* <!-- <li className="nav-item "><a className="nav-link modeToggle clr" href="#header"><span></span></a></li> --> */}
                           <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <img src={(this.state.getProfilePicAPIData.profile_pic === '' || this.state.getProfilePicAPIData.profile_pic === undefined || this.state.getProfilePicAPIData.profile_pic === null) ? "img/12.png" : `${config.imageUrl}/${this.state.getProfilePicAPIData.profile_pic}`} className="mask-icons"/>
                              </a>
                              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              {!Cookies.get('loginSuccess')?
                                 <Link className="dropdown-item" to={`${config.baseUrl}login`}> Profile</Link>
                                 :
                                 <Link className="dropdown-item" to={`${config.baseUrl}userProfile`}> Profile</Link>
                              }

                              {!Cookies.get('loginSuccess')?
                                 <Link className="dropdown-item" to={`${config.baseUrl}login`}> My NFT</Link>
                                 :
                                 <Link className="dropdown-item" to={`${config.baseUrl}myNft`}> My NFT</Link>
                              }
                               
                                 {!Cookies.get('loginSuccess')?
                                    <Link className="dropdown-item" to={`${config.baseUrl}login`}>Wishlist</Link>
                                 :
                                 <Link className="dropdown-item" to={`${config.baseUrl}wishlist`}>Wishlist</Link>
                                 }

                              {/* {!Cookies.get('loginSuccess')?
                                 <Link className="dropdown-item" to={`${config.baseUrl}login`}>Transactions</Link>
                                 :
                                 <Link className="dropdown-item" to={`${config.baseUrl}transactions`}>Transactions</Link>
                              } */}

                                 {!Cookies.get('loginSuccess')?
                                    <>
                                    <a className="dropdown-item" href={`${config.baseUrl}login`}>Login</a>
                                    <a className="dropdown-item" href={`${config.baseUrl}register`}>Signup</a> </>
                                 : 
                                    <Link className="dropdown-item" onClick={this.logout} to={`${config.baseUrl}`}>Logout</Link>
                                 }
                              </div>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
         </header>

{/* </div> */}

</>
)
}
}