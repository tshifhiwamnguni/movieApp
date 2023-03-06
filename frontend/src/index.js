import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CinemaContextProvider } from "./context/CinemaContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<GoogleOAuthProvider clientId="901368940702-2ierv50r8ub8c222vg0n86ditqvvkb9l.apps.googleusercontent.com">
    <React.StrictMode>
    <CinemaContextProvider>
      <App />
    </CinemaContextProvider>
    </React.StrictMode>
    </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
