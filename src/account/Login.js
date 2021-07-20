import React from'react';
import'../Account.css';
import { Input } from'reactstrap';
import { Component,state, handleStringChange, submitRegister } from "react";
import axios from'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
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
            this.props.history.push('/login-error');
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
            <img src="img/authentication.svg"/>
        </div>
        <div class="login-container">
            <form  id="LoginForm" class="divform">
                <h2>Login</h2>
                <p>Welcome back!</p>
                <div class="input-div one">
                    <div class="i">
                        <i class="fa fa-user"></i>
                    </div>
                    <div>
                        <input class="input" placeholder="E-mail" name="userEmailAddress" id="userEmailAddress" value={this.state.userEmailAddress} onChange={this.handleStringChange} type="text"/>
                    </div>
                </div>
                <div class="input-div two">
                    <div class="i">
                        <i class="fa fa-key"></i>
                    </div>
                    <div>
                        
                        <input class="input" placeholder="Password"  name="userPassword" id="userPassword" value={this.state.userPassword} onChange={this.handleStringChange} type="password"/>
                    </div>
                </div>
                <input type="submit" class="btn"  onClick={this.handleSubmitLogin} value="Login Now"/>
                <a class="forgot" href="forgotPassword">Forgot Your Password ?</a>
               
               
                <div class="account">
                    <p>Don't have an account yet ?</p>
                    <a href="register">Sign up</a>
                </div>
            </form>
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