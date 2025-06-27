import React, { useContext } from 'react'
import { AuthContext } from './AuthSystem'

function AppBar({ username: propUsername, isLoggedin: proisLoggedin, logout: propLogout }) {
  const contextValue = useContext(AuthContext);
  const displayUserName = contextValue.username;
  const displayLogggedin = contextValue.isLoggedin;
  const { Logout } = useContext(AuthContext);
  

    return (
      <div className=" flex justify-between p-6 bg-[#090040] text-white text-2xl font-semibold">
        <h1>UseState Management</h1>
        {displayLogggedin ? (
          <div className='flex gap-10'>
            <span>Welcome {displayUserName} </span>
            <button className="p-2 rounded bg-[#578FCA] text-sm font-light" onClick={Logout}>
              Logout
            </button>
          </div>
        ) : (
          <span>Please Login!!</span>
        )}
      </div>
    );
}

export default AppBar
