import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "/src/App.js";
import View from "/src/View.js";

function Approuter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:id" component={View} />
      </Switch>
    </BrowserRouter>
  );
}

export default Approuter;
