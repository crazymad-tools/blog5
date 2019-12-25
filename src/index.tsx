import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.hydrate(<App />, document.getElementById('root'));

serviceWorker.unregister();
