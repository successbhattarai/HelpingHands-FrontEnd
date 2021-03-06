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

class VolunteerGallery extends Component{

        state={
        volunteers:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("https://helpinghand-backend.herokuapp.com/volunteer/display",this.state.config)
        .then((response)=>{
            this.setState({
                volunteers: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING STANDINGS')
            console.log(error.response)
        })
    }


render(){

    return(
        <ul class="volunteer-items isotope gallery-items" data-sort-id="gallery">
            {
            this.state.volunteers.map((volunteer)=>{
            return(
            <li class="col-md-6 col-sm-6 col-xs-6 grid-item gallery-grid-item volunteers format-image">
                <a href={'https://helpinghand-backend.herokuapp.com/images/volunteer/' + volunteer.volunteerImage} class="media-box magnific-image"> <img src={'https://helpinghand-backend.herokuapp.com/images/volunteer/' + volunteer.volunteerImage} alt="" style={{width:"555px", height:"370px"}} /> </a>
                <div class="grid-item-content">
                    <p>{volunteer.volunteerFullName}</p>
                </div>
            </li>
            )})}
        </ul>
    )
        
}

}

export default VolunteerGallery;
