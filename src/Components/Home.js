import React, { Component } from 'react';
import Header from '../directives/header'
import Footer from '../directives/footer'
import axios from 'axios';
import config from '../config/config'
import { Link } from 'react-router-dom'
// import '../css/marketplace_new.css';
import 'react-toastify/dist/ReactToastify.css';

const headers = {
    'Content-Type': 'application/json'
 };

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = ({
          productList : []
      })       
      }
    componentDidMount() {
      this.getProductListAPI()
    }

   // >>>>>>>>>>>>>>>>>>>> Get Product List >>>>>>>>>>>>>>>>>>>
   async getProductListAPI(type) {
    axios.post(`${config.apiUrl}/listItem`, {'orderby' : type}, { headers }).then(response => {
       if (response.data.success === true) {
          this.setState({
              productList: response.data.response
          })
       }
       else if (response.data.success === false) {
          this.setState({
              productList: []
          })
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
            <Header/>
            <div classNameName="body_bg">
            <section className="banner_img">
           <img src="img/banner.gif"/>
         </section>

         <section class="product_section">
           <div class="container">
        
          </div>

          <div class="small-container">
            <div class="row row-2 ">
              {/* <!-- <h2>All Products</h2> --> */}
               <div class="row w-50 pt-3" id="row-width">

                
               </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sort 
                </button>
                <div class="dropdown-menu" id="dropdown_id" aria-labelledby="dropdownMenuButtons">
                  {/* <!-- <a class="dropdown-item" href="#">Recently Acitve</a> -->
                  <!-- <a class="dropdown-item" href="#">Ending soon</a> --> */}
                  <a class="dropdown-item" onClick={this.getProductListAPI.bind(this, 1)}>Lowest price</a>
                  <a class="dropdown-item" onClick={this.getProductListAPI.bind(this, 2)}>Hightest price</a>
                  <a class="dropdown-item" onClick={this.getProductListAPI.bind(this, 3)}>Newest</a>
                  <a class="dropdown-item" onClick={this.getProductListAPI.bind(this, 4)}>Oldest</a>
                </div>
              </div>
            </div>

            <div class="row">

            {this.state.productList.map((item, i) => (
              i < 9?
              <div class="col-sm-4 mb-3">
                <Link to={`${config.baseUrl}nftDetail/`+item.id}>
                  <img src={`${config.ipfsUrl}`+item.image} alt="" />
                </Link>
                <h4>{item.name}</h4>
                <div class="row">
                  <div class="col-12 col-md-12 text-center">
                    <p className="itemPrice">${item.price}<br/></p>
                    <button class="btn btn-primary btn-buy-now">
                    <Link style={{color:"white"}} to={`${config.baseUrl}nftDetail/`+item.id}>Buy Now</Link></button>
                  </div>
                </div>
              </div>
              : ''
             ))} 
              
                                                       
            </div>             

          </div>
         </section>

         <section className="video-section">
           <video autoplay="" muted="" playsinline="" loop="" className="style_videoBox__34LdH"><source src="https://cdn.axieinfinity.com/website/final.webm" type="video/webm" /><source src="https://cdn.axieinfinity.com/website/final.mp4" type="video/mp4" /></video>
         </section>
         
 <section className="video-section">
           <div className="container">
             <div className="row">
               <div className="col-12 col-md-8">
                 <iframe className="video_mp" src="https://www.youtube.com/embed/VS6UOyTb5eU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>
               <div className="col-12 col-md-4">
                 <div className="bg-content">
                   <h3 className="mb-3">BECOME A MASQUERADER</h3>
                   <p>Experience Carnival with an incredible group from around the world. Winery Mas is the band of chocie for all who want an amazing time on the road.</p>
                 </div>
               </div>
             </div>
           </div>
         </section>
       
              <Footer/>
                  </div>
                                 </>
        )
    }
}
