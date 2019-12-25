import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import IndexPage from './index';
import AuthPage from './auth';
import LoginPage from './auth/login';
import RegisterPage from './auth/register';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={IndexPage} exact />
        <Route path="/auth" component={AuthPage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/register" component={RegisterPage} />
      </Router>
    </div>
  );
}

export default App;
