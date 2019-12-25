import React, { useEffect, useState } from 'react';

interface Props {

}

const LoginPage: React.FC<Props> = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div>
      <p><b>LOGIN</b></p>
      <div>
        <input placeholder="username" value={username} onChange={e => setUsername(e.currentTarget.value)} />
      </div>
      <div>
        <input placeholder="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
      </div>
      <div>
        <input type="submit" value="submit" />
      </div>
    </div>
  )
}

export default LoginPage;