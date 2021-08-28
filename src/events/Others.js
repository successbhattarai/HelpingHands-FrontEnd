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

class Others extends Component{

        state={
        events:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("https://helpinghand-backend.herokuapp.com/event/display/others",this.state.config)
        .then((response)=>{
            this.setState({
                events: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING OTHERS EVENT')
            console.log(error.response)
        })
    }


render(){

    return(
        <ul class="sort-destination isotope gallery-items" data-sort-id="gallery">
            {
            this.state.events.map((event)=>{
            return(
            <li class="col-md-4 col-sm-6 grid-item event-grid-item Others format-standard">
                <div class="grid-item-inner">
                    <a href={"single-event/" + event._id} class="media-box">
                        <img src={'https://helpinghand-backend.herokuapp.com/images/event/' + event.eventImage} alt="" />
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
)

}

}

export default Others;
