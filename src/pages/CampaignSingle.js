import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class CampaignSingle extends Component{
    

    state={
        campaigns: [],
        blogs: [],
        campaignImage :'',
        campaignName :'',
        campaignShortDescription :'',
        campaignGoal :'',
        campaignDays :'',
        campaignCategories :'',
        campaignTags :'',
        campaignFullDescription :'',
        id : this.props.match.params.id
    }


    componentDidMount(){
        axios.get("https://helpinghand-backend.herokuapp.com/campaign/display/" + this.state.id)
        .then((response)=>{
            this.setState({
                campaignImage : response.data.campaignImage,
                campaignName : response.data.campaignName,
                campaignShortDescription : response.data.campaignShortDescription,
                campaignGoal : response.data.campaignGoal,
                campaignDays : response.data.campaignDays,
                campaignCategories : response.data.campaignCategories,
                campaignTags : response.data.campaignTags,
                campaignFullDescription : response.data.campaignFullDescription,
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING CAMPAIGN')
            console.log(error.response)
        })

        axios.get("https://helpinghand-backend.herokuapp.com/campaign/latest/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                campaigns: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING CAMPAIGN')
            console.log(error.response)
        })

        axios.get("https://helpinghand-backend.herokuapp.com/blog/latest/limit=3",this.state.config)
        .then((response)=>{
            this.setState({
                blogs: response.data
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING BLOG')
            console.log(error.response)
        })
    }


render(){

return(
<div>
    <div class="hero-area">
        <div class="page-banner parallax">
            <div class="container">
                <div class="page-banner-text">
                    <h1 class="block-title">Our Causes</h1>
                    <a href="/" style={{color:"white"}}>Return Home</a>
                </div>
            </div>
        </div>
    </div>
    
    <div id="main-container">
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 content-block">
                        <h3>Help rebuild Nepal</h3>
                        <div class="post-media">
                            <img src={'https://helpinghand-backend.herokuapp.com/images/campaign/' + this.state.campaignImage} alt="" />
                        </div>
                        <span class="label label-default">Cause progress</span>
                        <div class="progress">
                            <div style={{width: "88%;"}} class="progress-bar progress-bar-primary" data-appear-progress-animation="88%" data-appear-animation-delay="100"> <span class="progress-bar-tooltip">88%</span> </div>
                        </div>
                        <div class="pull-left">Raised <strong>NPR 0</strong></div>
                        <div class="pull-right">Goal <strong class="accent-color">NPR {this.state.campaignGoal}</strong></div>
                        <div class="spacer-20"></div>
                        <div class="row">
                            <div class="col-md-5 col-sm-5">
                                <p class="lead">{this.state.campaignShortDescription}</p>
                            </div>
                            <div class="col-md-7 col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Total Donors<span class="badge">0</span></li>
                                    <li class="list-group-item">Days left to fundraising<span class="badge">{this.state.campaignDays}</span></li>
                                    <li class="list-group-item">Countries helping<span class="badge">0</span></li>
                                </ul>
                                <a href={"donate-now/" + this.state.id}  class="btn btn-primary btn-block">Donate Now</a>
                            </div>
                        </div>
                        <p>{this.state.campaignFullDescription}</p>
                    </div>
                    
                    <div class="col-md-4 sidebar-block">
                        <div class="widget widget_recent_causes">
                            <ul>
                                <h3 class="widgettitle">Latest Causes</h3>
                                {
                                this.state.campaigns.map((campaign)=>{
                                return(
                                <li>
                                    <a href={"single-cause/" + campaign._id} class="cause-thumb">
                                        <img src={'https://helpinghand-backend.herokuapp.com/images/campaign/' + campaign.campaignImage} alt="" class="img-thumbnail" />
                                        <div class="cProgress" data-complete="88" data-color="42b8d4">
                                            <strong></strong>
                                        </div>
                                    </a>
                                    <h5><a href={"single-cause/" + campaign._id}>{campaign.campaignName}</a></h5>
                                    <span class="meta-data">{campaign.campaignDays} days left to achieve</span>
                                </li>
                                )
                                })
                                }
                            </ul>
                        </div>
                        
                        <div class="widget sidebar-widget widget_categories">
                            <h3 class="widgettitle">Cause Categories</h3>
                            <ul>
                                <li><a href="#">Education</a> (3)</li>
                                <li><a href="#">Environment</a> (1)</li>
                                <li><a href="#">Global warming</a> (6)</li>
                                <li><a href="#">Water</a> (4)</li>
                                <li><a href="#">Wild life</a> (2)</li>
                                <li><a href="#">Small business</a> (12)</li>
                            </ul>
                        </div>
                        <div class="widget recent_posts">
                            <h3 class="widgettitle">Latest Blogs</h3>
                            <ul>
                                {
                                this.state.blogs.map((blog)=>{
                                return(
                                <li>
                                    <a href={"single-post/" + blog._id} class="media-box">
                                        <img src={'https://helpinghand-backend.herokuapp.com/images/blog/' + blog.blogImage} alt="" />
                                    </a>
                                    <h5><a href={"single-post/" + blog._id}>{blog.blogTitle}</a></h5>
                                    <span class="meta-data grid-item-meta">Posted on {blog.blogPostDate}</span>
                                </li>
                                )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <Footer></Footer>
</div>)
}

}

export default CampaignSingle;
