import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import history, { createHistory } from './history';
import './global.scss';

ReactDOM.hydrate(
  <Router history={createHistory(window.location.pathname)}>
    <App />
  </Router>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();
