import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Header extends Component{

render(){


    if (localStorage.getItem('token')){

        {/* If User is Logged In */}
        var Heading = 
        <div class="site-header-wrapper">
        
        <header class="site-header">
            <div class="container">
                <div class="site-logo">
                    <a href="/" class="default-logo"><img src="images/logo2.png" alt="Logo"/></a>
                    <a href="/" class="default-retina-logo"><img src="images/logo2.png" alt="Logo" width="199" height="30"/></a>
                    <a href="/" class="sticky-logo"><img src="images/logo.png" alt="Logo"/></a>
                    <a href="/" class="sticky-retina-logo"><img src="images/logo2.png" alt="Logo" width="199" height="30"/></a>
                </div>
                <a href="#" class="visible-sm visible-xs" id="menu-toggle"><i class="fa fa-bars"></i></a>
                <div class="header-info-col"><i class="fa fa-phone"></i>01-4425661, 01-4441577</div>
                <ul class="sf-menu dd-menu pull-right" role="menu">
                    <li><a href="/">Home</a>
                        </li>
                    <li><a href="about.html">About</a>
                    	<ul>
                    		<li><a href="about.html">Introduction</a></li>
                    		<li><a href="team.html">Team</a></li>
                    		<li><a href="our-impact.html">Our Impact</a></li>
                    		<li><a href="careers.html">Careers</a></li>
                    		<li><a href="contact.html">Contact</a></li>
                        </ul>
                    </li>
                    <li><a href="causes.html">Causes</a>
                    	{/* <ul>
                    		<li><a href="causes.html">Causes List</a></li>
                    		<li><a href="causes-grid.html">Causes Grid</a></li>
                    		<li><a href="single-cause.html">Single Cause</a></li>
                        </ul> */}
                    </li>
                    <li><a href="events.html">Events</a>
                    	{/* <ul>
                    		<li><a href="events.html">Events List</a></li>
                    		<li><a href="events-grid.html">Events Grid</a></li>
                    		<li><a href="events-calendar.html">Events Calendar</a></li>
                    		<li><a href="single-event.html">Single Event</a></li>
                        </ul> */}
                    </li>
                    <li><a href="gallery-caption-2cols.html">Gallery</a>
                    	{/* <ul>
                    		<li><a href="gallery-caption-2cols.html">Gallery with Caption</a>
                                <ul>
                                    <li><a href="gallery-caption-2cols.html">2 Columns</a></li>
                                    <li><a href="gallery-caption-3cols.html">3 Columns</a></li>
                                    <li><a href="gallery-caption-4cols.html">4 Columns</a></li>
                                </ul>
                            </li>
                    		<li><a href="gallery-2cols.html">Gallery without Caption</a>
                                <ul>
                                    <li><a href="gallery-2cols.html">2 Columns</a></li>
                                    <li><a href="gallery-3cols.html">3 Columns</a></li>
                                    <li><a href="gallery-4cols.html">4 Columns</a></li>
                                </ul>
                            </li>
                        </ul> */}
                    </li>
                    <li class="megamenu"><a href="javascrip:void(0)">Mega Menu</a>
                        <ul class="dropdown">
                            <li>
                                <div class="megamenu-container container">
                                    <div class="row">
                                        <div class="col-md-3 megamenu-col">
                                        	<span class="megamenu-sub-title"><i class="fa fa-bookmark"></i> Features</span>
                                            <ul class="sub-menu">
                                                <li><a href="shortcodes.html">Shortcodes</a></li>
                                                <li><a href="typography.html">Typography</a></li>
                                                <li><a href="privacy-policy.html">Privacy policy</a></li>
                                                <li><a href="payment-terms.html">Payment terms</a></li>
                                                <li><a href="refund-policy.html">Refund policy</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3 megamenu-col">
                                        	<span class="megamenu-sub-title"><i class="fa fa-newspaper-o"></i> Latest news</span>
                                        	<div class="widget recent_posts">
                                            	<ul>
                                                	<li>
                                                    	<a href="single-post.html" class="media-box">
                                                            <img src="images/post1.jpg" alt=""/>
                                                        </a>
                                                		<h5><a href="single-post.html">A single person can change million lives</a></h5>
                                                		<span class="meta-data grid-item-meta">Posted on 11th Dec, 2015</span>
                                                    </li>
                                                	<li>
                                                    	<a href="single-post.html" class="media-box">
                                                            <img src="images/post3.jpg" alt=""/>
                                                        </a>
                                                		<h5><a href="single-post.html">Donate your woolens this winter</a></h5>
                                                		<span class="meta-data grid-item-meta">Posted on 11th Dec, 2015</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-3 megamenu-col">
                                        	<span class="megamenu-sub-title"><i class="fa fa-microphone"></i> Latest causes</span>
                                            <ul class="widget_recent_causes">
                                                <li>
                                                    <a href="#" class="cause-thumb">
                                                        <img src="images/cause1.jpg" alt="" class="img-thumbnail"/>
                                                        <div class="cProgress" data-complete="88" data-color="42b8d4">
                                                            <strong></strong>
                                                        </div>
                                                    </a>
                                                    <h5><a href="single-cause.html">Help small shopkeepers of Sunyani</a></h5>
                                                    <span class="meta-data">10 days left to achieve</span>
                                                </li>
                                                <li>
                                                    <a href="#" class="cause-thumb">
                                                        <img src="images/cause5.jpg" alt="" class="img-thumbnail"/>
                                                        <div class="cProgress" data-complete="75" data-color="42b8d4">
                                                            <strong></strong>
                                                        </div>
                                                    </a>
                                                    <h5><a href="single-cause.html">Save tigers from poachers</a></h5>
                                                    <span class="meta-data">32 days left to achieve</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-md-3 megamenu-col">
                                        	<span class="megamenu-sub-title"><i class="fa fa-star"></i> Featured Video</span> 
                                            <div class="fw-video"><iframe src="https://player.vimeo.com/video/62947247" width="500px" height="275px"></iframe></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                      	</ul>
                  	</li>
                    <li><a href="blog.html">Blog</a>
                        {/* <ul class="dropdown">
                            <li><a href="blog.html">Blog Classic</a></li>
                            <li><a href="blog-grid.html">Blog Grid</a></li>
                            <li><a href="single-post.html">Single Post</a></li>
                        </ul> */}
                    </li>
              	</ul>
            </div>
        </header>
    </div>
    }
 else{
      {/* If User Visit Us as a Guest. */}
    var Heading = 
    <div class="site-header-wrapper">
        
    <header class="site-header">
        <div class="container">
            <div class="site-logo">
                <a href="/" class="default-logo"><img src="images/logo2.png" alt="Logo"/></a>
                <a href="/" class="default-retina-logo"><img src="images/logo2.png" alt="Logo" width="199" height="30"/></a>
                <a href="/" class="sticky-logo"><img src="images/logo.png" alt="Logo"/></a>
                <a href="/" class="sticky-retina-logo"><img src="images/logo2.png" alt="Logo" width="199" height="30"/></a>
            </div>
            <a href="#" class="visible-sm visible-xs" id="menu-toggle"><i class="fa fa-bars"></i></a>
            <div class="header-info-col"><i class="fa fa-phone"></i> 01-4425661, 01-4441577</div>
            <ul class="sf-menu dd-menu pull-right" role="menu">
                <li><a href="/">Home</a></li>
                <li><a href="about.html">About</a>
                    {/* <ul>
                        <li><a href="about.html">Introduction</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="our-impact.html">Our Impact</a></li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul> */}
                </li>
                <li><a href="causes.html">Causes</a>
                    {/* <ul>
                        <li><a href="causes.html">Causes List</a></li>
                        <li><a href="causes-grid.html">Causes Grid</a></li>
                        <li><a href="single-cause.html">Single Cause</a></li>
                    </ul> */}
                </li>
                <li><a href="events.html">Events</a>
                    {/* <ul>
                        <li><a href="events.html">Events List</a></li>
                        <li><a href="events-grid.html">Events Grid</a></li>
                        <li><a href="events-calendar.html">Events Calendar</a></li>
                        <li><a href="single-event.html">Single Event</a></li>
                    </ul> */}
                </li>
                <li><a href="gallery-caption-2cols.html">Gallery</a></li>
                <li class="megamenu"><a href="javascrip:void(0)">Mega Menu</a>
                    {/* <ul class="dropdown">
                        <li>
                            <div class="megamenu-container container">
                                <div class="row">
                                    <div class="col-md-3 megamenu-col">
                                        <span class="megamenu-sub-title"><i class="fa fa-bookmark"></i> Features</span>
                                        <ul class="sub-menu">
                                            <li><a href="shortcodes.html">Shortcodes</a></li>
                                            <li><a href="typography.html">Typography</a></li>
                                            <li><a href="privacy-policy.html">Privacy policy</a></li>
                                            <li><a href="payment-terms.html">Payment terms</a></li>
                                            <li><a href="refund-policy.html">Refund policy</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3 megamenu-col">
                                        <span class="megamenu-sub-title"><i class="fa fa-newspaper-o"></i> Latest news</span>
                                        <div class="widget recent_posts">
                                            <ul>
                                                <li>
                                                    <a href="single-post.html" class="media-box">
                                                        <img src="images/post1.jpg" alt=""/>
                                                    </a>
                                                    <h5><a href="single-post.html">A single person can change million lives</a></h5>
                                                    <span class="meta-data grid-item-meta">Posted on 11th Dec, 2015</span>
                                                </li>
                                                <li>
                                                    <a href="single-post.html" class="media-box">
                                                        <img src="images/post3.jpg" alt=""/>
                                                    </a>
                                                    <h5><a href="single-post.html">Donate your woolens this winter</a></h5>
                                                    <span class="meta-data grid-item-meta">Posted on 11th Dec, 2015</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3 megamenu-col">
                                        <span class="megamenu-sub-title"><i class="fa fa-microphone"></i> Latest causes</span>
                                        <ul class="widget_recent_causes">
                                            <li>
                                                <a href="#" class="cause-thumb">
                                                    <img src="images/cause1.jpg" alt="" class="img-thumbnail"/>
                                                    <div class="cProgress" data-complete="88" data-color="42b8d4">
                                                        <strong></strong>
                                                    </div>
                                                </a>
                                                <h5><a href="single-cause.html">Help small shopkeepers of Sunyani</a></h5>
                                                <span class="meta-data">10 days left to achieve</span>
                                            </li>
                                            <li>
                                                <a href="#" class="cause-thumb">
                                                    <img src="images/cause5.jpg" alt="" class="img-thumbnail"/>
                                                    <div class="cProgress" data-complete="75" data-color="42b8d4">
                                                        <strong></strong>
                                                    </div>
                                                </a>
                                                <h5><a href="single-cause.html">Save tigers from poachers</a></h5>
                                                <span class="meta-data">32 days left to achieve</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3 megamenu-col">
                                        <span class="megamenu-sub-title"><i class="fa fa-star"></i> Featured Video</span> 
                                        <div class="fw-video"><iframe src="https://player.vimeo.com/video/62947247" width="500px" height="275px"></iframe></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                      </ul>
                  */}
                  </li>
                <li><a href="blog.html">Blog</a>
                    {/* <ul class="dropdown">
                        <li><a href="blog.html">Blog Classic</a></li>
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="single-post.html">Single Post</a></li>
                    </ul> */}
                </li>
              </ul>
        </div>
    </header>
</div>

}
return(
    Heading
)
}

}

export default Header;
