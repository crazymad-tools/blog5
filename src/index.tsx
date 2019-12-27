import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));

serviceWorker.unregister();
