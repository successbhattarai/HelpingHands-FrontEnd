import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import FeatureLinks from '../components/FeatureLinks';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

toast.configure();

class Blog extends Component{

        state={
        blogs:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("http://localhost:9000/blog/display",this.state.config)
        .then((response)=>{
            this.setState({
                blogs: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING STANDINGS')
            console.log(error.response)
        })
    }


render(){

return(
<div>
    <Header></Header>
    
    <div class="hero-area">
    	<div class="page-banner parallax">
        	<div class="container">
            	<div class="page-banner-text">
        			<h1 class="block-title">Blog</h1>
                </div>
            </div>
        </div>
    </div>

    <div id="main-container">
    	<div class="content">
        	<div class="container">
                <ul class="blog-items isotope gallery-items" data-sort-id="gallery">
                {
                    this.state.blogs.map((blog)=>{
                        return(
                         <li class="col-md-4 col-sm-4 grid-item blog-grid-item format-standard">
                        <div class="grid-item-inner">
                            <a href={"single-post/" + blog._id} class="media-box">
                                <img src={'http://localhost:9000/images/blog/' + blog.blogImage} alt=""/>
                            </a>
                            <div class="grid-item-content">
                                <h3 class="post-title"><a href={"single-post/" + blog._id}>{blog.blogTitle}</a></h3>
                                <span class="meta-data"><i class="fa fa-calendar"></i> Posted on 11th Dec, 2015</span>
                                <p>{blog.blogDescription}</p>
                                <div class="tag-cloud">
                                    <i class="fa fa-tags"></i> 
                                    <a href="#">{blog.blogTags}</a>
                                </div>
                            </div>
                        </div>
                    </li>
                )})}
                </ul>
          
            </div>
           
        </div>
    
    </div>
   


</div>
)
}

}

export default Blog;
