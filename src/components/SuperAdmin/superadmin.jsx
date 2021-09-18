import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import homepage from "../Homepage/homepage";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={homepage} />
    </Switch>
  </BrowserRouter>,
  rootElement
);

function getUsers() {
  fetch(`/api/users`)
    .then((response) => response.json())
    .then((users) => console.log(users));
}

export default function superadmin() {
  return (
    <div class="body">
      <header class="SuperAdminHeader">
        <h1>EDUBD</h1>
        <p>Super Admin View</p>
      </header>
      <p class="topnav">
        <a href="#Manage User">Manage User</a>
        <a href="#Manage Institution">Manage Institution</a>
        <Link to="homepage">
          <button class="button">EDUBD Homepage</button>
        </Link>
        <a href="#login">Login</a>
      </p>
      <p>{getUsers}</p>
    </div>
  );
}
