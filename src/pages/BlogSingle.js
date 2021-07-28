import React, { Component } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

toast.configure();

class BlogSingle extends Component{

    state={
        blogs: [],
        blogImage :'',
        blogTitle :'',
        blogDescription :'',
        blogTags :'',
        blogDetail :'',
        id : this.props.match.params.id
    }


    componentDidMount(){
        axios.get("http://localhost:9000/blog/display/" + this.state.id)
        .then((response)=>{
            this.setState({
                blogImage : response.data.blogImage,
                blogTitle : response.data.blogTitle,
                blogDescription : response.data.blogDescription,
                blogTags : response.data.blogTags,
                blogDetail : response.data.blogDetail,
            })
        })
        .catch((error)=>{
            toast('ERROR DISPLAYING BLOG')
            console.log(error.response)
        })
        
        axios.get("http://localhost:9000/blog/latest/limit=3",this.state.config)
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
                    <h1 class="block-title">Blog</h1>
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
                        <h3>{this.state.blogTitle}</h3>
                        <div class="post-media">
                            <img src={'http://localhost:9000/images/blog/' + this.state.blogImage} alt="" />
                        </div>
                        <div class="post-content">
                            <p>{this.state.blogDescription}</p>
                            <p>{this.state.blogDetail}</p>
                        </div>
                        <div class="tag-cloud">
                            <i class="fa fa-tags"></i>
                            <a href="#">{this.state.blogTags}</a>
                        </div>
                        <section class="about-author">
                            <img src="http://localhost:3000/images/user1.jpg" alt="avatar" class="img-thumbnail" />
                            <div class="post-author-content">
                                <h3>Emma Paquette <span class="label label-primary">Author</span></h3>
                                <p><strong>Beverly Barnett</strong>, is a regular writer for the Vestige Museum blog. She loves to write more about the animal species and have so much faith in the nature's doing.</p>
                            </div>
                        </section>
                        <ul class="pager">
                            <li class="pull-left"><a href="#">&larr; Prev Post</a></li>
                            <li class="pull-right"><a href="#">Next Post &rarr;</a></li>
                        </ul>
                        <section class="post-comments" id="comments">
                            <h3><i class="fa fa-comment"></i> Comments (4)</h3>
                            <ol class="comments">
                                <li>
                                    <div class="post-comment-block">
                                        <img src="http://localhost:3000/images/user2.jpg" alt="avatar" class="img-thumbnail" />
                                        <div class="post-comment-content">
                                            <a href="#" class="btn btn-default btn-xs pull-right">Reply</a>
                                            <h5>Robin Schmidt <span>says</span></h5>
                                            <span class="meta-data">Nov 23, 2013 at 7:58 pm</span>
                                            <p>There have been human health concerns associated with the consumption of dolphin meat in Japan after tests showed that dolphin meat contained high levels of mercury.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-comment-block">
                                        <img src="http://localhost:3000/images/user1.jpg" alt="avatar" class="img-thumbnail" />
                                        <div class="post-comment-content">
                                            <a href="#" class="btn btn-default btn-xs pull-right">Reply</a>
                                            <h5>Emma Paquette <span>says</span></h5>
                                            <span class="meta-data">Nov 23, 2013 at 7:58 pm</span>
                                            <p>Nicely said :)</p>
                                        </div>
                                    </div>
                                    <ul style={{padding:"0px"}}>
                                        <li>
                                            <div class="post-comment-block">
                                                <img src="http://localhost:3000/images/user2.jpg" alt="avatar" class="img-thumbnail" />
                                                <div class="post-comment-content">
                                                    <a href="#" class="btn btn-default btn-xs pull-right">Reply</a>
                                                    <h5>Robin Schmidt <span>says</span></h5>
                                                    <span class="meta-data">Nov 23, 2013 at 7:58 pm</span>
                                                    <p>Étienne de Flacourt (1607-60), French governor of Madagascar, described eating unborn dolphin calves cut out of the womb of a caught dolphin cow in Histoire de la grande isle Madagascar (1661). He considered the meat more tender and delicate than veal and believed it to be among the best meats he had eaten.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="post-comment-block">
                                                <img src="http://localhost:3000/images/user2.jpg" alt="avatar" class="img-thumbnail" />
                                                <div class="post-comment-content">
                                                    <a href="#" class="btn btn-default btn-xs pull-right">Reply</a>
                                                    <h5>Robin Schmidt <span>says</span></h5>
                                                    <span class="meta-data">Nov 23, 2013 at 7:58 pm</span>
                                                    <p>Real post, i love reading it all through</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="post-comment-block">
                                        <img src="http://localhost:3000/images/user1.jpg" alt="avatar" class="img-thumbnail" />
                                        <div class="post-comment-content">
                                            <a href="#" class="btn btn-default btn-xs pull-right">Reply</a>
                                            <h5>Emma Paquette <span>says</span></h5>
                                            <span class="meta-data">Nov 23, 2013 at 7:58 pm</span>
                                            <p>Dolphin meat is consumed in a small number of countries world-wide, which include Japan[125] and Peru (where it is referred to as chancho marino, or "sea pork").[126] While Japan may be the best-known and most controversial example, only a very small minority of the population has ever sampled it.</p>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </section>
                        <section class="post-comment-form">
                            <h3><i class="fa fa-share"></i> Post a comment</h3>
                            <form>
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-md-4 col-sm-4">
                                            <input type="text" class="form-control input-lg" placeholder="Your name" />
                                        </div>
                                        <div class="col-md-4 col-sm-4">
                                            <input type="email" class="form-control input-lg" placeholder="Your email" />
                                        </div>
                                        <div class="col-md-4 col-sm-4">
                                            <input type="url" class="form-control input-lg" placeholder="Website (optional)" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <textarea cols="8" rows="4" class="form-control input-lg" placeholder="Your comment"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-primary btn-lg">Submit your comment</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                    
                    <div class="col-md-4 sidebar-block">
                        <div class="widget tabbed_content tabs">
                            <div class="widget recent_posts">
                                <h3 class="widgettitle">Latest Blogs</h3>
                                <ul>
                                    {
                                    this.state.blogs.map((blog)=>{
                                    return(
                                    <li>
                                        <a href={"single-post/" + blog._id} class="media-box">
                                            <img src={'http://localhost:9000/images/blog/' + blog.blogImage} alt="" />
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
                        <div class="widget sidebar-widget widget_categories">
                            <h3 class="widgettitle">Blog Categories</h3>
                            <ul style={{padding:"0px"}}>
                                <li><a href="#">Education</a> (3)</li>
                                <li><a href="#">Environment</a> (1)</li>
                                <li><a href="#">Water</a> (4)</li>
                                <li><a href="#">Wild life</a> (2)</li>
                                <li><a href="#">Small business</a> (12)</li>
                            </ul>
                        </div>
                        <div class="widget sidebar-widget widget_search">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Enter your keywords" />
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>
                                </span>
                            </div>
                        </div>
                        <div class="widget widget_testimonials">
                            <h3 class="widgettitle">Stories of change</h3>
                            <div class="carousel-wrapper">
                                <div class="row">
                                    <ul class="owl-carousel carousel-fw" id="testimonials-slider" data-columns="1" data-autoplay="5000" data-pagination="no" data-arrows="yes" data-single-item="no" data-items-desktop="1" data-items-desktop-small="1" data-items-tablet="1" data-items-mobile="1">
                                        <li class="item">
                                            <div class="testimonial-block">
                                                <blockquote>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                                                </blockquote>
                                                <div class="testimonial-avatar"><img src="http://localhost:3000/images/story1.jpg" alt="" width="70" height="70" /></div>
                                                <div class="testimonial-info">
                                                    <div class="testimonial-info-in">
                                                        <strong>Ada Ajimobi</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="item">
                                            <div class="testimonial-block">
                                                <blockquote>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                                                </blockquote>
                                                <div class="testimonial-avatar"><img src="http://localhost:3000/images/story2.jpg" alt="" width="70" height="70" /></div>
                                                <div class="testimonial-info">
                                                    <div class="testimonial-info-in">
                                                        <strong>Chloe Lévesque</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
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

export default BlogSingle;
