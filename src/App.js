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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/register' exact component={Register} />
      <Route path='/success' exact component={Success} />
      <Route path='/login' exact component={Login} />

      <Route path='/forgotPassword' exact component={Error} />
      <Route path='/causes' exact component={Error} />
      <Route path='/single-cause' exact component={Error} />
      <Route path='/team' exact component={Team} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/careers' exact component={Error} />
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
