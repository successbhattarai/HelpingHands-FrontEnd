import React, { Component } from 'react';
import axios from 'axios';
import { Input } from'reactstrap';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import EducationalPost from '../campaigns/EducationalPost';

toast.configure();

class Campaign extends Component{
    
 
    state={
        campaigns:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("http://localhost:9000/campaign/display",this.state.config)
        .then((response)=>{
            this.setState({
                campaigns: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING STANDINGS')
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
                        <h1 class="block-title">Our Causes</h1>
                    </div>
                </div>
            </div>
        </div>
        <div id="main-container">
            <div class="content">
                <div class="container">
                    <div class="grid-filter">
                        <ul class="nav nav-pills sort-source" data-sort-id="gallery" data-option-key="filter">
                            <li data-option-value="*" class="active"><a href="#"><i class="fa fa-th"></i> <span>Show All</span></a></li>
                            <li data-option-value=".education"><a href="#"><span>Education</span></a></li>
                            <li data-option-value=".wild-life"><a href="#"><span>Wild Life</span></a></li>
                            <li data-option-value=".environment"><a href="#"><span>Environment</span></a></li>
                            <li data-option-value=".water"><a href="#"><span>Water</span></a></li>
                            <li data-option-value=".human-rights"><a href="#"><span>Human Rights</span></a></li>
                            <li data-option-value=".small-business"><a href="#"><span>Small Business</span></a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <ul class="sort-destination isotope gallery-items" data-sort-id="gallery">
                            <EducationalPost></EducationalPost>
                        </ul>
                    </div>
                    
                    <nav>
                        <ul class="pagination pagination-lg">
                            <li>
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li>
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        


 
    <Footer></Footer>
</div>
)
}

}

export default Campaign;
