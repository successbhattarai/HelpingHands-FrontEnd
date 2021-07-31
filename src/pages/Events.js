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
import Educational from '../events/Educational';
import Entertainment from '../events/Entertainment';
import Sports from '../events/Sports';
import Religious from '../events/Religious';
import Political from '../events/Political';
import Charitable from '../events/Charitable';
import Others from '../events/Others';

toast.configure();

class Events extends Component{

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
                            <li data-option-value=".Entertainment"><a href="#"><span>Entertainment</span></a></li>
                            <li data-option-value=".Sports"><a href="#"><span>Sports</span></a></li>
                            <li data-option-value=".Religious"><a href="#"><span>Religious</span></a></li>
                            <li data-option-value=".Educational"><a href="#"><span>Educational</span></a></li>
                            <li data-option-value=".Political"><a href="#"><span>Political</span></a></li>
                            <li data-option-value=".Charitable"><a href="#"><span>Charitable</span></a></li>
                            <li data-option-value=".Others"><a href="#"><span>Others</span></a></li>
                        </ul>
                    </div>
                    <div class="row">
                    <ul class="sort-destination isotope gallery-items" data-sort-id="gallery">
                        <Entertainment></Entertainment>
                        <Sports></Sports>
                        <Religious></Religious>
                        <Educational></Educational>
                        <Political></Political>
                        <Charitable></Charitable>
                        <Others></Others>
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
