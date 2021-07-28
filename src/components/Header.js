import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Header extends Component{

    state={
        events: [],
        blogs:[],
        campaigns: [],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }

    componentDidMount(){
        axios.get("https://helpinghand-backend.herokuapp.com/blog/latest/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                blogs: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING BLOGS')
            console.log(error.response)
        })

        axios.get("https://helpinghand-backend.herokuapp.com/campaign/latest/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                campaigns: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING CAMPAIGN')
            console.log(error.response)
        })

        axios.get("https://helpinghand-backend.herokuapp.com/event/display/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                events: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING CAMPAIGN')
            console.log(error.response)
        })
    }

render(){

    if (localStorage.getItem('token')){

        {/* If User is Logged In */}
        var Heading =
        <div class="site-header-wrapper">
            
            <header class="site-header sticky">
                <div class="container">
                    <div class="site-logo">
                        <a href="/" class="default-logo"><img src="http://localhost:3000/images/logo2.png" alt="Logo" /></a>
                        <a href="/" class="default-retina-logo"><img src="http://localhost:3000/images/logo2.png" alt="Logo" width="199" height="30" /></a>
                        <a href="/" class="sticky-logo"><img src="http://localhost:3000/images/logo.png" alt="Logo" /></a>
                        <a href="/" class="sticky-retina-logo"><img src="http://localhost:3000/images/logo2.png" alt="Logo" width="199" height="30" /></a>
                    </div>
                    <a href="#" class="visible-sm visible-xs" id="menu-toggle"><i class="fa fa-bars"></i></a>
                    <div class="header-info-col"><i class="fa fa-phone"></i>01-4425661, 01-4441577</div>
                    <ul class="sf-menu dd-menu pull-right" role="menu" style={{padding:"0px !important"}}>
                        <li><a href="/">Home</a>
                        </li>
                        <li><a href="about">About</a>
                            <ul style={{padding:"0px !important"}}>
                                <li><a href="team">Team</a></li>
                                <li><a href="our-impact">Our Impact</a></li>
                                <li><a href="become-a-volunteer">Become a Volunteer</a></li>
                                <li><a href="contact">Contact</a></li>
                                <li><a href="frequently-asked-question">FAQ</a></li>
                            </ul>
                        </li>
                        <li><a href="causes">Causes</a>
                            {/* <ul>
                                <li><a href="causes">Causes List</a></li>
                                <li><a href="causes-grid">Causes Grid</a></li>
                                <li><a href="single-cause">Single Cause</a></li>
                            </ul> */}
                        </li>
                        <li><a href="events">Events</a>
                            {/* <ul>
                                <li><a href="events">Events List</a></li>
                                <li><a href="events-grid">Events Grid</a></li>
                                <li><a href="events-calendar">Events Calendar</a></li>
                                <li><a href="single-event">Single Event</a></li>
                            </ul> */}
                        </li>
                        <li><a href="gallery">Gallery</a>
                            {/* <ul>
                                <li><a href="gallery-caption-2cols">Gallery with Caption</a>
                                    <ul>
                                        <li><a href="gallery-caption-2cols">2 Columns</a></li>
                                        <li><a href="gallery-caption-3cols">3 Columns</a></li>
                                        <li><a href="gallery-caption-4cols">4 Columns</a></li>
                                    </ul>
                                </li>
                                <li><a href="gallery-2cols">Gallery without Caption</a>
                                    <ul>
                                        <li><a href="gallery-2cols">2 Columns</a></li>
                                        <li><a href="gallery-3cols">3 Columns</a></li>
                                        <li><a href="gallery-4cols">4 Columns</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>
                        <li class="megamenu"><a href="javascrip:void(0)">Mega Menu</a>
                            <ul class="dropdown">
                                <li>
                                    <div class="megamenu-container container">
                                        <div class="row">
                                            <div class="col-md-3 megamenu-col">
                                                <span class="megamenu-sub-title"><i class="fa fa-bookmark"></i> Features</span>
                                                <ul class="sub-menu">
                                                    <li><a href="add-campaign">Ask For Help</a></li>
                                                    <li><a href="add-blog">Add Blog</a></li>
                                                    <li><a href="add-events">Add New Event</a></li>
                                                    <li><a href="privacy-policy">Privacy policy</a></li>
                                                    <li><a href="payment-terms">Payment terms</a></li>
                                                    <li><a href="refund-policy">Refund policy</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-3 megamenu-col">
                                                <span class="megamenu-sub-title"><i class="fa fa-newspaper-o"></i> Latest Blogs</span>
                                                <div class="widget recent_posts">
                                                    <ul>
                                                        {
                                                        this.state.blogs.map((blog)=>{
                                                        return(
                                                        <li>
                                                            <a href="single-post.html" class="media-box">
                                                                <img src={'https://helpinghand-backend.herokuapp.com/images/blog/' + blog.blogImage} alt="" />
                                                            </a>
                                                            <h5><a href="single-post.html">{blog.blogTitle}</a></h5>
                                                            <span class="meta-data grid-item-meta">Posted on {blog.blogPostDate}</span>
                                                        </li>
                                                        )
                                                        })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-3 megamenu-col">
                                                <span class="megamenu-sub-title"><i class="fa fa-image"></i> Latest Causes</span>
                                                <ul class="widget_recent_causes">
                                                    {
                                                    this.state.campaigns.map((campaign)=>{
                                                    return(
                                                    <li>
                                                        <a href="#" class="cause-thumb">
                                                            <img src={'https://helpinghand-backend.herokuapp.com/images/campaign/' + campaign.campaignImage} alt="" class="img-thumbnail" />
                                                            <div class="cProgress" data-complete="88" data-color="42b8d4">
                                                                <strong></strong>
                                                            </div>
                                                        </a>
                                                        <h5><a href="single-cause.html">{campaign.campaignName}</a></h5>
                                                        <span class="meta-data">{campaign.campaignDays} days left to achieve</span>
                                                    </li>
                                                    )
                                                    })
                                                    }
                                                </ul>
                                            </div>
                                            <div class="col-md-3 megamenu-col">
                                                <span class="megamenu-sub-title"><i class="fa fa-star"></i> Latest Events</span>
                                                <ul class="widget_recent_causes">
                                                    {
                                                    this.state.events.map((event)=>{
                                                    return(
                                                    <li>
                                                        <a href="#" class="cause-thumb">
                                                            <img src={'https://helpinghand-backend.herokuapp.com/images/event/' + event.eventImage} alt="" class="img-thumbnail" />
                                                            <div class="cProgress" data-complete="88" data-color="42b8d4">
                                                                <strong></strong>
                                                            </div>
                                                        </a>
                                                        <h5><a href="single-cause.html">{event.eventName}</a></h5>
                                                        <span class="meta-data">{event.eventAttendees} Attendees</span>
                                                    </li>
                                                    )
                                                    })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li><a href="blog">Blog</a>
                            <ul class="dropdown">
                                <li><a href="add-blog">ADD BLOG</a></li>
                            </ul>
                        </li>
                        <li><a>My Account</a>
                            <ul>
                                <li><a href="">Update Profile</a></li>
                                <li><a href="">Load Balance</a></li>
                                <li><a href={'/my-campaigns/'+ decode(localStorage.getItem("token")).userId}>My Camapigns</a></li>
                                <li><a href={'/my-donations/'+ decode(localStorage.getItem("token")).userId}>My Donations</a></li>
                                <li><a href={'/my-blogs/'+ decode(localStorage.getItem("token")).userId}>My Blogs</a></li>
                                <li><a href={'/my-events/'+ decode(localStorage.getItem("token")).userId}>My Events</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
        }
    else{
        var Heading =
        <div class="site-header-wrapper">
            
            <header class="site-header sticky">
                <div class="container">
                    <div class="site-logo">
                        <a href="/" class="default-logo"><img src="http://localhost:3000/images/logo2.png" alt="Logo" /></a>
                        <a href="/" class="default-retina-logo"><img src="http://localhost:3000/images/logo2.png" alt="Logo" width="199" height="30" /></a>
                        <a href="/" class="sticky-logo"><img src="http://localhost:3000/images/logo.png" alt="Logo" /></a>
                        <a href="/" class="sticky-retina-logo"><img src="http://localhost:3000/images/logo2.png" alt="Logo" width="199" height="30" /></a>
                    </div>
                    <a href="#" class="visible-sm visible-xs" id="menu-toggle"><i class="fa fa-bars"></i></a>
                    <div class="header-info-col"><i class="fa fa-phone"></i> 01-4425661, 01-4441577</div>
                    <ul class="sf-menu dd-menu pull-right" role="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="about">About</a>
                            <ul>
                                <li><a href="team">Team</a></li>
                                <li><a href="our-impact">Our Impact</a></li>
                                <li><a href="become-a-volunteer">Become a Volunteer</a></li>
                                <li><a href="contact">Contact</a></li>
                                <li><a href="frequently-asked-question">FAQ</a></li>
                            </ul>
                        </li>
                        <li><a href="causes">Causes</a>
                            {/* <ul>
                                <li><a href="causes">Causes List</a></li>
                                <li><a href="causes-grid">Causes Grid</a></li>
                                <li><a href="single-cause">Single Cause</a></li>
                            </ul> */}
                        </li>
                        <li><a href="events">Events</a>
                            {/* <ul>
                                <li><a href="events">Events List</a></li>
                                <li><a href="events-grid">Events Grid</a></li>
                                <li><a href="events-calendar">Events Calendar</a></li>
                                <li><a href="single-event">Single Event</a></li>
                            </ul> */}
                        </li>
                        <li><a href="gallery">Gallery</a></li>
                        <li class="megamenu"><a href="javascrip:void(0)">Mega Menu</a>
                            <ul class="dropdown">
                                <li>
                                    <div class="megamenu-container container">
                                        <div class="row">
                                            <div class="col-md-3 megamenu-col">
                                                <span class="megamenu-sub-title"><i class="fa fa-bookmark"></i> Features</span>
                                                <ul class="sub-menu">
                                                    <li><a href="add-campaign">Ask For Help</a></li>
                                                    <li><a href="add-blog">Add Blog</a></li>
                                                    <li><a href="add-events">Add New Event</a></li>
                                                    <li><a href="privacy-policy">Privacy policy</a></li>
                                                    <li><a href="payment-terms">Payment terms</a></li>
                                                    <li><a href="refund-policy">Refund policy</a></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-3 megamenu-col">
                                                <span class="megamenu-sub-title"><i class="fa fa-newspaper-o"></i> Latest news</span>
                                                <div class="widget recent_posts">
                                                    {/* <ul>
                                                        {
                                                        this.state.blogs.map((blog)=>{
                                                        return(
                                                        <li>
                                                            <a href="single-post.html" class="media-box">
                                                                <img src={'https://helpinghand-backend.herokuapp.com/images/blog/' + blog.blogImage} alt="" />
                                                            </a>
                                                            <h5><a href="single-post.html">{blog.blogTitle}</a></h5>
                                                            <span class="meta-data grid-item-meta">Posted on {blog.blogPostDate}</span>
                                                        </li>
                                                        )
                                                        })
                                                        }
                                                    </ul> */}
                                                </div>
                                                
                                            </div>
                                            <div class="col-md-3 megamenu-col">
                                                <span class="megamenu-sub-title"><i class="fa fa-microphone"></i> Latest causes</span>
                                                
                                                {/* <ul class="widget_recent_causes">
                                                    {
                                                    this.state.campaigns.map((campaign)=>{
                                                    return(
                                                    <li>
                                                        <a href="#" class="cause-thumb">
                                                            <img src={'https://helpinghand-backend.herokuapp.com/images/campaign/' + campaign.campaignImage} alt="" class="img-thumbnail" />
                                                            <div class="cProgress" data-complete="88" data-color="42b8d4">
                                                                <strong></strong>
                                                            </div>
                                                        </a>
                                                        <h5><a href="single-cause.html">{campaign.campaignName}</a></h5>
                                                        <span class="meta-data">{campaign.campaignDays} days left to achieve</span>
                                                    </li>
                                                    )
                                                    })
                                                    }
                                                </ul> */}
                                            </div>
                                            <div class="col-md-3 megamenu-col">
                                                <span class="megamenu-sub-title"><i class="fa fa-star"></i> Featured Video</span>
                                                <div class="fw-video"><iframe src="https://player.vimeo.com/video/62947247" width="500px" height="275px"></iframe></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            
                        </li>
                        <li><a href="blog">Blog</a>
                            <ul class="dropdown">
                                <li><a href="add-blog">ADD BLOG</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="login">Login</a></li>
                        <li><a href="register">Register</a></li>
                    </ul>
                </div>
            </header>
        </div>
        
    }
    return(
         Heading
    )
}

}

export default Header;
