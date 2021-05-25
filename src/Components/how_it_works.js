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

export default class howItWorks extends Component {

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
                <section class="banner_img">
                    <img src="https://i.pinimg.com/originals/23/dc/22/23dc22d4e638d95c924e9cd12ba66e40.jpg" class="banner_images" />
                    </section>
                            
                    <section class="section-services">
                        <div class="container">
                        <div class="row justify-content-center text-center">
                        <div class="col-md-2 col-lg-2"></div>
                            <div class="col-md-10 col-lg-8">
                            <div class="header-section">
                                <h2 class="title">Exclusive <span>Edition</span></h2>
                                <p class="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
                            </div>
                            </div>
                            <div class="col-md-2 col-lg-2"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                <i class="fab fa-500px"></i>
                                <h3 class="title">Express delivery innovative Design service</h3>
                                </div>
                                <div class="part-2">
                                <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                <i class="fab fa-angellist"></i>
                                <h3 class="title">Online chat may refer to any kind communication</h3>
                                </div>
                                <div class="part-2">
                                <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                <i class="fas fa-award"></i>
                                <h3 class="title">Service provider provide organizations consulting</h3>
                                </div>
                                <div class="part-2">
                                <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                <i class="fab fa-asymmetrik"></i>
                                <h3 class="title">Express delivery innovative Design service</h3>
                                </div>
                                <div class="part-2">
                                <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                <i class="fas fa-broadcast-tower"></i>
                                <h3 class="title">Provide solutions and services to end users</h3>
                                </div>
                                <div class="part-2">
                                <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                <i class="fab fa-canadian-maple-leaf"></i>
                                <h3 class="title">This broad term incorporates all IT businesses</h3>
                                </div>
                                <div class="part-2">
                                <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>

                            <section>
                            <div class="container">
                                <div id="root" class="main">
                                <div class="row mb-5">
                                    <div class="col-12 col-md-8">
                                    <div class="content_main">
                                        <h3>Where does it come from?</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                    </div>
                                    </div>
                                    <div class="col-12 col-md-4">
                                    <img src="http://t.wallpaperweb.org/wallpaper/3d_landscape/2560x1440/creativeworldvision2560x1440wallpaper9961.jpg" class="images_world" />
                                    </div>
                                </div>
                                <div class="row mb-5">
                                    <div class="col-12 col-md-4">
                                    <img src="https://prezibase.com/free/preview/3d-world-small-creative-planet-business-prezi-next-presentation-template.jpg" class="images_world" />
                                    </div>
                                    <div class="col-12 col-md-8">
                                    <div class="content_main">
                                        <h3>Where does it come from?</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                    </div>
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
