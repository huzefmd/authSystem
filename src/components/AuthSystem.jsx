import React, { createContext, useState } from "react";
import AppBar from "./AppBar";
import Login from "./Login";
import Home from "./Home";

export const AuthContext = createContext(undefined);
function AuthSystem() {
  const [username, setUsername] = useState("");
  const [isLoggedin, setisLoggedin] = useState(false);
  const [useContextApi, setUseContextApi] = useState(true);

  const LoginNew = (newUserName) => {
    setUsername(newUserName);
    setisLoggedin(true);
    };
    
  const Logout = () => {
    setUsername("");
    setisLoggedin(false);
  };

    
  const contextValue = useContextApi
    ? { username, isLoggedin,setisLoggedin ,LoginNew, Logout }
    : undefined;
    return (
      <AuthContext.Provider value={contextValue}>
        <AppBar
          username={username}
          setUsername={setUsername}
          isLoggedin={isLoggedin}
          logout={Logout}
        />
        <main>
          {isLoggedin ? (
            <Home />
          ) : (
            <Login username={username} setUsername={setUsername} />
          )}
        </main>
      </AuthContext.Provider>
    );
}

export default AuthSystem;
