import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Header from '../components/Header';
import FeatureLinks from '../components/FeatureLinks';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

toast.configure();

class BlogGallery extends Component{

        state={
        blogs:[],
        config:{
            Headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }


    componentDidMount(){
        axios.get("http://localhost:9000/blog/display",this.state.config)
        .then((response)=>{
            this.setState({
                blogs: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING STANDINGS')
            console.log(error.response)
        })
    }


render(){

    return(
        <ul class="blog-items isotope gallery-items" data-sort-id="gallery">
            {
            this.state.blogs.map((blog)=>{
            return(
            <li class="col-md-6 col-sm-6 col-xs-6 grid-item gallery-grid-item blogs format-image">
                <a href={'http://localhost:9000/images/blog/' + blog.blogImage} class="media-box magnific-image"> <img src={'http://localhost:9000/images/blog/' + blog.blogImage} alt="" /> </a>
                <div class="grid-item-content">
                    <p>{blog.blogTitle}</p>
                </div>
            </li>
            )})}
        </ul>
    )
}

}

export default BlogGallery;
