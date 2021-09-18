import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import homepage from "./component/Homepage/homepage";
import superadmin from "./component/SuperAdmin/superadmin";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <superadmin />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={superadmin} />
      <Route path="/homepage" component={homepage} />
    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
