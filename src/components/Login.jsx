import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthSystem';

function Login({ onLogin: propOnLogin }) {
    const [username, setUsername] = useState('');
    const contextValue = useContext(AuthContext);

    const handleLogin = () => {
        if (contextValue ?. login) {
            contextValue.login(username);
        }
        else if (propOnLogin) {
            propOnLogin(username)
        }
        setUsername('')
    };
  return (
      <div>
          <label htmlFor="username">Username</label>
          <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter ur User name' />
          <button onClick={handleLogin}>Login</button>
      
    </div>
  )
}

export default Login
