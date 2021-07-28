import React, { Component } from 'react';
import axios from 'axios';
import { Input } from'reactstrap';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class Volunteer extends Component{


    
    state = {
        volunteerImage :'',
        volunteerFullName :'',
        volunteerEmailAddress :'',
        volunteerDateOfBirth :'',
        volunteerGender :'',
        volunteerContactNumber :'',
		volunteerAddress: '',
        volunteerPostalCode:'',
		volunteerNationality: '',
    }
    
    handleStringChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleImageChange = (e)=>{
        this.setState({
            volunteerImage: e.target.files[0]
        })
    };
    
    BecomeVolunteer = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('volunteerImage', this.state.volunteerImage);
        formData.append('volunteerFullName', this.state.volunteerFullName);
        formData.append('volunteerDateOfBirth', this.state.volunteerDateOfBirth);
        formData.append('volunteerEmailAddress', this.state.volunteerEmailAddress);
        formData.append('volunteerGender', this.state.volunteerGender);
        formData.append('volunteerContactNumber', this.state.volunteerContactNumber);
        formData.append('volunteerAddress', this.state.volunteerAddress);
        formData.append('volunteerPostalCode', this.state.volunteerPostalCode);
        formData.append('volunteerNationality', this.state.volunteerNationality);

        axios.post("https://helpinghand-backend.herokuapp.com/volunteer/register", formData, {

            headers: {
                Accept:'application/json',
               'Content-Type':'multipart/form-data'
            }  
         })
        .then((response)=>{
            console.log(response);
            toast(this.state.volunteerFullName + " " + " Registered Successfully")
            this.props.history.push('/');
            console.log('Volunteer Added Successfully')
            
        })        
        .catch((error)=>{
            toast('ERROR VOLUNTEER REGISTRATION')
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
        			<h1 class="block-title">Become a Volunteer</h1>
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
                            <form>
                                <label>Profile Picture</label>
                            	<input type="file" name="volunteerImage" id="volunteerImage" onChange={this.handleImageChange} class="form-control"/>

                            	<label>Full Name</label>
                            	<input type="text" placeholder="Full Name*" id="volunteerFullName" name="volunteerFullName" value={this.state.volunteerFullName} onChange={this.handleStringChange} class="form-control"/>

                                <label>Email</label>
                            	<input type="email" placeholder="Email Address*" id="volunteerEmailAddress" name="volunteerEmailAddress" value={this.state.volunteerEmailAddress} onChange={this.handleStringChange} class="form-control"/>
                                
                                <div class="row">
                                	<div class="col-md-6 col-sm-6 col-xs-6">
                                       <label>Date of Birth</label>
                                       <input type="date"  id="volunteerDateOfBirth" name="volunteerDateOfBirth" value={this.state.volunteerDateOfBirth} onChange={this.handleStringChange} class="form-control"/>
                                	</div>
                                	<div class="col-md-6 col-sm-6 col-xs-6">
                            			<label>Gender</label>
                                        <Input type="select" name="volunteerGender" id="volunteerGender" value={this.state.volunteerGender} onChange={this.handleStringChange} required="required">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </Input>
                                	</div>
                               	</div>
                                
                                <label>Contact Number</label>
                            	<input type="text" placeholder="Contact Number*"  id="volunteerContactNumber" name="volunteerContactNumber" value={this.state.volunteerContactNumber} onChange={this.handleStringChange} class="form-control"/>
                            	
                            	<label>Address</label>
                            	<input type="text" placeholder="Address*" id="volunteerAddress" name="volunteerAddress" value={this.state.volunteerAddress} onChange={this.handleStringChange} class="form-control"/>

                                <div class="row">
                                	<div class="col-md-6 col-sm-6 col-xs-6">
                            			<label>Postal Code</label>
                            			<input type="text" placeholder="Postal Code*"  id="volunteerPostalCode" name="volunteerPostalCode" value={this.state.volunteerPostalCode} onChange={this.handleStringChange} class="form-control"/>
                                	</div>
                                	<div class="col-md-6 col-sm-6 col-xs-6">
                            			<label>Country</label>
                                        <Input type="select" name="volunteerNationality" id="volunteerNationality" value={this.state.volunteerNationality} onChange={this.handleStringChange} required="required">
                                            <option value="Nepal">Nepal</option>
                                            <option value="India">India</option>
                                            <option value="China">China</option>
                                        </Input>
                                	</div>
                               	</div>
                                
                                <input type="submit" id="BecomeVolunteer" onClick={this.BecomeVolunteer} class="btn btn-primary" value="Submit"/>
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

export default Volunteer;
