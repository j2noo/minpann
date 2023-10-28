import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/globalStyled.js";
import Router from "./Router.jsx";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <Router />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
