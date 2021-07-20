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

class RegisterSuccess extends Component{

render(){

return(
<div>
    <Header></Header>
    <img class="wave" src="img/wave.svg"/>
    <div class="logincontainer">
        <div class="img">
            <img src="img/computer_display.svg"/>
        </div>
        <div class="confirm-container">
            <div class="ccontent" style={{height:"250px !important"}}>
                <h2>Registration successful !</h2>
                <i class="fa fa-check-circle"></i>
                <div class="btn-container">
                    <a href="login" class="btn-action">LOGIN NOW</a>
                </div>
            </div>
        </div>
    </div>
    </div>

)
}

}

export default RegisterSuccess;