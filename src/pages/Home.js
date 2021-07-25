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
import UrgentPost from '../campaigns/UrgentPost';
import DonateModal from '../components/DonateModal';

toast.configure();

class Home extends Component{

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
toast('ERROR DISPLAYING EVENT')
console.log(error.response)
})
}



render(){

return(
<div>
    <Header></Header>
    
    <Slider></Slider>
    
    <FeatureLinks></FeatureLinks>
    
    <div class="lgray-bg padding-tb75">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-5">
                    <h2 class="block-title">Causes that need your<br></br>urgent attention</h2>
                    <div class="spacer-30"></div>
                </div>
                <div class="col-md-7 col-sm-7">
                    <div class="spacer-10"></div>
                    <p>"To give away money is an easy matter and in any man's power. But to decide to whom to give it, and how large and when, and for what purpose and how, is neither in every man's power nor an easy matter."</p>
                    <p>- Aristotle </p>
                </div>
            </div>
            <div class="carousel-wrapper">
                <div class="row">
                    <UrgentPost></UrgentPost>
                </div>
            </div>
        </div>
    </div>
    
    <Footer></Footer>

    <DonateModal></DonateModal>
</div>
)
}

}

export default Home;
