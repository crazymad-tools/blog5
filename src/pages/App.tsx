import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  RouteComponentProps
} from "react-router-dom";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import IndexPage from "./index";
import AuthPage from "./auth";
import LoginPage from "./auth/login";
import RegisterPage from "./auth/register";
import EditPage from "./edit";
import Page404 from "./404";
import Game from "./game";

interface Props {}

const App: React.FC<Props> = props => {
  return (
    <div className="App">
      <Route path="/" component={IndexPage} exact />
      <Route path="/auth" component={AuthPage} />
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/register" component={RegisterPage} />
      <Route path="/edit" component={EditPage} />
      <Route path="/game" component={Game} />
      <Route nomatch path="/404" component={Page404} />
    </div>
  );
};

export default App;
