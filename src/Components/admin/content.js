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


export default class content extends Component {

    constructor(props) {
        super(props)
        this.state = {
            webcontentlist: '',
            image_file: null,
            image_preview: '',
            image_file1: null,
            image_preview1: '',
            file_type: ''
        }
        this.onChange = this.onChange.bind(this)
        this.updateForm = this.updateForm.bind(this)
    }

    componentDidMount() {
        this.webContentAPI()
    }

    onChange = event => {
        event.persist();

        let value = event.target.value;

        this.setState(prevState => ({
            webcontentlist: { ...prevState.webcontentlist, [event.target.name]: value }
        }))
    };

    handleImagePreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];
        let file_type = '';
        if (image_as_files.type.indexOf('image') === 0) {
            file_type = 'image';
        } else {
            file_type = 'video';
        }

        this.setState({
            image_preview: image_as_base64,
            image_file: image_as_files,
            file_type: file_type,
        })


    }

    handleImagePreview1 = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];
        let file_type = '';
        if (image_as_files.type.indexOf('image') === 0) {
            file_type = 'image';
        } else {
            file_type = 'video';
        }

        this.setState({
            image_preview1: image_as_base64,
            image_file1: image_as_files,
            file_type: file_type,
        })


    }


    //================================================  getwebcontent API integrate  =============

    async webContentAPI() {
        axios.get(`${config.apiUrl}/getwebcontent`, {}, { headers })
            .then(response => {
                if (response.data.success === true) {
                    this.setState({
                        webcontentlist: response.data.response
                    })
                }

                else if (response.data.success === false) {

                }
            })

            .catch(err => {
            })
    }

    //================================================  Update updatewebcontent API integrate  =============

    async updateForm(e) {
        e.preventDefault()
        let formData = new FormData();
        
        formData.append('title', this.state.webcontentlist.title);
        formData.append('description', this.state.webcontentlist.description);
        if(this.state.image_file === null){
            formData.append('favicon', this.state.webcontentlist.favicon);
        }
        else{
            formData.append('favicon', this.state.image_file);
        }

        if(this.state.image_file1 === null){
            formData.append('logo', this.state.webcontentlist.logo);
        }
        else{
            formData.append('logo', this.state.image_file1);
        }

        axios.post(`${config.apiUrl}/updatewebcontent`, formData, { headers })
            .then(response => {


                if (response.data.success === true) {
                    toast.success('Update Successfully!', {
                        position: toast.POSITION.TOP_CENTER
                    });
                    this.webContentAPI()
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
                                                        <h5 className="m-b-10">Content</h5>
                                                        <p className="m-b-0">Welcome to Content</p>
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
                                                                    <h5>Content Data</h5>
                                                                    {/* <!--<span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>--> */}
                                                                </div>
                                                                <div className="card-block">
                                                                    <form className="form-material" onSubmit={this.updateForm}>
                                                                        <ToastContainer />

                                                                        <div className="form-group form-default form-static-label">
                                                                            <input type="text" name="title" placeholder="title" value={this.state.webcontentlist?.title} onChange={this.onChange} className="form-control" />
                                                                            <span className="form-bar"></span>
                                                                            <label className="float-label">title</label>
                                                                        </div>

                                                                        <div className="form-group form-default form-static-label">
                                                                            <input type="text" name="description" placeholder="Description" value={this.state.webcontentlist?.description} onChange={this.onChange} placeholder="Description" className="form-control" />
                                                                            <span className="form-bar"></span>
                                                                            <label className="float-label">Description</label>
                                                                        </div>

                                                                        <div className="form-group form-default form-static-label">
                                                                            <input type="file" className="form-control" accept=".jpg,.jpeg,.png" onChange={this.handleImagePreview} />
                                                                            <label className="float-label">Favicon</label>
                                                                            <br/>
                                                                            <br/>
                                                                            {this.state.webcontentlist?.favicon !== '' ?
                                                                        
                                                                            <a target="_blank" href={config.imageUrl + `/` + this.state.webcontentlist?.favicon}>

                                                                                <img style={{height:'100px',width:'180px'}} src={config.imageUrl + `/` + this.state.webcontentlist?.favicon} alt="favicon" /> 
                                                                                </a> : ""}
                                                                            
                                                                            
                                                                        </div>

                                                                        <div className="form-group form-default form-static-label">
                                                                            <input type="file" className="form-control" accept=".jpg,.jpeg,.png" onChange={this.handleImagePreview1} />
                                                                            <label className="float-label">Logo</label>
                                                                            <br/>
                                                                            <br/>
                                                                            {this.state.webcontentlist?.logo !== '' ?
                                                                             <a target="_blank" href={config.imageUrl + `/` + this.state.webcontentlist?.logo}>
                                                                                <img style={{height:'100px',width:'180px'}} src={config.imageUrl + `/` + this.state.webcontentlist?.logo} alt="logo" />
                                                                                </a> : ""}
                                                                        </div>                                                                        <div className="">
                                                                            <button type="submit" className="btn btn-primary" disabled={!this.state.webcontentlist?.title || !this.state.webcontentlist?.description}>Update</button>
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