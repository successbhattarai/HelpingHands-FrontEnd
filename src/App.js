import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Error from './pages/404';
import './App.css';
import Home from './pages/Home';
import Login from './account/Login';
import Register from './account/Register';
import Success from './account/Success';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Volunteer from './pages/Volunteer';
import ForgotPassword from './account/ForgotPassword';
import LoginError from './account/LoginError';
import RegisterError from './account/RegisterError';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/register' exact component={Register} />
      <Route path='/register-error' exact component={RegisterError} />
      <Route path='/success' exact component={Success} />
      <Route path='/login' exact component={Login} />
      <Route path='/login-error' exact component={LoginError} />
      <Route path='/forgotPassword' exact component={ForgotPassword} />
  
      <Route path='/become-a-volunteer' exact component={Volunteer} />
      <Route path='/causes' exact component={Error} />
      <Route path='/single-cause' exact component={Error} />
      <Route path='/team' exact component={Team} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/about' exact component={Error} />
      <Route path='/events' exact component={Error} />
      <Route path='/gallery' exact component={Error} />
      <Route path='/blog' exact component={Error} />
      <Route path='/privacy-policy' exact component={Error} />
      <Route path='/payment-terms' exact component={Error} />
      <Route path='/refund-policy' exact component={Error} />
      </BrowserRouter>
 </div>
  );
}

export default App;
