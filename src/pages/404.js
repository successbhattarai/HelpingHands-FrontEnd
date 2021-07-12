import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import FeatureLinks from '../components/FeatureLinks';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Error extends Component{

render(){

return(
<main class="main page-wrapper" style={{position: "relative",msFlex:"1 0 auto",flex: "1 0 auto"}}><img class="img--bg" src="images/404.jpg" alt="img" />
    <section class="section error">
        <div class="container" style={{width: "100%",paddingRight: "15px",paddingLeft: "15px", marginRight: "auto",marginLeft: "auto"}}>
            <div class="row">
                <div class="col-lg-8 col-xl-6">
                    <div class="align-container " style={{display: "table-cell",verticalAlign: "middle"}}>
                        <div class="align-container__item">
                            <h1 class="error__title">404</h1>
                            <h3 class="error__subtitle">Page not found</h3>
                            <p class="error__text">We are Sorry but the Page You are Looking for does not exist.
                                You Could Return to the Homepage using the button below.</p><a class="cbutton button--primary" href="/">Home Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
)
}

}

export default Error;
