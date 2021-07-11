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
      <Route path='/signup' exact component={Register} />
      <Route path='/cause' exact component={Error} />
      </BrowserRouter>
 </div>
  );
}

export default App;
