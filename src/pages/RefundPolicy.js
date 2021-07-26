import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import FeatureLinks from '../components/FeatureLinks';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivacyPolicy from './PrivacyPolicy';
import Footer from '../components/Footer';

toast.configure();

class RefundPolicy extends Component{

render(){

return(
<div>
    <Header></Header>
    <div class="hero-area">
        <div class="page-banner parallax">
            <div class="container">
                <div class="page-banner-text">
                    <h1 class="block-title">Refund policy</h1>
                </div>
            </div>
        </div>
    </div>
    <div id="main-container">
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 sidebar-block">
                        <div class="widget sidebar-widget widget_links">
                            <h3 class="widgettitle">Pages</h3>
                            <ul>
                                <li class="active"><a href="refund-policy">Refund policy</a></li>
                                <li><a href="privacy-policy">Privacy policy</a></li>
                                <li><a href="payment-terms">Payment terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-8 content-block">
                        <p>Paragraph</p>
                        <p>Paragraph</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
)
}

}

export default RefundPolicy;
