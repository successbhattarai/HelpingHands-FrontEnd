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

class EventGallery extends Component{

        state={
        events:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("https://helpinghand-backend.herokuapp.com/event/display",this.state.config)
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
        <ul class="event-items isotope gallery-items" data-sort-id="gallery">
            {
            this.state.events.map((event)=>{
            return(
            <li class="col-md-6 col-sm-6 col-xs-6 grid-item gallery-grid-item events format-image">
                <a href={'https://helpinghand-backend.herokuapp.com/images/event/' + event.eventImage} class="media-box magnific-image"> <img src={'https://helpinghand-backend.herokuapp.com/images/event/' + event.eventImage} alt="" /> </a>
                <div class="grid-item-content">
                    <p>{event.eventName}</p>
                </div>
            </li>
            )})}
        </ul>
    )
        
}

}

export default EventGallery;
