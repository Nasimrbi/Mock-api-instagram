import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {getCookie} from './hooks/getCookie'

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({  children }) => {
  const navigate = useNavigate();
 
   const isLogin = getCookie('isLogin')

  useEffect(() => {
    if (!isLogin) {
      navigate("/login", { replace: true });
    }
  }, [isLogin, navigate]);

  return isLogin ? children : null;
};

export default ProtectedRoutes;
