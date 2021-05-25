import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config'
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../Directives/header'
import Leftsidebar from '../Directives/leftsidebar'

const headers = {
    'Content-Type': 'application/json'
};


export default class footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            footerlist: ''
        }
        this.onChange = this.onChange.bind(this)
        this.updateForm = this.updateForm.bind(this)
    }

    componentDidMount() {
        this.footerAPI()
    }

    onChange = event => {
        event.persist();

        let value = event.target.value;

        this.setState(prevState => ({
            footerlist: { ...prevState.footerlist, [event.target.name]: value }
        }))
    };


    //================================================  Footer API integrate  =============

    async footerAPI() {
        axios.get(`${config.apiUrl}/getfooter`, {}, { headers })
            .then(response => {
                if (response.data.success === true) {
                    this.setState({
                        footerlist: response.data.response
                    })
                }

                else if (response.data.success === false) {

                }
            })

            .catch(err => {
            })
    }

    //================================================  Update footer API integrate  =============

    async updateForm(e) {
        e.preventDefault()
        const data = this.state.footerlist
        axios.post(`${config.apiUrl}/updateFooter`, data, { headers })
            .then(response => {


                if (response.data.success === true) {
                    toast.success('Update Successfully!', {
                        position: toast.POSITION.TOP_CENTER
                    });
                    this.footerAPI()
                }

                else if (response.data.success === false) {
                    toast.error(response.data.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });


                }
            })

            .catch(err => {
                toast.error(err.response.data?.msg, {
                    position: toast.POSITION.TOP_CENTER
                });

            })
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
                                                        <h5 className="m-b-10">Footer</h5>
                                                        <p className="m-b-0">Welcome to CryptoGpk</p>
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
                                        <div className="main-body">
                                            <div className="page-wrapper">

                                                {/* <!-- Page body start --> */}
                                                <div className="page-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h5>Footer Data</h5>
                                                                    {/* <!--<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>--> */}
                                                                </div>
                                                                <div className="card-block">
                                                                    <form className="form-material" onSubmit={this.updateForm}>
                                                                        <ToastContainer />
                                                                        <div className="form-group form-default form-static-label">
                                                                            <input type="text" name="description" placeholder="Description" value={this.state.footerlist?.description} onChange={this.onChange} placeholder="Description" className="form-control" />
                                                                            <span className="form-bar"></span>
                                                                            <label className="float-label">Description</label>
                                                                        </div>
                                                                        <div className="form-group form-default form-static-label">
                                                                            <input type="text" name="email" placeholder="Email" value={this.state.footerlist?.email} onChange={this.onChange} className="form-control" />
                                                                            <span className="form-bar"></span>
                                                                            <label className="float-label">Email (exa@gmail.com)</label>
                                                                        </div>
                                                                        <div className="form-group form-default form-static-label">
                                                                            <input type="text" name="contact" placeholder="Contact" value={this.state.footerlist?.contact} onChange={this.onChange} className="form-control" />
                                                                            <span className="form-bar"></span>
                                                                            <label className="float-label">contact</label>
                                                                        </div>

                                                                        <div className="">
                                                                            <button type="submit" disabled={!this.state.footerlist?.description || !this.state.footerlist?.email || !this.state.footerlist?.contact} className="btn btn-primary">Update</button>
                                                                        </div>

                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Page body end --> */}
                                            </div>
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