import React, { Component } from 'react';
import Header from '../directives/header'
import Footer from '../directives/footer'
import axios from 'axios';
import config from '../config/config'
import { Link } from 'react-router-dom'
import '../css/market_place.css';
import 'react-toastify/dist/ReactToastify.css';

const headers = {
    'Content-Type': 'application/json'
 };

export default class limitedEdition extends Component {

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
   async getProductListAPI() {
    axios.post(`${config.apiUrl}/getAllProductList`, { 'type' : 2 } ,{ headers }).then(response => {
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
          
                <section class="product_sections">
                    <div class="container">
                        <div class="row">
                        <div class="col-12 col-md-3 productFilter">
                            <aside class="col-sm-12">
                            <div class="card" id="cards_aside">
                                <h3><span class="clear_class"><a href="#">Clear</a></span></h3>
                                <article class="card-group-item">
                                    <header class="card-header">
                                    <h6 class="title">Collection </h6>
                                    </header>
                                    <div class="filter-content">
                                    <div class="card-body">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check1" />
                                            <label class="custom-control-label" for="Check1">Atujii NFTs</label>
                                        </div> 

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check2" />
                                            <label class="custom-control-label" for="Check2">Hash Masks NFTs</label>
                                        </div> 

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check3" />
                                            <label class="custom-control-label" for="Check3">Axie Infinity NFTs</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check4" />
                                            <label class="custom-control-label" for="Check4">CryptoKitties NFTs</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check5" />
                                            <label class="custom-control-label" for="Check5">Sour Strips NFTs</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check7" />
                                            <label class="custom-control-label" for="Check7">Sorare NFTs</label>
                                        </div> 
                                    </div>
                                    </div>
                                </article>
                                
                                <article class="card-group-item">
                                    <header class="card-header">
                                    <h6 class="title">Sort By</h6>
                                    </header>
                                    <div class="filter-content">
                                    <div class="card-body">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check7" />
                                            <label class="custom-control-label" for="Check7">Lowest price</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check8" />
                                            <label class="custom-control-label" for="Check8">Hightest price</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check11" />
                                            <label class="custom-control-label" for="Check11">Newest</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check12" />
                                            <label class="custom-control-label" for="Check12">Oldest</label>
                                        </div> 
                                    </div>
                                    
                                    </div>
                                </article>
                                <article class="card-group-item">
                                    <header class="card-header">
                                    <h6 class="title">Price Range </h6>
                                    </header>
                                    <div class="filter-content">
                                    <div class="card-body">
                                    <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Min</label>
                                        <input type="number" class="form-control" id="inputEmail4" placeholder="$1000" />
                                    </div>
                                    <div class="form-group col-md-6 text-right">
                                        <label>Max</label>
                                        <input type="number" class="form-control" placeholder="$10,0000" />
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </article> 
                            </div> 
                            </aside>
                        </div>

                        <div class="mobile_view_aside">
                                <li class="nav-item dropdown" id="mobile-filter">
                                <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort option
                                </a>
                                <div id="mobile-filters" class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div class="card mobile-cards" id="cards_asides">
                                <h3><span class="clear_class"><a href="#">Clear</a></span></h3>
                                <article class="card-group-item">
                                    <header class="card-header">
                                    <h6 class="title">Collection </h6>
                                    </header>
                                    <div class="filter-content">
                                    <div class="card-body">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check1 " />
                                            <label class="custom-control-label" for="Check1">Atujii NFTs</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check2" />
                                            <label class="custom-control-label" for="Check2">Hash Masks NFTs</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check3" />
                                            <label class="custom-control-label" for="Check3">Axie Infinity NFTs</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check4" />
                                            <label class="custom-control-label" for="Check4">CryptoKitties NFTs</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check5" />
                                            <label class="custom-control-label" for="Check5">Sour Strips NFTs</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check7" />
                                            <label class="custom-control-label" for="Check7">Sorare NFTs</label>
                                        </div> 
                                    </div> 
                                    </div>
                                </article>
                                
                                <article class="card-group-item">
                                    <header class="card-header">
                                    <h6 class="title">Sort By</h6>
                                    </header>
                                    <div class="filter-content">
                                    <div class="card-body">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check7" />
                                            <label class="custom-control-label" for="Check7">Lowest price</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check8" />
                                            <label class="custom-control-label" for="Check8">Hightest price</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check11" />
                                            <label class="custom-control-label" for="Check11">Newest</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="Check12" />
                                            <label class="custom-control-label" for="Check12">Oldest</label>
                                        </div> 
                                    </div>
                                    </div>
                                </article>
                                <article class="card-group-item">
                                    <header class="card-header">
                                    <h6 class="title">Price Range </h6>
                                    </header>
                                    <div class="filter-content">
                                    <div class="card-body">
                                    <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Min</label>
                                        <input type="number" class="form-control" id="inputEmail4" placeholder="$0" />
                                    </div>
                                    <div class="form-group col-md-6 text-right">
                                        <label>Max</label>
                                        <input type="number" class="form-control" placeholder="$1,0000" />
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </article> 
                            </div>
                                </div>
                            </li>
                            </div>
                    <div class="col-12 col-md-9" id="side_product">
                    <div class="small-container">
                    
                        <div class="row">

                        {this.state.productList.map((item, i) => (
                            <div class="col-sm-4 mb-3">
                                <Link to={`${config.baseUrl}nftDetail/`+item.id}>
                                <div class="Card-Box">
                                    <img src={`${config.ipfsUrl}`+item.image} alt="" />
                                    <h4>{item.name}</h4>
                                    <div class="row">
                                    <div class="col-12 col-md-12 text-center">
                                        <p className="itemPrice">${item.price}<br/></p>
                                        <button class="btn btn-primary btn-buy-now"><a herf="#">Buy Now</a></button>
                                    </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            ))}
                        
                        </div>

                        {this.state.productList.length > 12?
                            <div class="page-btn">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>&#8594;</span>
                            </div>
                        : ''}
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
