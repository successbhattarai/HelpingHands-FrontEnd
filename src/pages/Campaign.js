import React, { Component } from 'react';
import axios from 'axios';
import { Input } from'reactstrap';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import EducationCampaign from '../campaigns/EducationCampaign';
import EnvironmentCampaign from '../campaigns/EnvironmentCampaign';
import FoodCampaign from '../campaigns/FoodCampaign';
import FuneralExpensesCampaign from '../campaigns/FuneralExpensesCampaign';
import LifeEssentialsCampaign from '../campaigns/LifeEssentialsCampaign';
import MedicalExpensesCampaign from '../campaigns/MedicalExpensesCampaign';
import OthersCampaign from '../campaigns/OthersCampaign';

toast.configure();

class Campaign extends Component{
    
 
    state={
        campaigns:[]
    }


    componentDidMount(){
        axios.get("https://helpinghand-backend.herokuapp.com/campaign/display",this.state.config)
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
<div>
    <Header></Header>

    <div class="hero-area">
            <div class="page-banner parallax">
                <div class="container">
                    <div class="page-banner-text">
                        <h1 class="block-title">Our Causes</h1>
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
                            <li data-option-value=".environment"><a href="#"><span>Environment</span></a></li>
                            <li data-option-value=".food"><a href="#"><span>Food</span></a></li>
                            <li data-option-value=".funeral"><a href="#"><span>Funeral Expenses</span></a></li>
                            <li data-option-value=".life"><a href="#"><span>Life Essential Necessity</span></a></li>
                            <li data-option-value=".medical-expenses"><a href="#"><span>Medical Expenses</span></a></li>
                            <li data-option-value=".other"><a href="#"><span>Others</span></a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul class="sort-destination isotope gallery-items" data-sort-id="gallery">
                            <EducationCampaign></EducationCampaign>
                            <EnvironmentCampaign></EnvironmentCampaign>
                            <FoodCampaign></FoodCampaign>
                            <FuneralExpensesCampaign></FuneralExpensesCampaign>
                            <LifeEssentialsCampaign></LifeEssentialsCampaign>
                            <MedicalExpensesCampaign></MedicalExpensesCampaign>
                            <OthersCampaign></OthersCampaign>
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
 
    <Footer></Footer>
</div>
)
}

}

export default Campaign;
