import React, { useEffect, useState } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import useStores from '../../../store';

class Props { }

const LoginPage: React.FC<Props> = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userStore } = useStores();

  function login() {
    userStore.login({
      username,
      password
    });
  }

  return (
    <div id="loginPage">
      <p><b>LOGIN</b></p>
      <div>
        <input placeholder="username" value={username} onChange={e => setUsername(e.currentTarget.value)} />
      </div>
      <div>
        <input placeholder="password" value={password} onChange={e => setPassword(e.currentTarget.value)} type="password" />
      </div>
      <div>
        <input type="submit" value="submit" onClick={login} />
      </div>
    </div>
  )
}

export default observer(LoginPage);