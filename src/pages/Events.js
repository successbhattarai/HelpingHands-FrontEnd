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

class Events extends Component{

        state={
        events:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("http://localhost:9000/event/display",this.state.config)
        .then((response)=>{
            this.setState({
                events: response.data
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
        			<h1 class="block-title">Upcoming Events</h1>
                </div>
            </div>
        </div>
    </div>
    <div id="main-container">
            <div class="content">
                <div class="container">
                    <div class="grid-filter">
                        <ul class="nav nav-pills sort-source" data-sort-id="gallery" data-option-key="filter">
                            <li data-option-value="*" class="active"><a href="#"><i class="fa fa-th"></i> <span>Show All</span></a></li>
                            <li data-option-value=".education"><a href="#"><span>Education</span></a></li>
                            <li data-option-value=".wild-life"><a href="#"><span>Wild Life</span></a></li>
                            <li data-option-value=".environment"><a href="#"><span>Environment</span></a></li>
                            <li data-option-value=".water"><a href="#"><span>Water</span></a></li>
                            <li data-option-value=".human-rights"><a href="#"><span>Human Rights</span></a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul class="sort-destination isotope gallery-items" data-sort-id="gallery">
                        {
                    this.state.events.map((event)=>{
                        return(
                            <li class="col-md-4 col-sm-6 grid-item event-grid-item format-standard">
                                <div class="grid-item-inner">
                                    <a href={"single-event/" + event._id}  class="media-box">
                                        <img src={'http://localhost:9000/images/event/' + event.eventImage} alt=""/>
                                    </a>

                                    <div class="grid-item-content">
                                        <span class="event-date">
                                            <span class="date">{event.eventDate}</span>
                                            <span class="month">{event.eventMonth}</span>
                                            <span class="year">{event.eventYear}</span>
                                        </span>
                                        <span class="meta-data">Thursday, 11:20 AM - 02:20 PM</span>
                                        <h3 class="post-title"><a href={"single-event/" + event._id}>{event.eventName}</a></h3>
                                        <ul class="list-group">
                                            <li class="list-group-item">{event.eventAttendees}<span class="badge">Attendees</span></li>
                                            <li class="list-group-item">{event.eventLocation}<span class="badge">Location</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                         )})}
                         </ul>
                    </div>
                    
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
            </div>
        </div>
        


</div>
)
}

}

export default Events;
