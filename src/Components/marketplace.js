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

export default class Marketplace extends Component {

    constructor(props) {
        super(props);
        this.state={
        getMarketPlace : [],  
        }
      }
    componentDidMount() {
      this.getMarketPlaceAPI();
    }


    async getMarketPlaceAPI() {
		await axios({
			method: 'get',
			url: `${config.apiUrl}/getmarketplace`,
		//	headers: { "Authorization": this.loginData.message },
		})
      .then(response => {
			if (response.data.success === true) {
				this.setState({
					getMarketPlace: response.data.response
				})
                
      }
   })
	}
   

            
    render() {
     
        return (    

            <>
             
             <div className="body_bg authCss">
         <Header/>
        {/* <!--  <section className="banner_img">
           <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5d9c2649596399.58b907ebbfaa1.jpg" className="banner_images">
         </section>
 --> */}
         <section className="product_sections">
           <div className="container">
            <div className="row">
               <div className="col-12 col-md-3">
                 <aside className="col-sm-12 ">
                  <div className="card" id="cards_aside">
                     <h3><span className="clear_class"><a href="#">Clear</a></span></h3>
                      <article className="card-group-item">
                        <header className="card-header">
                           <h6 className="title">Collection </h6>
                        </header>
                        <div className="filter-content">
                           <div className="card-body">
                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">52</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check1"/>
                                 <label className="custom-control-label" for="Check1">Atujii NFTs</label>
                              </div>
                               {/* <!-- form-check.// --> */}

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">132</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check2"/>
                                 <label className="custom-control-label" for="Check2">Hash Masks NFTs</label>
                              </div> 
                              {/* <!-- form-check.// --> */}

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">17</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check3"/>
                                 <label className="custom-control-label" for="Check3">Axie Infinity NFTs</label>
                              </div>
                               {/* <!-- form-check.// --> */}

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">7</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check4"/>
                                 <label className="custom-control-label" for="Check4">CryptoKitties NFTs</label>
                              </div>

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">7</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check5"/>
                                 <label className="custom-control-label" for="Check5">Sour Strips NFTs</label>
                              </div>

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">7</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check7"/>
                                 <label className="custom-control-label" for="Check7">Sorare NFTs</label>
                              </div> 
                              {/* <!-- form-check.// --> */}
                           </div> 
                           {/* <!-- card-body.// --> */}
                        </div>
                     </article>
                    
                     <article className="card-group-item">
                        <header className="card-header">
                           <h6 className="title">Sort By</h6>
                        </header>
                        <div className="filter-content">
                           <div className="card-body">
                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">52</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check7"/>
                                 <label className="custom-control-label" for="Check7">Lowest price</label>
                              </div> 
                              {/* <!-- form-check.// --> */}

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">132</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check8"/>
                                 <label className="custom-control-label" for="Check8">Hightest price</label>
                              </div> 
                              {/* <!-- form-check.// --> */}

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">7</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check11"/>
                                 <label className="custom-control-label" for="Check11">Newest</label>
                              </div>

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">7</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check12"/>
                                 <label className="custom-control-label" for="Check12">Oldest</label>
                              </div>
                               {/* <!-- form-check.// --> */}
                           </div>
                            {/* <!-- card-body.// --> */}
                        </div>
                     </article> 
                     {/* <!-- card-group-item.// --> */}
                      <article className="card-group-item">
                        <header className="card-header">
                           <h6 className="title">Price Range </h6>
                        </header>
                        <div className="filter-content">
                           <div className="card-body">
                           <div className="form-row">
                           <div className="form-group col-md-6">
                             <label>Min</label>
                             <input type="number" className="form-control" id="inputEmail4" placeholder="$1000"/>
                           </div>
                           <div className="form-group col-md-6 text-right">
                             <label>Max</label>
                             <input type="number" className="form-control" placeholder="$10,0000"/>
                           </div>
                           </div>
                           </div> 
                           {/* <!-- card-body.// --> */}
                        </div>
                     </article>
                      {/* <!-- card-group-item.// --> */}
                  </div>
                   {/* <!-- card.// --> */}
                </aside>
                </div>
                 
           

{/* 
               </div> */}
               <div className="mobile_view_aside">
                    <li className="nav-item dropdown" id="mobile-filter">
                    <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort option
                    </a>
                    <div id="mobile-filters" className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div className="card mobile-cards" id="cards_asides">
                     <h3><span className="clear_className"><a href="#">Clear</a></span></h3>
                      <article className="card-group-item">
                        <header className="card-header">
                           <h6 className="title">Collection </h6>
                        </header>
                        <div className="filter-content">
                           <div className="card-body">
                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">52</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check1"/>
                                 <label className="custom-control-label" for="Check1">Atujii NFTs</label>
                              </div> 
                              {/* <!-- form-check.// --> */}

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">132</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check2"/>
                                 <label className="custom-control-label" for="Check2">Hash Masks NFTs</label>
                              </div> 
                              {/* <!-- form-check.// --> */}

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">17</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check3"/>
                                 <label className="custom-control-label" for="Check3">Axie Infinity NFTs</label>
                              </div>
                               {/* <!-- form-check.// --> */}

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">7</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check4"/>
                                 <label className="custom-control-label" for="Check4">CryptoKitties NFTs</label>
                              </div>

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">7</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check5"/>
                                 <label className="custom-control-label" for="Check5">Sour Strips NFTs</label>
                              </div>

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">7</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check7"/>
                                 <label className="custom-control-label" for="Check7">Sorare NFTs</label>
                              </div>
                               {/* <!-- form-check.// --> */}
                           </div> 
                           {/* <!-- card-body.// --> */}
                        </div>
                     </article>
                    
                     <article className="card-group-item">
                        <header className="card-header">
                           <h6 className="title">Sort By</h6>
                        </header>
                        <div className="filter-content">
                           <div className="card-body">
                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">52</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check7"/>
                                 <label className="custom-control-label" for="Check7">Lowest price</label>
                              </div> 
                              {/* <!-- form-check.// --> */}

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">132</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check8"/>
                                 <label className="custom-control-label" for="Check8">Hightest price</label>
                              </div> 
                              {/* <!-- form-check.// --> */}

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">7</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check11"/>
                                 <label className="custom-control-label" for="Check11">Newest</label>
                              </div>

                              <div className="custom-control custom-checkbox">
                                 {/* <!-- <span className="float-right badge badge-light round">7</span> --> */}
                                 <input type="checkbox" className="custom-control-input" id="Check12"/>
                                 <label className="custom-control-label" for="Check12">Oldest</label>
                              </div> 
                              {/* <!-- form-check.// --> */}
                           </div>
                            {/* <!-- card-body.// --> */}
                        </div>
                     </article>
                     {/* <!-- card-group-item.// --> */}
                      <article className="card-group-item">
                        <header className="card-header">
                           <h6 className="title">Price Range </h6>
                        </header>
                        <div className="filter-content">
                           <div className="card-body">
                           <div className="form-row">
                           <div className="form-group col-md-6">
                             <label>Min</label>
                             <input type="number" className="form-control" id="inputEmail4" placeholder="$0"/>
                           </div>
                           <div className="form-group col-md-6 text-right">
                             <label>Max</label>
                             <input type="number" className="form-control" placeholder="$1,0000"/>
                           </div>
                           </div>
                           </div> 
                           {/* <!-- card-body.// --> */}
                        </div>
                     </article> 
                     {/* <!-- card-group-item.// --> */}
                  </div> 
                  {/* <!-- card.// --> */}
                    </div>
                 </li>
                 </div>
         <div className="col-12 col-md-9" id="side_product">
           <div className="small-container">
          
            <div className="row">
              {this.state.getMarketPlace.map(item=>(
              <div className="col-4">
                <div className="Card-Box">
                   {/* {`${config.imageUrl}${item.item_image}`} */}
                   {/* <img className="timeline_image" loading="lazy" src={this.loginData.data.profile_pic === null ? `${config.noImageUrl}` : `${config.imageUrl + `/` + this.loginData.data.profile_pic}`} */}
                <img src={`${config.imageUrl + `/` + item.item_image}`} alt="" />
                <h4>{item.title}</h4>
                
                 <div className="row">
                  <div className="col-12 col-md-6">
                    <p>{item.price}<br/></p>
                    <button className="btn btn-primary btn-buy-now" id="buy_now_market"><a herf="#">Buy Now</a></button>
                  </div>
                  </div>
                </div>
              </div>
              ))}
                  
                          
            </div>
           

            <div className="page-btn">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>&#8594;</span>
            </div>
          </div>
               </div>
            </div>
          </div>
         </section>
       </div>

              <Footer/>
            </>
        )
    }
}
