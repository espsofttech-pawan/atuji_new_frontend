import React, { Component } from 'react';
import axios from 'axios';
import config from '../config/config'
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Directives/header'
import Leftsidebar from '../Directives/leftsidebar'

const headers = {
    'Content-Type': 'application/json'
};


export default class dashboard extends Component {

    constructor(props) {
        super(props)
       
    }

    componentDidMount() {
    }


    render() {

        return (
            <>

                <div className="theme-loader">
                    <div className="loader-track">
                        <div className="preloader-wrapper">
                            <div className="spinner-layer spinner-blue">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                            <div className="spinner-layer spinner-red">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>

                            <div className="spinner-layer spinner-yellow">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>

                            <div className="spinner-layer spinner-green">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                                <div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Pre-loader end --> */}
                <div id="pcoded" className="pcoded">
                    <div className="pcoded-overlay-box"></div>
                    <div className="pcoded-container navbar-wrapper">
                        <Header />
                        <div className="pcoded-main-container">
                            <div className="pcoded-wrapper">
                                <Leftsidebar />
                                <div className="pcoded-content">
                                    {/* <!-- Page-header start --> */}
                                    <div className="page-header">
                                        <div className="page-block">
                                            <div className="row align-items-center">
                                                <div className="col-md-8">
                                                    <div className="page-header-title">
                                                        <h5 className="m-b-10">Dashboard</h5>
                                                        <p className="m-b-0">Welcome to Dashboard</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <ul className="breadcrumb">
                                                        <li className="breadcrumb-item">
                                                            <a href="#/"> <i className="fa fa-home"></i> </a>
                                                        </li>
                                                        <li className="breadcrumb-item"><a href="#!">Dashboard</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Page-header end --> */}
                                    <div className="pcoded-inner-content">
                                        {/* <!-- Main-body start --> */}
                                        <div className="main-body" style={{marginTop:'100px',textAlign:'center'}}>
                                            <h2>Welcome to cryptoGPK</h2>
                             </div>
                              
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}