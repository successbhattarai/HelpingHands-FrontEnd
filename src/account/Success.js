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

class Success extends Component{


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

    handleSubmitSuccess = (e)=>{
        
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
    <Header></Header>
    <img class="wave" src="img/wave.svg"/>
    <div class="logincontainer">
        <div class="img">
            <img src="img/computer_display.svg"/>
        </div>
        <div class="confirm-container">
            <div class="content" style={{height:"250px !important"}}>
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


export default Success;