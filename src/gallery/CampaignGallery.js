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

class CampaignGallery extends Component{

        state={
        campaigns:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("http://localhost:9000/campaign/display",this.state.config)
        .then((response)=>{
            this.setState({
                campaigns: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING STANDINGS')
            console.log(error.response)
        })
    }


render(){

    return(
        <ul class="campaign-items isotope gallery-items" data-sort-id="gallery">
            {
            this.state.campaigns.map((campaign)=>{
            return(
            <li class="col-md-6 col-sm-6 col-xs-6 grid-item gallery-grid-item campaigns format-image">
                <a href={'http://localhost:9000/images/campaign/' + campaign.campaignImage} class="media-box magnific-image"> <img src={'http://localhost:9000/images/campaign/' + campaign.campaignImage} alt="" /> </a>
                <div class="grid-item-content">
                    <p>{campaign.campaignName}</p>
                </div>
            </li>
            )})}
        </ul>
    )
        
}

}

export default CampaignGallery;
