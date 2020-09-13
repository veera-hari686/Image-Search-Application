import React from "react";
import ReactDOM from "react-dom";

import Approuter from "./Approuter.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Approuter />
  </React.StrictMode>,
  rootElement
);
