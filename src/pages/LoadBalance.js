import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import FeatureLinks from '../components/FeatureLinks';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class LoadBalance extends Component{


    state = {
        userBalance:'',
        userNewBalance:'',
        id : this.props.match.params.id,
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    
    handleStringChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
  
    componentDidMount(){
        const token = localStorage.getItem("token");
        const decodeToken = decode(token); 
        const userId = decodeToken.userId;
        axios.get("http://localhost:9000/my-account/display/" + userId)
        .then((response)=>{
            this.setState({
                userBalance: response.data.userBalance
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING MY ACCOUNT')
            console.log(error.response)
        })
    }

    HandleLoadBalance = (e)=>{
        e.preventDefault();
        axios.put("http://localhost:9000/user/load-balance", this.state)
        .then((response)=>{
            console.log(response);
            toast('BALNCE LOADED : ' + this.state.userNewBalance)
            this.props.history.push('/');
        })        
        .catch((error)=>{
            toast('ERROR LOADING BALANCE')
            console.log(error.response)
        })
    }

render(){

    return(
        <div>
            <Header></Header>

            <div class="hero-area">
    	<div class="page-banner parallax">
        	<div class="container">
            	<div class="page-banner-text">
        			<h1 class="block-title">Load Balance</h1>
                </div>
            </div>
        </div>
    </div>

            <div id="main-container">
    	<div class="content">
            <div class="container" id="openings">
            	<div class="row">
                <div class="col-md-12 col-sm-12">
                    	<div class="well widget widget_volunteer_form">
                            <form>
                            	<label>Current Balance : {this.state.userBalance}</label>
                                <div class="spacer-10"></div>
                                <label>Load Balance</label>
                            	<input type="number" placeholder="Load Amount*" id="userNewBalance" name="userNewBalance" value={this.state.userNewBalance} onChange={this.handleStringChange} class="form-control"/>
                                <div class="spacer-10"></div>
                                <input type="submit" id="HandleLoadBalance" onClick={this.HandleLoadBalance} class="btn btn-primary" value="Load Balance"/>
                                <div class="spacer-10"></div>
                            </form>
                            <p class="small short">All fields are mandatory</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   


            <Footer></Footer>
        </div>
        )
}

}

export default LoadBalance;
