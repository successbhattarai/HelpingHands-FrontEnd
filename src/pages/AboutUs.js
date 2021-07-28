import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class AboutUs extends Component{

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
            toast('ERROR DISPLAYING VOLUNTEER')
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
                    <h1 class="block-title">About Us</h1>
                </div>
            </div>
        </div>
    </div>
    
    <div id="main-container">
        <div class="content">
            
            <div class="lgray-bg padding-tb75">
                
                <div class="container">
                    <div class="cta">
                        <a href="causes" class="btn btn-primary pull-right">Donate Now</a>
                        <p>Let's start doing your bit for the world. Donate a little.</p>
                    </div>
                    <div class="spacer-30"></div>
                    <div class="row">
                        <div class="col-md-5 col-sm-5">
                            <h2 class="block-title">Our Staff &amp; Volunteers</h2>
                            <p>Our individual efforts don't need to be huge—a little bit of change here, a few hours there—but even small efforts quickly add up to make a real difference.<br></br>As we work side-by-side and learn from each other, mutual understanding increases, misconceptions can be corrected, and new friendships are built.
                            </p>
                        </div>
                        <div class="col-md-7 col-sm-7">
                            <div class="row">
                                <div>
                                    <ul class="carets">
                                        {
                                        this.state.volunteers.map((volunteer)=>{
                                        return(
                                        <li class="col-ms-4 col-sm-4 col-xs-4">{volunteer.volunteerFullName}</li>
                                        )})}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-4 col-sm-4">
                        <div class="grid-item grid-staff-item">
                            <div class="grid-item-inner">
                                <div class="media-box"><img src="images/staff1.jpeg" alt="" /></div>
                                <div class="grid-item-content">
                                    <h3>Success Bhattarai</h3>
                                    <span class="meta-data">CEO/Founder</span>
                                    <ul class="social-icons-rounded social-icons-colored">
                                        <li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li class="googleplus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        <li class="pinterest"><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                    </ul>
                                    <p>He is the Co-founder of the Helping Hand Initiative, and serves as the current President. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    
    <Footer></Footer>
</div>)
}

}

export default AboutUs;
