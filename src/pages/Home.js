import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import FeatureLinks from '../components/FeatureLinks';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import UrgentPost from '../components/UrgentPost';
import UpcommingEvents from '../components/UpcommingEvents';
import GalleryUpdate from '../components/GalleryUpdate';
import Counters from '../components/Counters';

toast.configure();

class Home extends Component{

    state={
        blogs:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }

    componentDidMount(){
        axios.get("http://localhost:9000/blog/latest/limit=2",this.state.config)
        .then((response)=>{
            this.setState({
                blogs: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING BLOGS')
            console.log(error.response)
        })
    }


render(){

return(
<div>
    <Header></Header>
    
    <Slider></Slider>
    
    <FeatureLinks></FeatureLinks>
    
    <div class="lgray-bg padding-tb75">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-5">
                    <h2 class="block-title">Causes that need your<br></br>urgent attention</h2>
                    <div class="spacer-30"></div>
                </div>
                <div class="col-md-7 col-sm-7">
                    <div class="spacer-10"></div>
                    <p>"To give away money is an easy matter and in any man's power. But to decide to whom to give it, and how large and when, and for what purpose and how, is neither in every man's power nor an easy matter."</p>
                    <p>- Aristotle </p>
                </div>
            </div>
            <div class="carousel-wrapper">
                <div class="row">
                    <UrgentPost></UrgentPost>
                </div>
            </div>
        </div>
    </div>
    
    <Counters></Counters>

    <div class="padding-tb75 position-relative">
        <div class="half-bg-right accent-bg"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="block-title">Upcoming events</h2>
                    <div class="spacer-20"></div>
                    <UpcommingEvents></UpcommingEvents>
                </div>
                
                <div class="col-md-6">
                    <div class="gallery-updates cols2 clearfix">
                        <GalleryUpdate></GalleryUpdate>
                        <div class="gallery-updates-overlay">
                            <i class="fa fa-image"></i> Updates from our gallery
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="padding-tb75 lgray-bg">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <h2 class="block-title">Latest news from our blog</h2>
                    <p>Read Helping Hands’ latest news and the real-life stories from our customers and carers across the country. Our blog also provides an insight how we’re supporting needed people of all ages, each and every day.</p>
                </div>
                
                <div class="col-md-8 col-sm-8">
                    <div class="carousel-wrapper">
                        <div class="row">
                            <ul class="owl-carousel carousel-fw owl-theme" id="news-slider" data-columns="2" data-autoplay="" data-pagination="yes" data-arrows="no" data-single-item="no" data-items-desktop="2" data-items-desktop-small="1" data-items-tablet="1" data-items-mobile="1">
                                {
                                this.state.blogs.map((blog)=>{
                                return(
                                <li class="item" style={{float:"left"}}>
                                    <div class="grid-item blog-grid-item format-standard">
                                        <div class="grid-item-inner">
                                            <a href="single-event.html" class="media-box">
                                                <img src={'http://localhost:9000/images/blog/' + blog.blogImage} style={{width:"360px",height:"240px"}} alt="" />
                                            </a>
                                            <div class="grid-item-content">
                                                <h3 class="post-title"><a href="single-post.html">{blog.blogTitle}</a></h3>
                                                <span class="meta-data">Posted on 11th Dec, 2015</span>
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
        </div>
    </div>
    
    <div class="accent-bg padding-tb20 cta-fw">
        <div class="container">
            <a href="become-a-volunteer" class="btn btn-default btn-rounded pull-right">Become a volunteer</a>
            <h4>Let's start doing your bit for the world. Join us as a Volunteer</h4>
        </div>
    </div>
    
    <Footer></Footer>
</div>
)}

}

export default Home;
