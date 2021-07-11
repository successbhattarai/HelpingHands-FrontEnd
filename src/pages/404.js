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
    <main class="main" style={{position: "relative",msFlex:"1 0 auto",flex: "1 0 auto"}}><img class="img--bg" src="images/404.jpg" alt="img"/>
				<section class="section error">
					<div class="container">
						<div class="row">
							<div class="col-lg-8 col-xl-6">
								<div class="align-container">
									<div class="align-container__item">
										<h1 class="error__title">404</h1>
										<h3 class="error__subtitle">Page not found</h3>
										<p class="error__text">Gray eel-catfish longnose whiptail catfish smalleye squaretail longnose whiptail catfish smalleye squaretail Lorem, ipsum dolor.</p><a class="button button--primary" href="index.html">Home Page</a>
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
