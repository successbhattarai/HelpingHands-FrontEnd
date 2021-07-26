import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from './Header';
import FeatureLinks from './FeatureLinks';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './Slider';
import Footer from './Footer';

toast.configure();

class UpcommingEvents extends Component{

        state={
        events:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("http://localhost:9000/event/display/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                events: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING EVENT')
            console.log(error.response)
        })
    }


render(){

    return(
        <ul class="events-compact-list">
            {
            this.state.events.map((event)=>{
                return(
                    <li class="event-list-item">
                        <span class="event-date">
                            <span class="date">{event.eventDate}</span>
                            <span class="month">{event.eventMonth}</span>
                            <span class="year">{event.eventYear}</span>
                        </span>
                        <div class="event-list-cont">
                            <span class="meta-data">Thursday, 11:20 AM</span>
                            <h4 class="post-title"><a href="#">{event.eventName}</a></h4>
                            <p>{event.eventShortDescription}</p>
                        </div>
                    </li>
                )
            })
            }
        </ul>
   
)

}

}

export default UpcommingEvents;
