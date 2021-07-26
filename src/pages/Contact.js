import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class Contact extends Component{

    state = {
        campaigns: [],
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
        });
    }

    componentWillMount=(e)=>{
        axios.get("http://localhost:9000/campaign/latest/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                campaigns: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING CAMPAIGN')
            console.log(error.response)
        });
    }


render(){

return(
<div>
    <Header></Header>
    
    <div class="hero-area">
        <div class="page-banner parallax">
            <div class="container">
                <div class="page-banner-text">
                    <h1 class="block-title">Contact us</h1>
                </div>
            </div>
        </div>
    </div>
    
    <div id="main-container">
        <div class="content">
            <div id="contact-map" style={{width:"100%",height:"400px"}}>
                <iframe src="https://maps.google.com/maps?q=Softwarica%20College%20of%20IT%20&%20E-Commerce&t=&z=13&ie=UTF8&iwloc=&output=embed" height="400px" width="100%"></iframe>
            </div>
            <div class="spacer-75"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 content-block">
                        <form method="post" id="contactform" name="contactform" class="contact-form clearfix" action="https://demo1.imithemes.com/html/born-to-give/mail/contact.php">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <input type="text" name="userFirstName" id="userFirstName" value={this.state.userFirstName} onChange={this.handleStringChange} class="form-control input-lg" placeholder="First name*" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" name="userLastName" id="userLastName" value={this.state.userLastName} onChange={this.handleStringChange} class="form-control input-lg" placeholder="Last name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" name="userEmail" id="userEmail" value={this.state.userEmail} onChange={this.handleStringChange} class="form-control input-lg" placeholder="Email*" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="userPhoneNumber" id="userPhoneNumber" value={this.state.userPhoneNumber} onChange={this.handleStringChange} class="form-control input-lg" placeholder="Phone" />
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="form-group">
                                        <textarea cols="6" rows="8" name="userMessage" id="userMessage" value={this.state.userMessage} onChange={this.handleStringChange} class="form-control input-lg" placeholder="Message"></textarea>
                                    </div>
                                    <input id="submit" name="submit" type="submit" class="btn btn-primary btn-lg pull-right" onClick={this.SendMessageActivity} value="Send Message!" />
                                </div>
                            </div>
                        </form>
                        <div class="clearfix"></div>
                        <div id="message"></div>
                    </div>
                    
                    <div class="col-md-4 sidebar-block">
                        <div class="widget widget_recent_causes">
                            <ul>
                                <h3 class="widgettitle">Latest Causes</h3>
                                {
                                this.state.campaigns.map((campaign)=>{
                                return(
                                <li>
                                    <a href="#" class="cause-thumb">
                                        <img src={'http://localhost:9000/images/campaign/' + campaign.campaignImage} alt="" class="img-thumbnail" />
                                        <div class="cProgress" data-complete="88" data-color="42b8d4">
                                            <strong></strong>
                                        </div>
                                    </a>
                                    <h5><a href="single-cause.html">{campaign.campaignName}</a></h5>
                                    <span class="meta-data">{campaign.campaignDays} days left to achieve</span>
                                </li>
                                )
                                })
                                }
                            </ul>
                        </div>
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

export default Contact;
