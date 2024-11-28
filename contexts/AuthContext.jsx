import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();


// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
    const [isLogin , setIsLogin] = useState(false)
    return (
        <authContext.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </authContext.Provider>
    )
}


