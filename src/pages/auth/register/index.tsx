import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStores from "../../../store";

interface Props {}

const RegisterPage: React.FC<Props> = props => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const { userStore } = useStores();

  function register() {
    if (
      password === "" ||
      passwordRepeat === "" ||
      username === "" ||
      email === ""
    )
      return;
    if (passwordRepeat !== password) return;

    userStore.register({
      username,
      email,
      password
    });
  }

  return (
    <div id="registerPage">
      <div className="auth-form">
        <p>
          <b>REGISTER</b>
        </p>
        <div className="auth-form-row">
          <input
            value={username}
            onChange={e => setUsername(e.currentTarget.value)}
            placeholder="username"
          />
        </div>
        <div className="auth-form-row">
          <input
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            placeholder="email"
          />
        </div>
        <div className="auth-form-row">
          <input
            type="password"
            onChange={e => setPassword(e.currentTarget.value)}
            value={password}
            placeholder="password"
          />
        </div>
        <div className="auth-form-row">
          <input
            type="password"
            onChange={e => setPasswordRepeat(e.currentTarget.value)}
            value={passwordRepeat}
            placeholder="repeat password"
          />
        </div>
        <div className="auth-form-row">
          <input type="submit" value="submit" onClick={register} />
        </div>
        <div className="auth-form-row">
          <Link to="/auth/login">to login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
