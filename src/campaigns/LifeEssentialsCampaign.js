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

class LifeEssentialsCampaign extends Component{

        state={
        campaigns:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("http://localhost:9000/campaign/display/life-essential-necessities",this.state.config)
        .then((response)=>{
            this.setState({
                campaigns: response.data
            })
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }


render(){

    return(
        <ul class="sort-destination isotope gallery-items" data-sort-id="gallery">
        {
    this.state.campaigns.map((campaign)=>{
        return(
            <li class="col-md-4 col-sm-6 grid-item cause-grid-item life-expenses format-standard">
                <div class="grid-item-inner">
                    <a href={"single-cause/" + campaign._id}  class="media-box">
                        <img src={'http://localhost:9000/images/campaign/' + campaign.campaignImage} style={{width:"358px",height:"238px"}} alt=""/>
                    </a>
                    <div class="grid-item-content">
                        <a class="cProgress" data-complete="88" data-color="F23827" data-toggle="tooltip" data-original-title="10 days left"><strong></strong></a>
                        <h3 class="post-title"><a href={"single-cause/" + campaign._id}>{campaign.campaignName}</a></h3>
                        <div class="meta-data">Donated NPR 0 / <span class="cause-target">NPR {campaign.campaignGoal}</span></div>
                        <a href={"donate-now/" + campaign._id}  class="btn btn-primary">Donate Now</a>
                    </div>
                </div>
            </li>
         )})}
        </ul>
   
)

}

}

export default LifeEssentialsCampaign;
