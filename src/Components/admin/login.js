import React, { Component } from 'react';
import axios from 'axios';
import config from '../config/config'
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
const headers = {
    'Content-Type': 'application/json'
};


export default class login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {


    }


    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //================================================  Login API integrate  =============

    async submitForm(e) {
        e.preventDefault()
        const data = this.state
        axios.post(`${config.apiUrl}/adminlogin`, data, { headers })
            .then(response => {


                if (response.data.success === true) {
                    toast.success('Login Successfully!', {
                        position: toast.POSITION.TOP_CENTER
                    });
                    Cookies.set('loginSuccess', response.data);
                    window.location.href = `${config.baseUrl}dashboard`
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

                <section className="login-block">
                    {/* <!-- Container-fluid starts --> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                {/* <!-- Authentication card start --> */}

                                <form className="md-float-material form-material" onSubmit={this.submitForm}>
                                    <ToastContainer />
                                    <div className="text-center">
                                        <img src="assets/images/logo.png" alt="logo.png" style={{ width: '167px', height: '60px' }} />
                                    </div>
                                    <div className="auth-box card">
                                        <div className="card-block">
                                            <div className="row m-b-20">
                                                <div className="col-md-12">
                                                    <h3 className="text-center">Sign In</h3>
                                                </div>
                                            </div>
                                            <div className="form-group form-primary">
                                                <input type="email" value={this.state.email}
                                                    onChange={this.onChange} name="email" className="form-control" />
                                                <span className="form-bar"></span>
                                                <label className="float-label">Your Email Address</label>
                                            </div>
                                            <div className="form-group form-primary">
                                                <input type="password" value={this.state.password}
                                                    onChange={this.onChange} name="password" className="form-control" />
                                                <span className="form-bar"></span>
                                                <label className="float-label">Password</label>
                                            </div>
                                            {/* <div className="row m-t-25 text-left">
                                                <div className="col-12">
                                                    <div className="checkbox-fade fade-in-primary d-">
                                                        <label>
                                                            <input type="checkbox" value="" />
                                                            <span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
                                                            <span className="text-inverse">Remember me</span>
                                                        </label>
                                                    </div>
                                                    <div className="forgot-phone text-right f-right">
                                                        <a href="auth-reset-password.html" className="text-right f-w-600"> Forgot Password?</a>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="row m-t-30">
                                                <div className="col-md-12">
                                                    <button type="submit" disabled={!this.state.email || !this.state.password} className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20">Sign in</button>
                                                </div>
                                            </div>
                                            {/* <hr /> */}
                                            {/* <div className="row">
                                                <div className="col-md-10">
                                                    <p className="text-inverse text-left m-b-0">Thank you.</p>
                                                    <p className="text-inverse text-left"><a href="#/"><b>Back to website</b></a></p>
                                                </div>
                                                <div className="col-md-2">
                                                    <img src="assets/images/auth/Logo-small-bottom.png" alt="small-logo.png" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- end of form --> */}
                            </div>
                            {/* <!-- end of col-sm-12 --> */}
                        </div>
                        {/* <!-- end of row --> */}
                    </div>
                    {/* <!-- end of container-fluid --> */}
                </section>
            </>
        )

    }
}