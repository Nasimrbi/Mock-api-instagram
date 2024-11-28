import { createContext, useState } from "react";

 // eslint-disable-next-line react-refresh/only-export-components
 export  const notification = createContext();

// eslint-disable-next-line react/prop-types
export const NotificationProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <notification.Provider value={{ count, setCount }}>
      {children}
    </notification.Provider>
  );
};
