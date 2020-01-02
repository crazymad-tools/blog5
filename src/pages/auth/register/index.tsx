import React, { useEffect, useState } from 'react';
import useStores from '../../../store';

interface Props {

}

const RegisterPage: React.FC<Props> = props => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const { userStore } = useStores();

  function register() {
    if (password === '' || passwordRepeat === '' || username === '' || email === '') return;
    if (passwordRepeat !== password) return;

    userStore.register({
      username,
      email,
      password
    });
  }

  return (
    <div>
      <p><b>REGISTER</b></p>
      <div>
        <input value={username} onChange={e => setUsername(e.currentTarget.value)} placeholder="username" />
      </div>
      <div>
        <input value={email} onChange={e => setEmail(e.currentTarget.value)} placeholder="email" />
      </div>
      <div>
        <input type="password" onChange={e => setPassword(e.currentTarget.value)} value={password} placeholder="password" />
      </div>
      <div>
        <input type="password" onChange={e => setPasswordRepeat(e.currentTarget.value)} value={passwordRepeat} placeholder="repeat password" />
      </div>
      <div>
        <input type="submit" value="submit" onClick={register} />
      </div>
    </div>
  )
}

export default RegisterPage;