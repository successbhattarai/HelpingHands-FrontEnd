import React, { Component } from 'react';
import axios from 'axios';
import { Input } from'reactstrap';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class EventSingle extends Component{
    

    state={
        eventImage :'',
        eventName :'',
        eventShortDescription :'',
        eventAttendees :'',
        eventDate :'',
        eventMonth :'',
        eventYear:'',
        eventCategories :'',
        eventLocation :'',
        eventFullDescription :'',
        id : this.props.match.params.id
    }


    componentDidMount(){
        axios.get("http://localhost:9000/event/display/" + this.state.id)
        .then((response)=>{
            this.setState({
                eventImage : response.data.eventImage,
                eventName : response.data.eventName,
                eventShortDescription : response.data.eventShortDescription,
                eventAttendees : response.data.eventAttendees,
                eventDate : response.data.eventDate,
                eventMonth : response.data.eventMonth,
                eventYear : response.data.eventYear,
                eventCategories : response.data.eventCategories,
                eventLocation : response.data.eventLocation,
                eventFullDescription : response.data.eventFullDescription,
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING EVENT')
            console.log(error.response)
        })
    }


render(){

return(
<div>

    <div class="hero-area">
            <div class="page-banner parallax">
                <div class="container">
                    <div class="page-banner-text">
                        <h1 class="block-title">Events</h1>
                        <a href="/" style={{color:"white"}}>Return Home</a>
                    </div>
                    
                </div>
            </div>
        </div>

        <div id="main-container">
    	<div class="content">
        	<div class="container">
            	<div class="row">
                	<div class="col-md-8 content-block">
                    	<h3>{this.state.eventName}</h3>
                    	<div class="post-media">
                        	<img src={'http://localhost:9000/images/event/' + this.state.eventImage} alt=""/>
                        </div>
                        <div class="row">
                        	<div class="col-md-6 col-sm-6">
                                <span class="event-date" style={{backgroundColor: "rgb(66, 184, 212)"}}> 
                                    <span class="date">{this.state.eventDate}</span>
                                    <span class="month">{this.state.eventMonth}</span>
                                    <span class="year">{this.state.eventYear}</span>
                                </span>
                                    <span class="meta-data">Thursday, 11:20 AM - 02:20 PM</span>
                        		<a href="#" class="btn btn-primary btn-event-single-book">Book Tickets</a>
                      		</div>
                            <div class="col-md-6 col-sm-6">
                                <ul class="list-group">
                                    <li class="list-group-item">{this.state.eventAttendees}<span class="badge">Attendees</span></li>
                                    <li class="list-group-item">{this.state.eventLocation}<span class="badge">Location</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="spacer-20"></div>
                      	<p class="lead">{this.state.eventShortDescription}</p>
                        <p>{this.state.eventFullDescription}</p>
                    </div>
                    <div class="col-md-4 sidebar-block">
                    <div class="widget events-calendar-widget">
                                <h3 class="widgettitle">Upcoming Events</h3>
                                <div class="events-calendar-widget-body">
                                    <ul class="events-compact-list">
                                        <li class="event-list-item">
                                            <span class="event-date" style={{ backgroundColor: "#42b8d4"}}>
                                                <span class="date">3</span>
                                                <span class="month">Jan</span>
                                                <span class="year">2012</span>
                                            </span>
                                            <div class="event-list-cont">
                                                <span class="meta-data">Thursday, 11:20 AM</span>
                                                <h4 class="post-title"><a href="#">Summer Camp: Students Get Together</a></h4>
                                            </div>
                                        </li>
                                        <li class="event-list-item">
                                            <span class="event-date" style={{ backgroundColor: "#42b8d4"}}>
                                                <span class="date">18</span>
                                                <span class="month">Jan</span>
                                                <span class="year">2016</span>
                                            </span>
                                            <div class="event-list-cont">
                                                <span class="meta-data">Monday, 07:00 PM</span>
                                                <h4 class="post-title"><a href="#">Fundraising for meals</a></h4>
                                            </div>
                                        </li>
                                        <li class="event-list-item">
                                            <span class="event-date" style={{ backgroundColor: "#42b8d4"}}>
                                                <span class="date">26</span>
                                                <span class="month">Feb</span>
                                                <span class="year">2016</span>
                                            </span>
                                            <div class="event-list-cont">
                                                <span class="meta-data">Friday, 01:00 PM</span>
                                                <h4 class="post-title"><a href="#">Green Environment</a></h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                       <div class="widget sidebar-widget widget_categories">
                        	<h3 class="widgettitle">Event Categories</h3>
                            <ul>
                            	<li><a href="#">Education</a> (3)</li>
                            	<li><a href="#">Environment</a> (1)</li>
                            	<li><a href="#">Global warming</a> (6)</li>
                            	<li><a href="#">Water</a> (4)</li>
                            	<li><a href="#">Wild life</a> (2)</li>
                            	<li><a href="#">Small business</a> (12)</li>
                            </ul>
                        </div>
                        <div class="widget recent_posts">
                           	<h3 class="widgettitle">Latest Posts</h3>
                            <ul>
                                <li>
                                    <a href="single-post.html" class="media-box">
                                        <img src="http://localhost:3000/images/post1.jpg"  alt=""/>
                                    </a>
                                    <h5><a href="single-post.html">A single person can change million lives</a></h5>
                                    <span class="meta-data grid-item-meta">Posted on 11th Dec, 2015</span>
                                </li>
                                <li>
                                    <a href="single-post.html" class="media-box">
                                        <img src="http://localhost:3000/images/post3.jpg"  alt=""/>
                                    </a>
                                    <h5><a href="single-post.html">Donate your woolens this winter</a></h5>
                                    <span class="meta-data grid-item-meta">Posted on 11th Dec, 2015</span>
                                </li>
                                <li>
                                    <a href="single-post.html" class="media-box">
                                        <img src="http://localhost:3000/images/post2.jpg"  alt=""/>
                                    </a>
                                    <h5><a href="single-post.html">How to survive the tough path of life</a></h5>
                                    <span class="meta-data grid-item-meta">Posted on 06th Dec, 2015</span>
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

export default EventSingle;
