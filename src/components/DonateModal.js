import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class DonateModal extends Component{

        state = {
            userFullName:"",
            userFullName:"",
            userEmailAddress:"",
            userContactNumber:"",
            donorFullName:"",
            donorEmailAddress:"",
            donorContactNumber:"",
            donorAddress1:"",
            donorAddress2:"",
            donorCity:"",
            donorPostalCode:"",
            donorDonated:""
        }

    componentWillMount() {
        this.retriveUserData();
      }
    handleStringChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    retriveUserData=()=>{
        const token = localStorage.getItem("token");
        const decodeToken = decode(token); 
        // const userId = "60f6359098e94e56a82e4c51";
        const userId = decodeToken.userId;
        axios.get('http://localhost:9000/account/'+ userId)
        .then((response)=>{
            this.setState({
                userFullName : response.data.userFullName,
                userFullName : response.data.userFullName,
                userEmailAddress : response.data.userEmailAddress,
                userContactNumber : response.data.userContactNumber
            })
        })
    }
      
    handleDonation = (e)=>{
        
        e.preventDefault();
        axios.post("http://localhost:9000/donate", {
            donorFullName:this.state.userFullName,
            donorEmailAddress : this.state.userEmailAddress,
            donorContactNumber : this.state.userContactNumber,
            donorAddress1 : this.state.donorAddress1,
            donorAddress2 : this.state.donorAddress2,
            donorCity : this.state.donorCity,
            donorPostalCode : this.state.donorPostalCode,
            donorDonated : this.state.donorDonated
        })
        .then((response)=>{
                console.log(response);
                toast("NRP "+ this.state.donorDonated + " Donated Successfully")
                this.props.history.push('/');
                console.log('Donated Successfully')
            
        })        
        .catch((error)=>{
            toast('ERROR DONATING')
            console.log(error.response)
        })
    }
    handleFileChange=(e)=>{
        this.setState({
            profile : e.target.files[0]
        })
    }
    
render(){

return(
    
    <div class="modal fade row" id="DonateModal" tabindex="-1" role="dialog" data-backdrop="static" style={{paddingRight: "16px"}}>
  	<div class="modal-dialog col-md-12 col-sm-12 col-lg-12" role="document">
    	<div class="modal-content">
      		<div class="modal-header">
              <legend>Campaign Name : </legend>

        		<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-close " style={{color:"white"}}></i></span></button>
        	</div>
      		<div class="modal-body">
                  
       			<div class="row">
                	<div class="col-md-6 col-sm-6 donation-form-infocol">
                    	<h4>Address</h4>
                        <input type="text" class="form-control" name="donorAddress1" id="donorAddress1" value={this.state.donorAddress1} onChange={this.handleStringChange}  placeholder="Address line 1"/>
                        <input type="text" class="form-control" name="donorAddress2" id="donorAddress2" value={this.state.donorAddress2} onChange={this.handleStringChange}  placeholder="Address line 2"/>
       					<div class="row">
                			<div class="col-md-8 col-sm-8 col-xs-8">
                        		<input type="text" class="form-control" name="donorCity" id="donorCity" value={this.state.donorCity} onChange={this.handleStringChange}  placeholder="State/City"/>
                            </div>
                			<div class="col-md-4 col-sm-4 col-xs-4">
                        		<input type="text" class="form-control" name="donorPostalCode" id="donorPostalCode" value={this.state.donorPostalCode} onChange={this.handleStringChange}  placeholder="Zipcode"/>
                            </div>
                    	</div>
                    </div>
                	<div class="col-md-6 col-sm-6 donation-form-infocol">
                    	<h4>Personal info</h4>
                        <input type="text" class="form-control" name="userFullName" id="userFullName" value={this.state.userFullName} onChange={this.handleStringChange}  placeholder="Last name"/>
                        
                        <input type="text" class="form-control" name="userEmailAddress" id="userEmailAddress" value={this.state.userEmailAddress} onChange={this.handleStringChange} placeholder="Email address"/>
                        <input type="text" class="form-control" name="userContactNumber" id="userContactNumber" value={this.state.userContactNumber} onChange={this.handleStringChange}  placeholder="Phone no."/>
                    </div>
                 </div>
      		
              </div>
              <div>
              <div class="row">
                    <div class="col-md-6 col-sm-6 donate-amount-option">
                        <h4>Choose an amount</h4>
                        <ul class="predefined-amount">
                            <li><label><input type="radio" name="donation-amount"/>NPR 10</label></li>
                            <li><label><input type="radio" name="donation-amount"/>NPR 20</label></li>
                            <li><label><input type="radio" name="donation-amount"/>NPR 30</label></li>
                            <li><label><input type="radio" name="donation-amount"/>NPR 50</label></li>
                            <li><label><input type="radio" name="donation-amount"/>NPR 100</label></li>
                        </ul>
                    </div>
                    <span class="donation-choice-breaker">Or</span>
                    <div class="col-md-6 col-sm-6 donate-amount-option">
                        <h4>Enter your own</h4>
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">NPR </span>
                            <input type="number"  name="donorDonated" id="donorDonated" value={this.state.donorDonated} onChange={this.handleStringChange}  class="form-control"/>
                        </div>
                    </div>
               	</div>
                   </div>
      		<div class="modal-footer text-align-center">
        		<button type="button" class="btn btn-primary" style={{width:"100%"}} onClick={this.handleDonation}>Make your donation now</button>
                <div class="spacer-20"></div>
                <p class="small">You are the special type of person that changes lives, lifts people up, and makes the world a better place. Thank you for your donation and your association with our cause.</p>
      		</div>
    	</div>
      </div>
</div>
)
}

}

export default DonateModal;
