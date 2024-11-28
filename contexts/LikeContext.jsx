import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const likeContext = createContext();

// eslint-disable-next-line react/prop-types
export  const LikeContextProvider = ({ children }) => {
 
    const [hearts , setHearts] = useState([])

    return (
        <likeContext.Provider value={{ hearts , setHearts }}>{children}</likeContext.Provider>
    )
}