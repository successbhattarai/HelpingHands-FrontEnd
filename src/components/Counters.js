import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from './Header';
import FeatureLinks from './FeatureLinks';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './Slider';
import Footer from './Footer';

toast.configure();

class Counters extends Component{

    state={
        volunteers:[],
        volunteersTotal:'',
        campaigns:[],
        campaignsTotal:'',
        users:[],
        usersTotal:'',
        donations:[],
        totalDonations:'',

        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }

    componentDidMount(){
        axios.get("https://helpinghand-backend.herokuapp.com/volunteer/display",this.state.config)
        .then((response)=>{
            this.setState({
                volunteers: response.data,
                volunteersTotal : response.data.length
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING VOLUNTEER')
            console.log(error.response)
        })

        axios.get("https://helpinghand-backend.herokuapp.com/campaign/display",this.state.config)
        .then((response)=>{
            this.setState({
                campaigns: response.data,
                campaignsTotal : response.data.length
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING VOLUNTEER')
            console.log(error.response)
        })

        axios.get("https://helpinghand-backend.herokuapp.com/user/display",this.state.config)
        .then((response)=>{
            this.setState({
                users: response.data,
                usersTotal : response.data.length
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING VOLUNTEER')
            console.log(error.response)
        })

        
        axios.get("https://helpinghand-backend.herokuapp.com/donation/display",this.state.config)
        .then((response)=>{
            this.setState({
                donations: response.data,
                totalDonations : response.data.length
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING DONATION')
            console.log(error.response)
        })
    }


render(){
    return(
        <div class="padding-tb45 parallax parallax-light parallax1 counters">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="fact-ico"> <i class="fa fa-user fa-4x"></i> </div>
                        <div class="timer" data-perc="9000"> <span class="count">{this.state.totalDonations}</span> </div>
                        <span class="fact">No. of Donations</span>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="fact-ico"> <i class="fa fa-heart-o fa-4x"></i> </div>
                        <div class="timer" data-perc="96"> <span class="count">{this.state.campaignsTotal}</span> </div>
                        <span class="fact">Causes</span>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="fact-ico"> <i class="fa fa-bar-chart-o fa-4x"></i> </div>
                        <div class="timer" data-perc="1500"><span class="count">{this.state.usersTotal}</span></div>
                        <span class="fact">Total members</span>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                        <div class="fact-ico"> <i class="fa fa-hand-peace-o fa-4x"></i> </div>
                        <div class="timer" data-perc="1500"> <span class="count">{this.state.volunteersTotal}</span> </div>
                        <span class="fact">Volunteers</span>
                    </div>
                </div>
            </div>
        </div>
)

}

}

export default Counters;
