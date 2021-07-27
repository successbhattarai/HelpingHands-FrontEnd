import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Counters from '../components/Counters';

toast.configure();

class OurImpact extends Component{

    state={
        volunteers:[],
        volunteersTotal:'',
        campaigns:[],
        campaignsTotal:'',
        users:[],
        usersTotal:'',
        donations:[],
        totalDonations:'',

        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }

    componentDidMount(){
        axios.get("http://localhost:9000/volunteer/display",this.state.config)
        .then((response)=>{
            this.setState({
                volunteers: response.data,
                volunteersTotal : response.data.length
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING VOLUNTEER')
            console.log(error.response)
        })

        axios.get("http://localhost:9000/campaign/display",this.state.config)
        .then((response)=>{
            this.setState({
                campaigns: response.data,
                campaignsTotal : response.data.length
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING VOLUNTEER')
            console.log(error.response)
        })

        axios.get("http://localhost:9000/user/display",this.state.config)
        .then((response)=>{
            this.setState({
                users: response.data,
                usersTotal : response.data.length
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING VOLUNTEER')
            console.log(error.response)
        })

        
        axios.get("http://localhost:9000/donation/display",this.state.config)
        .then((response)=>{
            this.setState({
                donations: response.data,
                totalDonations : response.data.length
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING DONATION')
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
        			<h1 class="block-title">Our Impact</h1>
                </div>
            </div>
        </div>
    </div>
    <div id="main-container">
    	<div class="content">
        	<div class="container">
            	<div class="row">
                	<div class="col-md-8 content-block">
                        <p class="lead">Paragraph.</p>
                        <p>Paragraph.</p>
                        <h3>There are multiple ways you can help others to change their lives</h3>
                        <ul class="checks">
                        	<li>Start a workplace campaign</li>
                            <li>Youth involvement</li>
                            <li>Become a Volunteer</li>
                            <li>Become a partner</li>
                            <li>Representative Program</li>
                            
                        </ul>
                    </div>
                    
                    <div class="col-md-4 sidebar-block">
                    	<div class="widget widget_donations">
                        	<i class="fa fa-dollar fa-5x pull-left"></i>
                            <h4>What your single dollar can change</h4>
                            <form>
                            	<label>Name</label>
                            	<input type="text" class="form-control"/>
                            	<label>Amount (in USD)</label>
                                <input type="text" class="form-control" placeholder="$"/>
                                <button class="btn btn-default btn-rounded btn-block">Donate</button>
                            </form>
                        </div>
                    </div>
               	</div>
            </div>
            <div class="spacer-50"></div>
            <Counters></Counters>
            <div class="padding-tb75 padding-b0">
                <div class="container">
                	<div class="text-align-center">
                       	<h2 class="block-title block-title-center">Some of the success stories</h2>
                    </div>
                    <div class="carousel-wrapper">
                        <div class="row">
                            <ul class="owl-carousel owl-theme carousel-fw" id="testimonials-slider" data-columns="3" data-autoplay="5000" data-pagination="yes" data-arrows="no" data-single-item="no" data-items-desktop="2" data-items-desktop-small="2" data-items-tablet="1" data-items-mobile="1">
                                <li class="item">
                                    <div class="testimonial-block">
                                        <blockquote>
                                            <p>Story.</p>
                                        </blockquote>
                                        <div class="testimonial-avatar"><img src="images/story1.jpg" alt="" width="70" height="70"/></div>
                                        <div class="testimonial-info">
                                            <div class="testimonial-info-in">
                                                <strong>Ada Ajimobi</strong>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="testimonial-block">
                                         <blockquote>
                                            <p>Story.</p>
                                        </blockquote>
                                        <div class="testimonial-avatar"><img src="images/story2.jpg" alt="" width="70" height="70"/></div>
                                        <div class="testimonial-info">
                                            <div class="testimonial-info-in">
                                                <strong>Chloe Lévesque</strong>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="item">
                                    <div class="testimonial-block">
                                        <blockquote>
                                            <p>Story.</p>
                                        </blockquote>
                                        <div class="testimonial-avatar"><img src="images/story1.jpg" alt="" width="70" height="70"/></div>
                                        <div class="testimonial-info">
                                            <div class="testimonial-info-in">
                                                <strong>Ada Ajimobi</strong>
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
    

    <Footer></Footer>
</div>
)
}

}

export default OurImpact;
