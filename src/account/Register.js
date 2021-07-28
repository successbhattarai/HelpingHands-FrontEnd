import React from'react';
import'../Form.css';
import { Input } from'reactstrap';
import { Component,state, handleStringChange, submitRegister } from "react";
import axios from'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure(); 

class Register extends Component{

   
    constructor(props) {
        super(props)
        this.state = {
            userFullName:"",
            
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
  
    handleSubmitRegister = (e)=>{
        
        e.preventDefault();
        axios.post("https://helpinghand-backend.herokuapp.com/user/register", {
            userFullName:this.state.userFullName,
            userContactNumber:this.state.userContactNumber,
            userEmailAddress:this.state.userEmailAddress,
            userPassword: this.state.userPassword
        })
        .then((response)=>{
            if(validateForm()==null){
                console.log(response);
                toast(this.state.userFullName + " Registered Successfully")
                this.props.history.push('/register-success');
                console.log('User Registered Successfully')
            }
        })        
        .catch((error)=>{
            if(validateForm()==null){
            toast('ERROR USER REGISTRATION')
            this.props.history.push('/register-error');
            console.log(error.response)
            }
        })
    }
  
  
  render(){
  
  return(
  <div>
  <Header></Header>
  <img class="wave" src="img/wave.svg"/>
      <div class="logincontainer">
          <div class="img">
              <img src="img/login-mobile.svg"/>
          </div>
          <div class="login-container"> 
              <form id="SignupForm" class="divform">
                  <h2>Register</h2>
                  <p>Register Now:</p>
                
                  <div class="input-div one">
                      <div class="i">
                          <i class="fa fa-user"></i>
                      </div>
                      <div>
                          <input class="input" placeholder="Full Name" type="text" name="userFullName" id="userFullName" value={this.state.userFullName} onChange={this.handleStringChange}/>
                      </div>
                  </div>
                  <div class="input-div two">
                      <div class="i">
                          <i class="fa fa-envelope"></i>
                      </div>
                      <div>
                          <input class="input" placeholder="E-mail" type="email" name="userEmailAddress" id="userEmailAddress" value={this.state.userEmailAddress} onChange={this.handleStringChange}/>
                      </div>
                  </div>
                  <div class="input-div one">
                      <div class="i">
                          <i class="fa fa-phone"></i>
                      </div>
                      <div>
                          <input class="input" placeholder="Contact Number" type="text" name="userContactNumber" id="userContactNumber" value={this.state.userContactNumber} onChange={this.handleStringChange}/>
                      </div>
                  </div>
                  
                 
                  <div class="input-div one">
                      <div class="i">
                          <i class="fa fa-key"></i>
                      </div>
                      <div>
                          <input class="input" placeholder="Password" type="password" name="userPassword" id="userPassword" value={this.state.userPassword} onChange={this.handleStringChange}/>
                      </div>
                  </div>
                  <div class="input-div two">
                      <div class="i">
                          <i class="fa fa-key"></i>
                      </div>
                      <div>
                          <input class="input" placeholder="Confirm Password" type="password" name="userConfirmPassword" id="userConfirmPassword" value={this.state.userConfirmPassword} onChange={this.handleStringChange}/>
                      </div>
                  </div>
                  <div class="terms">
                      <input type="checkbox"/>
                      <label>I read and agree with the </label><a id="action-modal">terms of use.</a>
                  </div>
                  <div class="btn-container">
                      <a class="btn-action" onClick={this.handleSubmitRegister}>Register Now</a>
                  </div>
                  <div class="account">
                      <p>Already have an Account ?</p>
                      <a href="login">Login</a>
                  </div>
                </form>
          </div>
      </div>
  </div>
  )
  }
  
  }
  
  function validateForm() {
  
     var userFullName = document.forms["SignupForm"]["userFullName"].value;
     if (userFullName == "") {
       alert("FullName must be filled out");
       return false;
     }
     
     var userEmailAddress = document.forms["SignupForm"]["userEmailAddress"].value;
     if (userEmailAddress == "") {
       alert("Email Address must be filled out");
       return false;
     }
  
     var userPassword = document.forms["SignupForm"]["userPassword"].value;
     if (userPassword == "") {
       alert("Password must be filled out");
       return false;
     }
    
    
     var userContactNumber = document.forms["SignupForm"]["userContactNumber"].value;
     if (userContactNumber == "") {
       alert("Contact Number must be filled out");
       return false;
     }
  
     var password = document.getElementById("userPassword").value;
     var cpassword = document.getElementById("userConfirmPassword").value;
     if(password !=cpassword){
         alert("Passwords do not match")
         return false;
     }
     }
  

export default Register;