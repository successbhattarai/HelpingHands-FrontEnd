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
import BlogGallery from '../gallery/BlogGallery';
import CampaignGallery from '../gallery/CampaignGallery';
import EventGallery from '../gallery/EventGallery';
import VolunteerGallery from '../gallery/VolunteerGallery';

toast.configure();

class Gallery extends Component{

render(){

return(
<div>
    <Header></Header>
    
    <div class="hero-area">
    	<div class="page-banner parallax">
        	<div class="container">
            	<div class="page-banner-text">
        			<h1 class="block-title">Images Gallery with Caption</h1>
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
                        <li data-option-value=".blogs"><a href="#"><span><i class="fa fa-image"></i> Blog</span></a></li>
                        <li data-option-value=".campaigns"><a href="#"><span><i class="fa fa-image"></i> Campaign</span></a></li>
                        <li data-option-value=".events"><a href="#"><span><i class="fa fa-image"></i> Event</span></a></li>
                        <li data-option-value=".volunteers"><a href="#"><span><i class="fa fa-image"></i> Volunteer</span></a></li>
                    </ul>
                </div>
                <div class="row">
                    <ul class="sort-destination isotope gallery-items" data-sort-id="gallery">
                        <BlogGallery></BlogGallery>
                        <CampaignGallery></CampaignGallery>
                        <EventGallery></EventGallery>
                        <VolunteerGallery></VolunteerGallery>
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

export default Gallery;
