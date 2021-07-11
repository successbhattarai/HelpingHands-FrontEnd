import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import FeatureLinks from '../components/FeatureLinks';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Home extends Component{

render(){

return(
    <div>
        <Header></Header>

        <div class="hero-area">
      	<div class="flexslider heroflex" data-autoplay="yes" data-pagination="no" data-arrows="yes" data-style="fade" data-pause="yes">
            <ul class="slides">
                <li class="parallax" style={{backgroundImage:"url(images/slide4.jpg)",width: "100%", float: "left", marginRight: "-100%", position: "relative",display:"none"}}>
                	<div class="flex-caption">
                    	<div class="container">
                        	<div class="flex-caption-table">
                            	<div class="flex-caption-cell">
                                	<div class="flex-caption-text">
                                        <h2>Let your life be<br></br>an Inspiration</h2>
                                        <p>Lorem ipsum dolor sit amet, consectet<br></br>adipiscinge lit. Nam malesuada dapi<br></br>bus diam, ut fringilla purus..</p>
                                        <a href="causes.html" class="btn btn-primary">Start with a little</a>
                                    </div>
                               	</div>
                          	</div>
                        </div>
                    </div>
                </li>
                <li class="parallax" style={{backgroundImage:"url(images/slide2.jpg)",width: "100%", float: "left", marginRight: "-100%", position: "relative",display:"list-item"}}>
                	<div class="flex-caption">
                    	<div class="container">
                        	<div class="flex-caption-table">
                            	<div class="flex-caption-cell">
                                	<div class="flex-caption-text text-align-center">
                                        <h2>Make a difference for people<br></br>who needs it the most</h2>
                                        <a href="causes.html" class="btn btn-primary">Start with a little</a>
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
                            			<h3><a href="#">Save the Glaciers</a></h3>
                    					<p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Nam malesuada dapi bus diam, ut fringilla purus efficitur  eget.</p>
                                        	<span class="meta-data">Donated $26400 / <span class="cause-target">$30000</span></span>
                                    		<a href="#" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#DonateModal">Donate Now</a>
                          			</div>
                        		</div>
                    		</div>
                        </div>
                    </div>
                </li>
          	</ul>
              <ul class="flex-direction-nav"><li><a class="flex-prev" href="#"></a></li><li><a class="flex-next" href="#"></a></li></ul>
           </div>
    </div>
   

        <FeatureLinks></FeatureLinks>
    </div>
)
}

}

export default Home;
