import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { Router } from 'react-router';
import * as serviceWorker from './serviceWorker';
import history from './history';
import './global.scss';

ReactDOM.hydrate(
  <Router history={history}>
    <App />
  </Router>
  , document.getElementById('root'));

serviceWorker.unregister();
