import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Error from './pages/404';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/causes' exact component={Error} />

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
