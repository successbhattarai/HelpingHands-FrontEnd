import React from'react';
import'../Form.css';
import { Input } from'reactstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import { Component,state, handleStringChange, submitRegister } from "react";
import axios from'axios';

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure(); 

class Login extends Component{

    constructor(props) {
        super(props)
        this.state = {
            userEmailAddress : "",
            userPassword : ""
        }
    }
    
    handleStringChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmitLogin = (e)=>{
        
        e.preventDefault();
        axios.post("http://localhost:9000/user/login", {
            userEmailAddress:this.state.userEmailAddress,
            userPassword: this.state.userPassword
        })
        .then((response)=>{
            if(validateForm()==null){
            console.log(response);
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('userEmailAddress',response.data.userEmailAddress);
            toast('Welcome ' + this.state.userEmailAddress)

            this.props.history.push('/');
            }
        })        
        .catch((error)=>{
            if(validateForm()==null){
            toast('ERROR USER LOGIN')
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
                                <h2>Login Now</h2></div>
                            </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-9 col-lg-9">
                            <div class="all-form">
                                <div class="single-form first-step" >
                                    <form id="LoginForm">
                                        <div class="row">
                                            
                                                <p class="labelAlternative">Email Address</p>
                                                <input type="text" name="userEmailAddress" id="userEmailAddress" value={this.state.userEmailAddress} onChange={this.handleStringChange} required/>
                                            
                                        
                                        </div>

                                        <div class="row">
                                            
                                                <p class="labelAlternative">Password</p>
                                                <input type="text" name="userPassword" id="userPassword" value={this.state.userPassword} onChange={this.handleStringChange} required/>
                                            
                                        
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
    
    var userEmailAddress = document.forms["LoginForm"]["userEmailAddress"].value;
    if (userEmailAddress == "") {
      alert("Username must be filled out");
      return false;
    }

    var userPassword = document.forms["LoginForm"]["userPassword"].value;
    if (userPassword == "") {
      alert("Password must be filled out");
      return false;
    }
    
}


export default Login;