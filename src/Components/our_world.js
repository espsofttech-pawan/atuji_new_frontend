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

export default class ourWorld extends Component {

    constructor(props) {
        super(props);

      }
    componentDidMount() {

    }
        
    render() {
     
        return (    

            <>
            <Header/>
            <div classNameName="body_bg">
                <section className="banner_img">
                    <img src="https://iea.imgix.net/817ded0e-7bb6-4b79-b425-65e6f7b705f1/shutterstock_1484419673.jpg?auto=compress%2Cformat&fit=min&q=80&rect=0%2C517%2C3840%2C1643&w=1800&h=770&fit=crop&fm=jpg&q=70&auto=format" className="banner_images" />
                </section>
                    
                    <section>
                        <div className="container">
                            <div id="root" className="main">
                            <div className="row mb-5 ourWorldSection">
                                <div className="col-12 col-md-8">
                                <div className="content_main">
                                    <h3>Where does it come from?</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                                </div>
                                <div className="col-12 col-md-4">
                                <img src="http://t.wallpaperweb.org/wallpaper/3d_landscape/2560x1440/creativeworldvision2560x1440wallpaper9961.jpg" className="images_world" />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-12 col-md-4">
                                <img src="https://prezibase.com/free/preview/3d-world-small-creative-planet-business-prezi-next-presentation-template.jpg" className="images_world" />
                                </div>
                                <div className="col-12 col-md-8">
                                <div className="content_main">
                                    <h3>Where does it come from?</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div> 
                    </section>

                    <section className="about-us">
                        <div className="container my-5">
                            <div className="row">
                            <div className="col-md-6 p-4 p-sm-5 order-2 order-sm-1">
                                <h1 className="h2 mb-4" style={{fontWeight: "600px",textAlign: "left", color: "#000!important"}}>Your world 
                                </h1>
                                <p className="text-secondary" style={{lineHeight: "2"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat iure laboriosam cum voluptatum, nam minima deserunt aut? Distinctio voluptatibus dolor quaerat quo omnis illo sequi at velit, odit quod!</p>
                            </div>
                            <div className="col-md-6 p-0 text-center order-1 order-sm-2">
                                <img src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-100" alt="" />
                            </div>

                            <div className="col-md-6 p-0 text-center">
                                <img src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="w-100" alt="" />
                            </div>
                            <div className="col-md-6 p-4 p-sm-5">
                                <h1 className="h2 mb-4" style={{fontWeight: "600px",textAlign: "left", color: "#000!important"}}>Our Blog 
                                </h1>
                                <p className="text-secondary" style={{lineHeight: "2"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat iure laboriosam cum voluptatum, nam minima deserunt aut? Distinctio voluptatibus dolor quaerat quo omnis illo sequi at velit, odit quod!</p>
                                <a href="#" style={{backgroundColor: "#6f43ec",width: "240px"}} className="btn px-4 py-3 mt-4 text-white d-flex align-items-center justify-content-between">
                                <span>Our Mission</span>
                                </a>
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
