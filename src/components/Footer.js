import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Footer extends Component{

render(){

return(
<div>
    <div class="site-footer parallax parallax3" style={{backgroundImage:"url(images/parallax3.jpg)"}}>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <div class="widget footer_widget">
                        <h4 class="widgettitle">About Helping Hands</h4>
                        <p><img src="images/logo2.png" alt="" /></p>
                        <p>Helping Hands is trusted around the world for its simple, reliable fundraising platform. Our Trust & Safety team works around the clock to protect against fraud.</p>
                        <ul class="social-icons-rounded social-icons-colored">
                            <li class="facebook"><a href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook-f"></i></a></li>
                            <li class="twitter"><a href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li class="googleplus"><a href="https://www.google.com" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                            <li class="youtube"><a href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
                            <li class="vimeo"><a href="https://www.vimeo.com" target="_blank"><i class="fa fa-vimeo"></i></a></li>
                            <li class="instagram"><a href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="widget footer_widget widget_links">
                        <h4 class="widgettitle">Blogroll</h4>
                        <ul>
                            <li><a href="#">Become a volunteer</a></li>
                            <li><a href="#">Our mission</a></li>
                            <li><a href="#">Success stories</a></li>
                            <li><a href="#">Meet our team</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="widget footer_widget">
                        <h4 class="widgettitle">We are on Twitter</h4>
                        <div class="twitter-widget" data-tweets-count="2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="site-footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="copyrights-col-left">
                        <p>&copy; 2021 Helping Hands. All Rights Reserved</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6"></div>
                <div class="copyrights-col-right">
                    <ul class="footer-menu">
                        <li><a href="privacy-policy">Privacy policy</a></li>
                        <li><a href="payment-terms">Payment terms</a></li>
                        <li><a href="refund-policy">Refund policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <a id="back-to-top"><i class="fa fa-angle-double-up"></i></a>
</div>
)
}

}

export default Footer;
