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

class RegisterError extends Component{


render(){

return(
<div>
    <Header></Header>
    <img class="wave" src="img/wave.svg"/>
    <div class="logincontainer">
        <div class="img">
            <img src="img/sad_face.svg"/>
        </div>
        <div class="confirm-container">
            <div class="ccontent">
                <h2>Unable to Register</h2>
                <i class="fa fa-exclamation-circle"></i>
                <div class="btn-container">
                    <a href="register" class="btn-action">Try Again</a>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

}



export default RegisterError;