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

class GalleryUpdate extends Component{

        state={
        events:[],
        campaigns:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("https://helpinghand-backend.herokuapp.com/event/display/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                events: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING EVENT')
            console.log(error.response)
        })

        axios.get("https://helpinghand-backend.herokuapp.com/campaign/display/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                campaigns: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING CAMPAIGN')
            console.log(error.response)
        })
    }


render(){

    return(
        <ul>
            {
            this.state.events.map((event)=>{
                return(
                    <li class="format-image grid-item">
                        <a src={'https://helpinghand-backend.herokuapp.com/images/event/' + event.eventImage} class="media-box magnific-image"> <img src={'https://helpinghand-backend.herokuapp.com/images/event/' + event.eventImage} alt="" /> </a>
                    </li>
                )
            })
            }

{
            this.state.campaigns.map((campaign)=>{
                return(
                    <li class="format-image grid-item">
                        <a src={'https://helpinghand-backend.herokuapp.com/images/campaign/' + campaign.campaignImage} class="media-box magnific-image"> <img src={'https://helpinghand-backend.herokuapp.com/images/campaign/' + campaign.campaignImage} alt="" /> </a>
                    </li>
                )
            })
            }
        </ul>
   
)

}

}

export default GalleryUpdate;
