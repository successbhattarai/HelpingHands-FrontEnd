import React, { Component } from 'react';
import axios from 'axios';
import { Input } from'reactstrap';
import decode from 'jwt-decode';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class AddEvent extends Component{
    
    state = {
        eventImage :'',
        eventName :'',
        eventShortDescription :'',
        eventAttendees :'',
        eventDate :'',
        eventMonth :'',
        eventYear:'',
        eventCategories :'',
        eventLocation :'',
        eventFullDescription :'',
        eventPostedBy:''
    }
    
    handleStringChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleImageChange = (e)=>{
        this.setState({
            eventImage: e.target.files[0]
        })
    };
    
    AddEvent = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        const token = localStorage.getItem("token");
        const decodeToken = decode(token); 
        const userId = decodeToken.userId;
        formData.append('eventImage', this.state.eventImage);
        formData.append('eventName', this.state.eventName);
        formData.append('eventShortDescription', this.state.eventShortDescription);
        formData.append('eventAttendees', this.state.eventAttendees);
        formData.append('eventDate', this.state.eventDate);
        formData.append('eventMonth', this.state.eventMonth);
        formData.append('eventYear', this.state.eventYear);
        formData.append('eventCategories', this.state.eventCategories);
        formData.append('eventLocation', this.state.eventLocation);
        formData.append('eventFullDescription', this.state.eventFullDescription);
        formData.append('eventPostedBy', userId);

        axios.post("http://localhost:9000/event/insert", formData, {

            headers: {
                Accept:'application/json',
               'Content-Type':'multipart/form-data'
            }  
         })
        .then((response)=>{
            console.log(response);
            toast(this.state.eventName + " " + " Added Successfully")
            this.props.history.push('/events');
            console.log('Event Added Successfully')
            
        })        
        .catch((error)=>{
            toast('ERROR ADDING BLOG')
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
                        <h1 class="block-title">Post New Event</h1>
                    </div>
                </div>
            </div>
        </div>

        
    <div id="main-container">
    	<div class="content">
            <div class="container" id="openings">
            	<div class="row">
                <div class="col-md-12 col-sm-12">
                    	<div class="well widget widget_volunteer_form">
                            <h3>Event Details</h3>
                            <form>
                                <label>Featured Image</label>
                            	<input type="file" name="eventImage" id="eventImage" onChange={this.handleImageChange} class="form-control"/>

                            	<label>Event Name</label>
                            	<input type="text" placeholder="Event Name*" id="eventName" name="eventName" value={this.state.eventName} onChange={this.handleStringChange} class="form-control"/>

                                <label>Short Description</label>
                            	<input type="text" placeholder="Short Description*" id="eventShortDescription" name="eventShortDescription" value={this.state.eventShortDescription} onChange={this.handleStringChange} class="form-control"/>
                                

                                <label>No. of Attendees</label>
                            	<input type="text" placeholder="Attendees*"  id="eventAttendees" name="eventAttendees" value={this.state.eventAttendees} onChange={this.handleStringChange} class="form-control"/>
                            	
                                <label>Event Date</label>
                                <div class="row">
                                	
                                	<div class="col-md-4 col-sm-4 col-xs-4">
                                         <input type="number" placeholder="1" min="1" max="32"  id="eventDate" name="eventDate" value={this.state.eventDate} onChange={this.handleStringChange} class="form-control"/>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-4">
                                        <Input type="select" name="eventMonth" id="eventMonth" value={this.state.eventMonth} onChange={this.handleStringChange} required="required">
                                            <option value="Jan">January</option>
                                            <option value="Feb">February</option>
                                            <option value="Mar">March</option>
                                            <option value="Apr">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="Aug">August</option>
                                            <option value="Sept">September</option>
                                            <option value="Oct">October</option>
                                            <option value="Nov">November</option>
                                            <option value="Dec">December</option>
                                        </Input>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-4">
                                        <Input type="select" name="eventYear" id="eventYear" value={this.state.eventYear} onChange={this.handleStringChange} required="required">
                                            <option value="2015">2015</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                        </Input>
                                    </div>
                                </div>

                            	
                                <div class="row">
                                	
                                	<div class="col-md-6 col-sm-6 col-xs-6">
                            			<label>Categories</label>
                                        <Input type="select" name="eventCategories" id="eventCategories" value={this.state.eventCategories} onChange={this.handleStringChange} required="required">
                                            <option value="Education">Education</option>
                                            <option value="Environment">Environment</option>
                                            <option value="Human Rights">Human Rights</option>
                                            <option value="Students">Students</option>
                                            <option value="Water">Water</option>
                                            <option value="Wildlife">Wildlife</option>
                                            <option value="Others">Others</option>
                                        </Input>
                                	</div>
                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                    <label>Event Location</label>
                                    <input type="text" class="form-control" placeholder="Location" name="eventLocation" id="eventLocation" value={this.state.eventLocation} onChange={this.handleStringChange} required="required"></input>
                                   </div>
                               	</div>

                                <label>Full Description</label>
                            	<input type="text" placeholder="Full Description*"  id="eventFullDescription" name="eventFullDescription" value={this.state.eventFullDescription} onChange={this.handleStringChange} class="form-control"/>
                            	
                               
                            	
                                
                                <input type="submit" id="AddEvent" onClick={this.AddEvent} class="btn btn-primary" value="Submit Event"/>
                                <div class="spacer-10"></div>
                            </form>
                            <p class="small short">All fields are mandatory</p>
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

export default AddEvent;
