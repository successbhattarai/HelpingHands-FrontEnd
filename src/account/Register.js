import React from'react';
import'../Form.css';
import { Input } from'reactstrap';
import'bootstrap/dist/css/bootstrap.min.css';
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
        axios.post("http://localhost:9000/user/register", {
            userFullName:this.state.userFullName,
            userContactNumber:this.state.userContactNumber,
            userEmailAddress:this.state.userEmailAddress,
            userPassword: this.state.userPassword
        })
        .then((response)=>{
            if(validateForm()==null){
                console.log(response);
                toast(this.state.userFullName + " Registered Successfully")
                this.props.history.push('/success');
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
                      <a class="btn-action" id="register1" onClick={this.handleSubmitRegister}>Register Now</a>
                  </div>
                  <div class="account">
                      <p>Already have an Account ?</p>
                      <a href="login">Login</a>
                  </div>
                 
                  <div id="modal-terms" class="modal">
                     
                      <div class="modal-content">
                          <span class="close">&times;</span>
                          <h2>Termos e serviços</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                              labore et dolore magna aliqua. Iaculis at erat pellentesque adipiscing commodo. Adipiscing
                              at in tellus integer feugiat scelerisque. Duis at consectetur lorem donec massa. Lacus vel
                              facilisis volutpat est velit. Faucibus turpis in eu mi bibendum. Natoque penatibus et magnis
                              dis parturient. Potenti nullam ac tortor vitae purus. Odio euismod lacinia at quis risus sed
                              vulputate odio. Pulvinar mattis nunc sed blandit libero volutpat sed. Dolor sit amet
                              consectetur adipiscing elit ut aliquam purus. Nulla facilisi etiam dignissim diam quis.
                              Massa ultricies mi quis hendrerit dolor magna eget. Tincidunt praesent semper feugiat nibh
                              sed pulvinar proin gravida. At auctor urna nunc id cursus metus aliquam eleifend. Amet nisl
                              purus in mollis nunc. Ultricies mi quis hendrerit dolor magna eget est lorem. Mi proin sed
                              libero enim. Viverra accumsan in nisl nisi. Cras ornare arcu dui vivamus arcu felis bibendum
                              ut tristique.</p>
                          <p>Mus mauris vitae ultricies leo integer. Gravida dictum fusce ut placerat orci nulla
                              pellentesque dignissim enim. Tempus egestas sed sed risus pretium quam vulputate. Nec
                              tincidunt praesent semper feugiat nibh sed. Dui accumsan sit amet nulla facilisi. Enim
                              praesent elementum facilisis leo vel fringilla est ullamcorper eget. Dolor sit amet
                              consectetur adipiscing elit pellentesque. Elit duis tristique sollicitudin nibh sit.
                              Scelerisque purus semper eget duis at tellus at urna. Consequat interdum varius sit amet
                              mattis. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Ac orci phasellus
                              egestas tellus. Fames ac turpis egestas sed tempus urna et. Non enim praesent elementum
                              facilisis leo vel fringilla est. Habitant morbi tristique senectus et. Hendrerit dolor magna
                              eget est lorem ipsum dolor sit. Nulla porttitor massa id neque aliquam vestibulum morbi
                              blandit cursus.</p>
                          <p>Sed odio morbi quis commodo. Purus semper eget duis at tellus at. Et netus et malesuada fames
                              ac. Dictum sit amet justo donec enim diam vulputate ut pharetra. Pellentesque pulvinar
                              pellentesque habitant morbi tristique. Platea dictumst quisque sagittis purus sit amet
                              volutpat. Nulla facilisi morbi tempus iaculis urna. Nunc sed blandit libero volutpat sed
                              cras. Magna sit amet purus gravida quis. Vel fringilla est ullamcorper eget nulla.</p>
                          <p>Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Praesent tristique
                              magna sit amet purus gravida. In cursus turpis massa tincidunt dui ut ornare lectus.
                              Tristique risus nec feugiat in fermentum posuere urna nec. Non blandit massa enim nec dui
                              nunc mattis. Volutpat blandit aliquam etiam erat velit. In ante metus dictum at. Pretium
                              vulputate sapien nec sagittis aliquam malesuada bibendum. Scelerisque mauris pellentesque
                              pulvinar pellentesque habitant morbi tristique senectus et. Ipsum suspendisse ultrices
                              gravida dictum fusce ut placerat orci nulla.</p>
                          <p>Non consectetur a erat nam. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Nec dui
                              nunc mattis enim ut tellus elementum sagittis. Pellentesque nec nam aliquam sem et tortor
                              consequat id porta. Mauris commodo quis imperdiet massa tincidunt. Nullam vehicula ipsum a
                              arcu cursus vitae congue mauris. In fermentum et sollicitudin ac. Fermentum dui faucibus in
                              ornare quam viverra orci sagittis eu. Ac turpis egestas sed tempus urna et pharetra pharetra
                              massa. Sit amet justo donec enim. Aliquam purus sit amet luctus venenatis lectus magna
                              fringilla. Non quam lacus suspendisse faucibus interdum.</p>
                      </div>
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