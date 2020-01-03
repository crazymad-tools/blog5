import React, { useEffect, useState } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import useStores from "../../../store";
import { Link } from "react-router-dom";

class Props {}

const LoginPage: React.FC<Props> = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userStore } = useStores();

  function login() {
    userStore.login({
      username,
      password
    });
  }

  function keydown(e: any) {
    if (e.keyCode === 13) {
      login();
    }
  }

  return (
    <div id="loginPage">
      <div className="auth-form">
        <p>
          <b>LOGIN</b>
        </p>
        <div className="auth-form-row">
          <input
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.currentTarget.value)}
          />
        </div>
        <div className="auth-form-row">
          <input
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            type="password"
            onKeyDown={keydown}
          />
        </div>
        <div className="auth-form-row">
          <input type="submit" value="submit" onClick={login} />
        </div>
        <div className="auth-form-row">
          <Link to="/auth/register">to register</Link>
        </div>
      </div>
    </div>
  );
};

export default observer(LoginPage);
