import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class Team extends Component{

    state = {
        userFirstName:'',
        userLastName :'',
        userPhoneNumber:'',
        userEmail:'',
        userMessage :''
    }
    handleStringChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    SendMessageActivity = (e)=>{
        e.preventDefault();
       
        axios.post("http://localhost:9000/user/message/insert",{
            userFirstName: this.state.userFirstName,
            userLastName: this.state.userLastName,
            userPhoneNumber: this.state.userPhoneNumber,
            userEmail:this.state.userEmail,
            userMessage:this.state.userMessage
        })
        .then((response)=>{
            console.log(response);
            toast('YOUR MESSAGE IS SENT')
            console.log('Message Sent Successfully')
            this.setState({
                userFirstName :'',
                userLastName :'',
                userPhoneNumber:'',
                userEmail:'',
                userMessage :''
            })
        })        
        .catch((error)=>{
            toast('ERROR SENDING MESSAGE')
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
        			<h1 class="block-title">Our team</h1>
                </div>
            </div>
        </div>
    </div>

    <div id="main-container">
    	<div class="content">
        	<div class="container">
            	<h2>Management Team</h2>
               	<p class="accent-color lead">If you have any questions regarding this position or are interested in applying for a position and joining our team please call 9823009863</p>
                <div class="spacer-20"></div>
                <div class="row">
                	<div class="col-md-4 col-sm-4">
                    	<div class="grid-item grid-staff-item">
                            <div class="grid-item-inner">
                              	<div class="media-box"><img src="images/staff1.jpeg" alt=""/></div>
                              	<div class="grid-item-content">
                                	<h3>Success Bhattarai</h3>
                                    <span class="meta-data">CEO/Founder</span>
                                	<ul class="social-icons-rounded social-icons-colored">
                                    	<li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li class="googleplus"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        <li class="pinterest"><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                  	</ul>
                                	<p>He is the Co-founder of the Helping Hand Initiative, and serves as the current President. </p></div>
                            </div>
                       	</div>
                    </div>
                 </div>
           	</div>
         	<div class="spacer-75"></div>
           	<div class="lgray-bg padding-tb75">
            	<div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-5">
                            <h2 class="block-title">Our Staff &amp; Volunteers</h2>
                            <p>Our individual efforts don't need to be huge—a little bit of change here, a few hours there—but even small efforts quickly add up to make a real difference.<br></br>As we work side-by-side and learn from each other, mutual understanding increases, misconceptions can be corrected, and new friendships are built.
                                </p></div>
                        <div class="col-md-7 col-sm-7">
                            <div class="row">
                                <div >
                                    <ul class="carets">
                                        <li class="col-ms-4 col-sm-4 col-xs-4">Sabin Budhathoki</li>
                                        <li class="col-ms-4 col-sm-4 col-xs-4">Dilip Poudel</li>
                                        <li class="col-ms-4 col-sm-4 col-xs-4">Ujwal Budhathoki</li>
                                        <li class="col-ms-4 col-sm-4 col-xs-4">Ronish Joshi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           	</div>
            <div class="accent-bg padding-tb20 cta-fw">
    			<div class="container">
                    <a href="#" class="btn btn-default btn-ghost btn-light btn-rounded pull-right" style={{color:"black"}}>Become a volunteer</a>
                    <h4>Let's start doing your bit for the world. Join us as a Volunteer</h4>
                </div>
            </div>
            <div class="spacer-50"></div>
            <div class="text-align-center">
                <h2>Join us now to make your impact</h2>
                <p>At Helping Hands, we believe that nothing should get in the way of organizations and volunteers<br></br> coming together to do good things for the community, so we help make this happen for free.</p>
                <a href="register" class="btn btn-primary btn-lg">Join us today</a>
            </div>
        </div>
    </div>
    

    <Footer></Footer>
</div>
)
}

}

export default Team;
