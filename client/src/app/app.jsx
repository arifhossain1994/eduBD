import React from "react";
import superadmin from "../components/superadmin/superadmin";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import homepage from "../components/homepage/homepage";
import manageInstitution from "../components/superadmin/manageInstitution";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={superadmin} />
        <Route exact path="/homepage" component={homepage} />
        <Route exact path="/manageInstitution" component={manageInstitution} />
      </Switch>
    </div>
  </BrowserRouter>,
  rootElement
);

function App() {
  return <superadmin />;
}

export default App;
