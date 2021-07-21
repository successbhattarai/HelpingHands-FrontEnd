import React, { Component } from 'react';
import axios from 'axios';
import { Input } from'reactstrap';
import Header from '../components/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class CampaignSingle extends Component{
    

    state={
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
        axios.get("http://localhost:9000/campaign/display/" + this.state.id)
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
                    <div class="row">
                        <div class="col-md-8 content-block">
                            <h3>Help rebuild Nepal</h3>
                            <div class="post-media">
                                <img src={'http://localhost:9000/images/campaign/' + this.state.campaignImage} alt=""/>
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
                                    <a href="#" class="btn btn-primary btn-block" data-toggle="modal" data-target="#DonateModal">Donate Now</a>
                                </div>
                            </div>
                            <p>{this.state.campaignFullDescription}</p>
                        </div>
                        
                        <div class="col-md-4 sidebar-block">
                        <div class="widget widget_recent_causes">
                            <h3 class="widgettitle">Latest Causes</h3>
                            <ul>
                                <li>
                                    <a href="#" class="cause-thumb">
                                        <img src="http://localhost:3000/images/cause1.jpg"  alt="" class="img-thumbnail"/>
                                        <div class="cProgress" data-complete="88" data-color="42b8d4">
                                            <strong></strong>
                                        </div>
                                    </a>
                                   	<h5><a href="single-cause.html">Help small shopkeepers of Sunyani</a></h5>
                                    <span class="meta-data">10 days left to achieve</span>
                                </li>
                                <li>
                                    <a href="#" class="cause-thumb">
                                        <img src="http://localhost:3000/images/cause5.jpg"  alt="" class="img-thumbnail"/>
                                        <div class="cProgress" data-complete="75" data-color="42b8d4">
                                            <strong></strong>
                                        </div>
                                    </a>
                                   	<h5><a href="single-cause.html">Save tigers from poachers</a></h5>
                                    <span class="meta-data">32 days left to achieve</span>
                                </li>
                                <li>
                                    <a href="#" class="cause-thumb">
                                        <img src="http://localhost:3000/images/cause1.jpg"  alt="" class="img-thumbnail"/>
                                        <div class="cProgress" data-complete="88" data-color="42b8d4">
                                            <strong></strong>
                                        </div>
                                    </a>
                                   	<h5><a href="single-cause.html">Help rebuild Nepal</a></h5>
                                    <span class="meta-data">10 days left to achieve</span>
                                </li>
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
                                <h3 class="widgettitle">Latest Posts</h3>
                                <ul>
                                    <li>
                                        <a href="single-post.html" class="media-box">
                                            <img src="http://localhost:3000/images/post1.jpg"  alt=""/>
                                        </a>
                                        <h5><a href="single-post.html">A single person can change million lives</a></h5>
                                        <span class="meta-data grid-item-meta">Posted on 11th Dec, 2015</span>
                                    </li>
                                    <li>
                                        <a href="single-post.html" class="media-box">
                                            <img src="http://localhost:3000/images/post3.jpg"  alt=""/>
                                        </a>
                                        <h5><a href="single-post.html">Donate your woolens this winter</a></h5>
                                        <span class="meta-data grid-item-meta">Posted on 11th Dec, 2015</span>
                                    </li>
                                    <li>
                                        <a href="single-post.html" class="media-box">
                                            <img src="http://localhost:3000/images/post2.jpg"  alt=""/>
                                        </a>
                                        <h5><a href="single-post.html">How to survive the tough path of life</a></h5>
                                        <span class="meta-data grid-item-meta">Posted on 06th Dec, 2015</span>
                                    </li>
                                </ul>
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

export default CampaignSingle;
