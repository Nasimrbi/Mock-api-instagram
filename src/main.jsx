import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../contexts/AuthContext.jsx";
import { NotificationProvider } from "../contexts/NotifContext.jsx";
import { LikeContextProvider } from "../contexts/LikeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <NotificationProvider>
          <LikeContextProvider>
            <App />
          </LikeContextProvider>
        </NotificationProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
