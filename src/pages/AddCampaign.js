import React, { Component } from 'react';
import axios from 'axios';
import { Input } from'reactstrap';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class AddCampaign extends Component{
    
    state = {
        campaignImage :'',
        campaignName :'',
        campaignShortDescription :'',
        campaignGoal :'',
        campaignDays :'',
        campaignCategories :'',
        campaignTags :'',
        campaignFullDescription :''
    }
    
    handleStringChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleImageChange = (e)=>{
        this.setState({
            campaignImage: e.target.files[0]
        })
    };
    
    AddCampaign = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('campaignImage', this.state.campaignImage);
        formData.append('campaignName', this.state.campaignName);
        formData.append('campaignShortDescription', this.state.campaignShortDescription);
        formData.append('campaignGoal', this.state.campaignGoal);
        formData.append('campaignDays', this.state.campaignDays);
        formData.append('campaignCategories', this.state.campaignCategories);
        formData.append('campaignTags', this.state.campaignTags);
        formData.append('campaignFullDescription', this.state.campaignFullDescription);


       

        axios.post("http://localhost:9000/campaign/insert", formData, {

            headers: {
                Accept:'application/json',
               'Content-Type':'multipart/form-data'
            }  
         })
        .then((response)=>{
            console.log(response);
            toast(this.state.campaignName + " " + " Added Successfully")
            this.props.history.push('/campaign');
            console.log('Campaign Added Successfully')
            
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
                        <h1 class="block-title">Create campaign</h1>
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
                            <h3>Campaign Details</h3>
                            <form>
                                <label>Featured Image</label>
                            	<input type="file" name="campaignImage" id="campaignImage" onChange={this.handleImageChange} class="form-control"/>

                            	<label>Campaign Name</label>
                            	<input type="text" placeholder="Title*" id="campaignName" name="campaignName" value={this.state.campaignName} onChange={this.handleStringChange} class="form-control"/>

                                <label>Short Description</label>
                            	<input type="text" placeholder="Short Description*" id="campaignShortDescription" name="campaignShortDescription" value={this.state.campaignShortDescription} onChange={this.handleStringChange} class="form-control"/>
                                

                                <label>Fundraising Goal ($)</label>
                            	<input type="text" placeholder="Fundraising Goal ($)*"  id="campaignGoal" name="campaignGoal" value={this.state.campaignGoal} onChange={this.handleStringChange} class="form-control"/>
                            	
                                <label>Length in Days</label>
                            	<input type="number" placeholder="Length in Days*"  id="campaignDays" name="campaignDays" value={this.state.campaignDays} onChange={this.handleStringChange} class="form-control"/>
                            	
                                <div class="row">
                                	
                                	<div class="col-md-6 col-sm-6 col-xs-6">
                            			<label>Categories</label>
                                        <Input type="select" name="campaignCategories" id="campaignCategories" value={this.state.campaignCategories} onChange={this.handleStringChange} required="required">
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
                                    <label>Tags</label>
                                    <Input type="select" name="campaignTags" id="campaignTags" value={this.state.campaignTags} onChange={this.handleStringChange} required="required">
                                        <option value="Business">Business</option>
                                        <option value="Education">Education</option>
                                        <option value="Environment">Environment</option>
                                        <option value="Help">Help</option>
                                        <option value="Water">Water</option>
                                        <option value="Wild">Wild</option>
                                        <option value="Wild">Oyhers</option>
                                    </Input>
                                   </div>
                               	</div>

                                <label>Full Description</label>
                            	<input type="text" placeholder="Full Description*"  id="campaignFullDescription" name="campaignFullDescription" value={this.state.campaignFullDescription} onChange={this.handleStringChange} class="form-control"/>
                            	
                               
                            	
                                
                                <input type="submit" id="AddCampaign" onClick={this.AddCampaign} class="btn btn-primary" value="Submit Campaign"/>
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

export default AddCampaign;
