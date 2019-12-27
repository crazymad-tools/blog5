import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import IndexPage from './index';
import AuthPage from './auth';
import LoginPage from './auth/login';
import RegisterPage from './auth/register';

interface Props {}

const App: React.FC<Props> = props => {
  // const location = useLocation();
  // const history = useHistory();
  // const match = useRouteMatch();

  return (
    <div className="App">
      {/* <Router> */}
        <Route path="/" component={IndexPage} exact />
        <Route path="/auth" component={AuthPage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/register" component={RegisterPage} />
      {/* </Router> */}
    </div>
  );
}

export default App;
