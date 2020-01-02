import React from 'react';
import { Route } from 'react-router-dom';
import './index.scss';
import LoginPage from './login';

interface Props {

}

const AuthPage: React.FC<Props> = props => {

  return (
    <div>
      <Route path="/login">
        <LoginPage />
      </Route>
    </div>
  )
}

export default AuthPage;