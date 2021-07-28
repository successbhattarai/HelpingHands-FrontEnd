import React, { Component } from 'react';
import axios from 'axios';
import { Input } from'reactstrap';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import decode from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class AddBlog extends Component{


    
    state = {
        blogImage :'',
        blogTitle :'',
        blogDescription :'',
        blogTags :'',
        blogPostedBy: '',
        blogDetail :'',
    }
    
    handleStringChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleImageChange = (e)=>{
        this.setState({
            blogImage: e.target.files[0]
        })
    };
    
    AddBlog = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        const token = localStorage.getItem("token");
        const decodeToken = decode(token); 
        const userId = decodeToken.userId;
        formData.append('blogImage', this.state.blogImage);
        formData.append('blogTitle', this.state.blogTitle);
        formData.append('blogDescription', this.state.blogDescription);
        formData.append('blogTags', this.state.blogTags);
        formData.append('blogPostedBy', userId);
        formData.append('blogDetail', this.state.blogDetail);

        axios.post("http://localhost:9000/blog/insert", formData, {

            headers: {
                Accept:'application/json',
               'Content-Type':'multipart/form-data'
            }  
         })
        .then((response)=>{
            console.log(response);
            toast(this.state.blogTitle + " " + " Added Successfully")
            this.props.history.push('/blog');
            console.log('Blog Added Successfully')
            
        })        
        .catch((error)=>{
            toast('ERROR ADDING BLOG')
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
        			<h1 class="block-title">Add a Blog</h1>
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
                                <label>Image</label>
                            	<input type="file" name="blogImage" id="blogImage" onChange={this.handleImageChange} class="form-control"/>

                            	<label>Blog Title</label>
                            	<input type="text" placeholder="Title*" id="blogTitle" name="blogTitle" value={this.state.blogTitle} onChange={this.handleStringChange} class="form-control"/>

                                <label>Description</label>
                            	<input type="email" placeholder="Description*" id="blogDescription" name="blogDescription" value={this.state.blogDescription} onChange={this.handleStringChange} class="form-control"/>
                                

                                <label>Blog Detail</label>
                            	<input type="text" placeholder="Details*"  id="blogDetail" name="blogDetail" value={this.state.blogDetail} onChange={this.handleStringChange} class="form-control"/>
                            	
                                <label>Tags</label>
                                <Input type="select" name="blogTags" id="blogTags" value={this.state.blogTags} onChange={this.handleStringChange} required="required">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </Input>
                            	
                                
                                <input type="submit" id="AddBlog" onClick={this.AddBlog} class="btn btn-primary" value="Submit"/>
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

export default AddBlog;
