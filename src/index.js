import React from "react";
import ReactDOM from "react-dom/client";

import "./scss/index.scss";
import AppProvider from "./providers/AppProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
