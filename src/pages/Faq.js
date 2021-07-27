import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import FeatureLinks from '../components/FeatureLinks';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class FAQ extends Component{

render(){

return(
    <div>
        <Header></Header>

        <div class="hero-area">
    	<div class="page-banner parallax">
        	<div class="container">
            	<div class="page-banner-text">
                    <h1 class="block-title">Frequently Asked Questions</h1>
                    <p style={{color:"white"}}> Everything you need to know about helping hand.</p>
                    
                </div>
            </div>
        </div>
    </div>
    <div id="main-container">
    <div class="content">
        	<div class="container">
        <section class="row content_faqs page-content">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="row" style={{padding: "36px 36px 38px 30px",textTransform: "uppercase",width: "360px",background: "#f1f5fa"}}>
                        <h4>categories</h4>
                        <ul class="nav">
                            <li><a href="#general">general question</a></li>
                            <li><a href="#volunteer">Volunteer Questions</a></li>
                            <li><a href="#donations">donations question</a></li>
                            <li><a href="#partner">partner question</a></li>
                            <li><a href="#others">OTHERS</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="row m0 questions" id="general">
                    <h3 class="widgettitle">General Questions</h3>
                        <div class="panel-group question_accordion" id="question_accordion1" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="heading1">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#question_accordion4" href="#collapse1" aria-expanded="false" aria-controls="collapse19">Questions</a>
                                    </h4>
                                </div>
                                <div id="collapse1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading1">
                                    <div class="panel-body">
                                        <p>Answer</p>
                                    </div>
                                </div>
                            </div>
                          </div>
                    </div>
                    
                    <div class="row m0 questions" id="volunteer">
                        <h3 class="widgettitle">Volunteer Questions</h3>
                        <div class="panel-group question_accordion" id="question_accordion2" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="heading2">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#question_accordion4" href="#collapse2" aria-expanded="false" aria-controls="collapse19">Questions</a>
                                    </h4>
                                </div>
                                <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                                    <div class="panel-body">
                                        <p>Answer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row m0 questions" id="donations">
                        <h3 class="widgettitle">Donations Questions</h3>
                        <div class="panel-group question_accordion" id="question_accordion3" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="heading3">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#question_accordion4" href="#collapse3" aria-expanded="false" aria-controls="collapse19">Questions</a>
                                    </h4>
                                </div>
                                <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                    <div class="panel-body">
                                        <p>Answer</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                    
                    <div class="row m0 questions" id="partner">
                        
                    <h3 class="widgettitle">Partner Questions</h3>
                        <div class="panel-group question_accordion" id="question_accordion4" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="heading4">
                                    <h4 class="panel-title">
                                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#question_accordion4" href="#collapse4" aria-expanded="false" aria-controls="collapse19">Questions</a>
                                    </h4>
                                </div>
                                <div id="collapse4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                                    <div class="panel-body">
                                        <p>Answer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </div>
    </div>

        <Footer></Footer>
    </div>
)
}

}

export default FAQ;
