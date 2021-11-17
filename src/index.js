import React from "react";
import ReactDOM from "react-dom";

import "./config/config";
import "./index.css";
import "./components/Atoms.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
