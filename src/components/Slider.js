import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Slider extends Component{

render(){

return(
<div class="hero-area">
    <div class="flexslider heroflex" data-autoplay="yes" data-pagination="no" data-arrows="yes" data-style="fade" data-pause="yes">
        <ul class="slides" style={{padding:"0 !important", margin:"0 !important"}}>
            <li class="parallax" style={{backgroundImage:"url(images/slide4.jpg)",width: "100%", float: "left", marginRight: "-100%", position: "relative",display:"none"}}>
                <div class="flex-caption">
                    <div class="container">
                        <div class="flex-caption-table">
                            <div class="flex-caption-cell">
                                <div class="flex-caption-text">
                                    <h2>Let your life be<br></br>an Inspiration</h2>
                                    <p>When You Donate,<br></br> You Give Renewed Strength to Fight their Problems, <br></br>Bring Families Closer Together and Unite Entire Communities.</p>
                                    <a href="causes" class="btn btn-primary">Start with a little</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="parallax" style={{backgroundImage:"url(images/slide2.jpg)",width: "100%", float: "left", marginRight: "-100%", position: "relative",display:"none"}}>
                <div class="flex-caption">
                    <div class="container">
                        <div class="flex-caption-table">
                            <div class="flex-caption-cell">
                                <div class="flex-caption-text text-align-center">
                                    <h2>Make a difference for people<br></br>who needs it the most</h2>
                                    <a href="causes" class="btn btn-primary">Start with a little</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="parallax" style={{backgroundImage:"url(images/slide3.jpg)",width: "100%", float: "left", marginRight: "-100%", position: "relative",display:"none"}}>
                <div class="flex-caption">
                    <div class="container">
                        <div class="flex-caption-table">
                            <div class="flex-caption-cell text-align-center">
                                <div class="flex-caption-cause">
                                    <h3><a href="#">Save Siyona</a></h3>
                                    <p>Siyona Shrestha a 13 months old Nepali baby girl from has been fighting for her life. She has been diagnosed with a rare fatal genetic disease called Spinal Muscular Atrophy.</p>
                                    <span class="meta-data">Collected : <span class="cause-target">11 Crore 60 Lakhs</span></span>
                                    <a href="#" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#DonateModal">Donate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>

)
}

}

export default Slider;
