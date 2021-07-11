import React from'react';
import'../Form.css';
import { Input } from'reactstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import { Component,state, handleStringChange, submitRegister } from "react";
import axios from'axios';

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure(); 

class Register extends Component{

    constructor(props) {
        super(props)
        this.state = {
            userFirstName:"",
            userLastName:"",
            userContactNumber:"",
            userEmailAddress : "",
            userPassword : "",
            userConfirmPassword:""
        }
    }
    
    handleStringChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmitLogin = (e)=>{
        
        e.preventDefault();
        axios.post("http://localhost:9000/user/register", {
            userFirstName:this.state.userFirstName,
            userLastName: this.state.userLastName,
            userContactNumber:this.state.userContactNumber,
            userEmailAddress:this.state.userEmailAddress,
            userPassword: this.state.userPassword
        })
        .then((response)=>{
            if(validateForm()==null){
                console.log(response);
                toast(this.state.userFirstName + " " +  this.state.userLastName + " Registered Successfully")
                this.props.history.push('/login');
                console.log('User Registered Successfully')
            }
        })        
        .catch((error)=>{
            if(validateForm()==null){
            toast('ERROR USER REGISTRATION')
            console.log(error.response)
            }
        })
    }


    render(){
        return(
            <div>
            <div class="form">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-8 col-md-8">
                            <div class="section-title">
                                <h2>Register Now</h2></div>
                            </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-9 col-lg-9">
                            <div class="all-form">
                                <div class="single-form first-step" >
                                    <form id="SignupForm">

                                        <div class="row">
                                            <div class="col">
                                                <p class="labelAlternative">First Name</p>
                                                <input type="text" name="userFirstName" value={this.state.userFirstName} onChange={this.handleStringChange} required/>
                                            </div>
                                            <div class="col">
                                                <p class="labelAlternative">Last Name</p>
                                                <input type="text" name="userLastName" value={this.state.userLastName} onChange={this.handleStringChange} required/>
                                            </div>
                                        </div>

                                        
                                        <div class="row">
                                            
                                                <p class="labelAlternative">Email Address</p>
                                                <input type="text" name="userEmailAddress" id="userEmailAddress" value={this.state.userEmailAddress} onChange={this.handleStringChange} required/>
                                            
                                        
                                        </div>

                                        <div class="row">
                                            
                                                <p class="labelAlternative">Contact Number</p>
                                                <input type="text" name="userContactNumber" id="userContactNumber" value={this.state.userContactNumber} onChange={this.handleStringChange} required/>
                                            
                                        
                                        </div>

                                        <div class="row">
                                            <div class="col">
                                                <p class="labelAlternative">Password</p>
                                                <input type="text" name="userPassword" id="userPassword" value={this.state.userPassword} onChange={this.handleStringChange} required/>
                                            </div>
                                            <div class="col">
                                               <p class="labelAlternative">Password</p>
                                                <input type="text" name="userConfirmPassword" id="userConfirmPassword" value={this.state.userConfirmPassword} onChange={this.handleStringChange} required/>
                                             </div>
                                        </div>

                                        <div class="row">
                                            
                                               
                                        
                                        </div>

                                        <button class="next" type="submit" onClick={this.handleSubmitLogin}>LOGIN</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


function validateForm() {

    var userFirstName = document.forms["SignupForm"]["userFirstName"].value;
    if (userFirstName == "") {
      alert("userFirstName must be filled out");
      return false;
    }

    var userLastName = document.forms["SignupForm"]["userLastName"].value;
    if (userLastName == "") {
      alert("userLastName must be filled out");
      return false;
    }
    
    var userEmailAddress = document.forms["SignupForm"]["userEmailAddress"].value;
    if (userEmailAddress == "") {
      alert("Username must be filled out");
      return false;
    }

    var userPassword = document.forms["SignupForm"]["userPassword"].value;
    if (userPassword == "") {
      alert("Password must be filled out");
      return false;
    }
   
   
    var userContactNumber = document.forms["SignupForm"]["userContactNumber"].value;
    if (userContactNumber == "") {
      alert("userContactNumber must be filled out");
      return false;
    }

    var password = document.getElementById("userPassword").value;
    var cpassword = document.getElementById("userConfirmPassword").value;
    if(password !=cpassword){
        alert("passwords do not match")
        return false;
    }
    }


export default Register;