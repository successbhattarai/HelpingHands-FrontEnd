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

class Home extends Component{

render(){

return(
<div>
    <Header></Header>
    
    <Slider></Slider>
    
    <FeatureLinks></FeatureLinks>
    
    <Footer></Footer>
</div>
)
}

}

export default Home;
