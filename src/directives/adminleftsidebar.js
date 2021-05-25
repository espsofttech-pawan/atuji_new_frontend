import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import config from '../config/config'
import {Link} from 'react-router-dom'
const headers = {
    'Content-Type': 'application/json'
};


export default class Leftsidebar extends Component {

    constructor(props) {
        super(props)
        this.loginData = (!Cookies.get('loginSuccess')) ? '' : JSON.parse(Cookies.get('loginSuccess'));

    }

    componentDidMount() {
    }



    loading(){
        setTimeout(() => {
            window.location.reload()
        }, );
    }


    render() {

        return (
            <>

                <nav className="pcoded-navbar">
                    <div className="sidebar_toggle"><a href="#"><i className="icon-close icons"></i></a></div>
                    <div className="pcoded-inner-navbar main-menu">
                        <div className="">
                            <div className="main-menu-header">
                                <img className="img-80 img-radius" src="assets/images/avatar-4.jpg" style={{height:'59px'}} alt="User-Profile-Image" />
                                <div className="user-details">
                                    <span id="more-details">{this.loginData.data.username}
                                        {/* <i className="fa fa-caret-down"></i> */}
                                    </span>
                                </div>
                            </div>
                            {/* <div className="main-menu-content">
                                <ul>
                                    <li className="more-details">
                                        <a href="user-profile.html"><i className="ti-user"></i>View Profile</a>
                                        <a href="#!"><i className="ti-settings"></i>Settings</a>
                                        <a href="auth-normal-sign-in.html"><i className="ti-layout-sidebar-left"></i>Logout</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        {/* <div className="p-15 p-b-0">
                            <form className="form-material">
                                <div className="form-group form-primary">
                                    <input type="text" name="footer-email" className="form-control" />
                                    <span className="form-bar"></span>
                                    <label className="float-label"><i className="fa fa-search m-r-10"></i>Search Friend</label>
                                </div>
                            </form>
                        </div> */}
                        {/* <div className="pcoded-navigation-label">Navigation</div>
                        <ul className="pcoded-item pcoded-left-item">
                            <li className="active">
                                <a href="#/" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-home"></i><b>D</b></span>
                                    <span className="pcoded-mtext">Dashboard</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                        </ul> */}
                        {/* <div className="pcoded-navigation-label">UI Element</div>
                        <ul className="pcoded-item pcoded-left-item">
                            <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-layout-grid2-alt"></i><b>BC</b></span>
                                    <span className="pcoded-mtext">Basic</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                        <a href="breadcrumb.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Breadcrumbs</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="button.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Button</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="accordion.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Accordion</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="tabs.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Tabs</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="color.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Color</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="label-badge.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Label Badge</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="tooltip.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Tooltip And Popover</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="typography.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Typography</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className=" ">
                                        <a href="notification.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Notifications</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul> */}
                        {/* <div className="pcoded-navigation-label">Forms</div>
                        <ul className="pcoded-item pcoded-left-item">
                            <li className="">
                                <a href="form-elements-component.html" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-layers"></i><b>FC</b></span>
                                    <span className="pcoded-mtext">Form</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                        </ul>
                        <div className="pcoded-navigation-label">Tables</div>
                        <ul className="pcoded-item pcoded-left-item">
                            <li className="">
                                <a href="bs-basic-table.html" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-receipt"></i><b>B</b></span>
                                    <span className="pcoded-mtext">Table</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                            </li>
                        </ul> */}
                        {/* <div className="pcoded-navigation-label">Chart And Maps</div> */}
                        <ul className="pcoded-item pcoded-left-item">
                        <li className="">
                                <Link to={`${config.baseUrl}dashboard`} onClick={this.loading.bind(this)} className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-home"></i><b>M</b></span>
                                    <span className="pcoded-mtext">Dashboard</span>
                                    <span className="pcoded-mcaret"></span>
                                </Link>
                            </li>
                            <li className="">
                                <Link to={`${config.baseUrl}content`} onClick={this.loading.bind(this)} className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-layers"></i><b>M</b></span>
                                    <span className="pcoded-mtext">Content</span>
                                    <span className="pcoded-mcaret"></span>
                                </Link>
                            </li>
                            <li className="">
                                <Link to={`${config.baseUrl}footer`}  onClick={this.loading.bind(this)} className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-layers"></i><b>C</b></span>
                                    <span className="pcoded-mtext">Footer</span>
                                    <span className="pcoded-mcaret"></span>
                                </Link>
                            </li>
                            <li className="">
                                <Link to={`${config.baseUrl}users`}  onClick={this.loading.bind(this)} className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-layers"></i><b>C</b></span>
                                    <span className="pcoded-mtext">Users</span>
                                    <span className="pcoded-mcaret"></span>
                                </Link>
                            </li>
                        </ul>
                        {/* <div className="pcoded-navigation-label">Pages</div>
                        <ul className="pcoded-item pcoded-left-item">
                            <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" className="waves-effect waves-dark">
                                    <span className="pcoded-micon"><i className="ti-id-badge"></i><b>A</b></span>
                                    <span className="pcoded-mtext">Pages</span>
                                    <span className="pcoded-mcaret"></span>
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="">
                                        <a href="auth-normal-sign-in.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Login</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="auth-sign-up.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-angle-right"></i></span>
                                            <span className="pcoded-mtext">Registration</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="sample-page.html" className="waves-effect waves-dark">
                                            <span className="pcoded-micon"><i className="ti-layout-sidebar-left"></i><b>S</b></span>
                                            <span className="pcoded-mtext">Sample Page</span>
                                            <span className="pcoded-mcaret"></span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul> */}
                    </div>
                </nav>
            </>
        )

    }
}