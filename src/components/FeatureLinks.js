import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class FeatureLinks extends Component{

render(){

return(
    <div class="featured-links row">
    <a href="causes.html" class="featured-link col-md-4 col-sm-4">
        <span>View our causes</span>
        <strong>Donate now</strong>
    </a>
    <a href="careers.html" class="featured-link col-md-4 col-sm-4">
        <span>Become a volunteer</span>
        <strong>Join us now</strong>
    </a>
    <a href="events.html" class="featured-link col-md-4 col-sm-4">
        <span>View our events</span>
        <strong>Get involved</strong>
    </a>
</div>
)
}

}

export default FeatureLinks;
