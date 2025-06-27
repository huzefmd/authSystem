import React, { useContext } from 'react'
import { AuthContext } from './AuthSystem'

function Login({  username, setUsername }) {

    const contextValue = useContext(AuthContext);
    const { LoginNew, setisLoggedin } = useContext(AuthContext);
    const handleLogin = () => {
        LoginNew(username),
        setisLoggedin(true)
    }
    return (
      <div className="flex justify-center m-30 ">
        <div className="p-30  m-10  w-100 flex gap-10 justify-center border-1 border-gray-300 rounded-2xl bg-[#3674B5] ">
          <input
            className="bg-gray-50 border border-gray-200 px-5 py-3 placeholder:text-black"
            type="text"
            value={username}
            placeholder="Enter ur userName"
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          />
          <button
            className="p-2 rounded bg-[#578FCA] text-sm font-light text-white"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
}

export default Login
