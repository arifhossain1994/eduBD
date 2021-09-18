import React from "react";
import superadmin from "../components/SuperAdmin/superadmin";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage/homepage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={superadmin} />
      <Route exact path="/homepage" component={Homepage} />
    </Switch>
  </BrowserRouter>,
  rootElement
);

function App() {
  return <superadmin />;
}

export default App;
