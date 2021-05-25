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
       this.state={
        users_list : []
       }
    }

    componentDidMount() {
        this.userDetails();
    }

    async userDetails() {
    await    axios.get(`${config.apiUrl}/getusers`, {}, { headers })
            .then(result => {
                console.log(result.data);
                if (result.data.success === true) {
                    this.setState({
                        users_list: result.data.response
                    })
                    console.log(this.state.users_list);
                }

                else if (result.data.success === false) {

                }
            })

            .catch(err => {
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
                                                        <h5 className="m-b-10">Users</h5>
                                                        <p className="m-b-0">Welcome to Users</p>
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
                                            <h2>Welcome to Users Details</h2>
                             </div>
                             <div class="table-responsive">
                                                    <table class="table table-dark">
                                                        <thead>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>UserName</th>
                                                                <th>Email</th>
                                                                <th>Phone</th>
                                                                <th>is_email_verify</th>
                                                                  {/* <th>Country Name</th> */}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                           {this.state.users_list.map(item=>(
                                                            <tr>
                                                               
                                                                <td>{item.id}</td>
                                                                <td>{item.username}</td>
                                                                <td>{item.email}</td>
                                                                <td>{item.phone}</td>
                                                                {/* <td>{item.countryid}</td> */}
                                                                <td>{item.is_email_verify}</td>
                                                            </tr>
                                                           ))}
                                                        </tbody>
                                                    </table>
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