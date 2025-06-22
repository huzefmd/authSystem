import React, { createContext, useState } from 'react'
import AppBar from './AppBar';
import Home from './Home';
import Login from './Login';
export const AuthContext = createContext(undefined);


function AuthSystem() {
    const [useContextApi, setUseContextApi] = useState(false);
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (newUserName) => {
        setUsername(newUserName);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUsername('');
        setIsLoggedIn(false);
    };

    const contextValue = useContextApi ? { username, isLoggedIn, login, logout } : undefined;

    return (
        <AuthContext.Provider value={contextValue}>
            <AppBar
                username={username}
                isLoggedIn={isLoggedIn}
                logout={logout}
            />
            <div>
                <div>
                    <input type="checkbox" id='use-context-api' checked={useContextApi} onChange={(e) => setUseContextApi(e.target.checked)} />
                    <label htmlFor="use-context-api">
                        Use Context Api : {useContextApi? "ON": "OFF"}
                    </label>
                </div>
            </div>
            <main>
                {isLoggedIn ?
                    (<Home />) : (
                        <Login onLogin={ login} />
                )}
            </main>
        </AuthContext.Provider>

  )
}

export default AuthSystem




