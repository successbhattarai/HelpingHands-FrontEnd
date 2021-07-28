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

class MyDonation extends Component{

        state={
        blogs:[],
        mydonations:[],
        id : this.props.match.params.id,
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("http://localhost:9000/blog/latest/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                blogs: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING BLOG')
            console.log(error.response)
        })

        const token = localStorage.getItem("token");
        const decodeToken = decode(token); 
        const userId = decodeToken.userId;
        axios.get("http://localhost:9000/my-donation/display/" + userId)
        .then((response)=>{
            this.setState({
                mydonations: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING MY DONATIONS')
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
        			<h1 class="block-title">My Donations</h1>
                </div>
            </div>
        </div>
    </div>

    <div id="main-container">
    	<div class="content">
        	<div class="container">
            	<div class="row">
                	<div class="col-md-8 content-block">
                        <ul class="causes-list cause-page-listing">
                        {
                        this.state.mydonations.map((donation)=>{
                            return(
                            <li class="causes-list-item cause-item">
                            	<div class="row">
                                	{/* <div class="col-md-4 col-sm-4 list-thumb">
                                        <a href="single-cause.html">
                                            <img src="images/causeg1.jpg" alt=""/>
                                        </a>
                                       	<div class="cause-progress"><a class="cProgress" data-complete="88" data-color="F23827" data-toggle="tooltip" data-original-title="10 days left" data-placement="left"><strong></strong></a></div>
                                    </div> */}
                                    <div class="col-md-8 col-sm-8">
                                        <div class="cause-list-item-cont">
                                            <h3 class="post-title"><a href="single-cause.html">CAUSE</a></h3>
                                            {/* <p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Nam malesuada dapi bus diam, ut fringilla purus efficitur  eget...</p> */}
                                            <div class="meta-data">Donated NPR. {donation.donorDonated}
                                            {/* <span class="cause-target">$30000</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        
                            )})}</ul>
                        <nav>
                       		<ul class="pagination pagination-lg">
                              	<li>
                                	<a href="#" aria-label="Previous">
                                  		<span aria-hidden="true">&laquo;</span>
                                	</a>
                              	</li>
                              	<li class="active"><a href="#">1</a></li>
                              	<li><a href="#">2</a></li>
                              	<li><a href="#">3</a></li>
                              	<li>
                                	<a href="#" aria-label="Next">
                                  		<span aria-hidden="true">&raquo;</span>
                                	</a>
                              	</li>
                        	</ul>
                       	</nav>
                    </div>
                    <div class="col-md-4 sidebar-block">
                        <div class="widget sidebar-widget widget_categories">
                        	<h3 class="widgettitle">Cause Categories</h3>
                            <ul>
                            	<li><a href="#">Education</a> (3)</li>
                            	<li><a href="#">Environment</a> (1)</li>
                            	<li><a href="#">Global warming</a> (6)</li>
                            	<li><a href="#">Water</a> (4)</li>
                            	<li><a href="#">Wild life</a> (2)</li>
                            	<li><a href="#">Small business</a> (12)</li>
                            </ul>
                        </div>
                        <div class="widget tabbed_content tabs">
                            <div class="widget recent_posts">
                                <h3 class="widgettitle">Latest Blogs</h3>
                                <ul>
                                    {
                                    this.state.blogs.map((blog)=>{
                                    return(
                                    <li>
                                        <a href={"single-post/" + blog._id} class="media-box">
                                            <img src={'http://localhost:9000/images/blog/' + blog.blogImage} alt="" />
                                        </a>
                                        <h5><a href={"single-post/" + blog._id}>{blog.blogTitle}</a></h5>
                                        <span class="meta-data grid-item-meta">Posted on {blog.blogPostDate}</span>
                                    </li>
                                    )
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div class="widget widget_testimonials">
                        	<h3 class="widgettitle">Stories of change</h3>
                            <div class="carousel-wrapper">
                                <div class="row">
                                    <ul class="owl-carousel carousel-fw" id="testimonials-slider" data-columns="1" data-autoplay="5000" data-pagination="no" data-arrows="yes" data-single-item="no" data-items-desktop="1" data-items-desktop-small="1" data-items-tablet="1" data-items-mobile="1">
                                        <li class="item">
                                            <div class="testimonial-block">
                                                <blockquote>
                                                    <p>testimonial.</p>
                                                </blockquote>
                                                <div class="testimonial-avatar"><img src="images/story1.jpg" alt="" width="70" height="70"/></div>
                                                <div class="testimonial-info">
                                                    <div class="testimonial-info-in">
                                                        <strong>info</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item">
                                            <div class="testimonial-block">
                                                <blockquote>
                                                    <p>testimonial.</p>
                                                </blockquote>
                                                <div class="testimonial-avatar"><img src="images/story2.jpg" alt="" width="70" height="70"/></div>
                                                <div class="testimonial-info">
                                                    <div class="testimonial-info-in">
                                                        <strong>info</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</div>
)
}

}

export default MyDonation;
