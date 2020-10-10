import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; //don't need to specify localhost url in axios http address

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//style
import "spectre.css/dist/spectre.min.css";
import "spectre.css/dist/spectre-icons.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
