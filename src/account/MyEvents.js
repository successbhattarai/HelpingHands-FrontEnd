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

class MyEvents extends Component{

        state={
        campaigns:[],
        myevents:[],
        id : this.props.match.params.id,
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("https://helpinghand-backend.herokuapp.com/campaign/latest/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                campaigns: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING CAMPAIGN')
            console.log(error.response)
        })

        const token = localStorage.getItem("token");
        const decodeToken = decode(token); 
        const userId = decodeToken.userId;
        axios.get("https://helpinghand-backend.herokuapp.com/my-event/display/" + userId)
        .then((response)=>{
            this.setState({
                myevents: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING MY EVENTS')
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
        			<h1 class="block-title">My Events</h1>
                </div>
            </div>
        </div>
    </div>

    <div id="main-container">
    	<div class="content">
        	<div class="container">
            	<div class="row">
                	<div class="col-md-8 content-block">
                        <ul class="events-list">
                        {
                        this.state.myevents.map((event)=>{
                            return(
                            <li class="event-list-item">
                                <span class="event-date">
                                    <span class="date">{event.eventDate}</span>
                                    <span class="month">{event.eventMonth}</span>
                                    <span class="year">{event.eventYear}</span>
                                </span>
                                <div class="event-list-cont">
                                    <span class="meta-data">Thursday, 11:20 AM - 02:20 PM</span>
                                    <h4 class="post-title"><a href="#">{event.eventName}</a></h4>
                                    <p>{event.eventShortDescription}</p>
                                    <a href="#" class="btn btn-default">Book Tickets</a>
                                </div>
                            </li>
                            )
                        })
                        }
                        </ul>
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
                    
                    <div class="col-md-4 sidebar-block">
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
                        <div class="widget widget_recent_causes">
                            <ul>
                                <h3 class="widgettitle">Latest Causes</h3>
                                {
                                this.state.campaigns.map((campaign)=>{
                                return(
                                <li>
                                    <a href={"single-cause/" + campaign._id} class="cause-thumb">
                                        <img src={'https://helpinghand-backend.herokuapp.com/images/campaign/' + campaign.campaignImage} alt="" class="img-thumbnail" />
                                        <div class="cProgress" data-complete="88" data-color="42b8d4">
                                            <strong></strong>
                                        </div>
                                    </a>
                                    <h5><a href={"single-cause/" + campaign._id}>{campaign.campaignName}</a></h5>
                                    <span class="meta-data">{campaign.campaignDays} days left to achieve</span>
                                </li>
                                )
                                })
                                }
                            </ul>
                        </div>
                         </div>
                </div>
            </div>
        </div>
    </div>
   
    
</div>
)
}

}

export default MyEvents;
