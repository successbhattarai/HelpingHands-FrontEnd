import React from'react';
import'../Account.css';
import { Input } from'reactstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import { Component,state, handleStringChange, submitRegister } from "react";
import axios from'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure(); 

class ForgotPassword extends Component{

render(){

return(
<div>
    <Header></Header>

    <img class="wave" src="img/wave.svg"/>
    <div class="logincontainer">
        <div class="img">
            <img src="img/personalization.svg"/>
        </div>
        <div class="login-container">
            <form class="ccontent">
                <h2>Retrieve Account</h2>
                <p>Enter your email in the field below</p>
                <div class="input-div one">
                    <div class="i">
                        <i class="fa fa-envelope"></i>
                    </div>
                    <div>
                        <h5>E-mail</h5>
                        <input class="input" type="email"/>
                    </div>
                </div>
                <input type="submit" class="btn" value="Submit"/>
                <div class="account">
                    <p>Remembered the password?</p>
                    <a href="Login">Login</a>
                </div>
            </form>
        </div>
    </div>
</div>

)
}

}


export default ForgotPassword;