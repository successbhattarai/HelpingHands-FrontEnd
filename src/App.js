import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Error from './pages/404';
import './App.css';
import './css/bootstrap.css';
import Home from './pages/Home';
import Login from './account/Login';
import Register from './account/Register';
import RegisterSuccess from './account/RegisterSuccess';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Volunteer from './pages/Volunteer';
import ForgotPassword from './account/ForgotPassword';
import LoginError from './account/LoginError';
import RegisterError from './account/RegisterError';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import AddBlog from './pages/AddBlog';
import Campaign from './pages/Campaign';
import AddCampaign from './pages/AddCampaign';
import CampaignSingle from './pages/CampaignSingle';
import Events from './pages/Events';
import AddEvent from './pages/AddEvent';
import EventSingle from './pages/EventSingle';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/register' exact component={Register} />
      <Route path='/register-error' exact component={RegisterError} />
      <Route path='/register-success' exact component={RegisterSuccess} />
      <Route path='/login' exact component={Login} />
      <Route path='/login-error' exact component={LoginError} />
      <Route path='/forgotPassword' exact component={ForgotPassword} />
  
      <Route path='/add-campaign' exact component={AddCampaign} />
      <Route path='/campaign' exact component={Campaign} />
      <Route path='/become-a-volunteer' exact component={Volunteer} />
      <Route path='/causes' exact component={Campaign} />
      <Route path='/single-cause/:id' exact component={CampaignSingle} />
      <Route path='/team' exact component={Team} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/about' exact component={Error} />
      <Route path='/add-events' exact component={AddEvent} />
      <Route path='/events' exact component={Events} />
      <Route path='/single-event/:id' exact component={EventSingle} />
      <Route path='/gallery' exact component={Gallery} />
      <Route path='/add-blog' exact component={AddBlog} />
      <Route path='/blog' exact component={Blog} />
      <Route path='/single-post/:id' exact component={BlogSingle} />
      <Route path='/privacy-policy' exact component={Error} />
      <Route path='/payment-terms' exact component={Error} />
      <Route path='/refund-policy' exact component={Error} />
      </BrowserRouter>
 </div>
  );
}

export default App;
