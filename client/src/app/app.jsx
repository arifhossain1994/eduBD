import React from "react";
import superadmin from "../components/superadmin/superadmin";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage/homepage";
import manageInstitution from "../components/superadmin/manageInstitution";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={superadmin} />
      <Route exact path="/homepage" component={Homepage} />
      <Route exact path="/manageInstitution" component={manageInstitution} />
    </Switch>
  </BrowserRouter>,
  rootElement
);

function App() {
  return <superadmin />;
}

export default App;
