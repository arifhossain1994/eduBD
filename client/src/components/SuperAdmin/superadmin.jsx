import React from "react";
//import "../index.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function superadmin() {
  return (
    <div class="body">
      <header class="bodyheader">
        <h1>EDUBD</h1>
      </header>
      <p>Super Admin View</p>
      <p class="topnav">
        <a href="#Manage User">Manage User</a>
        <Link to="manageInstitution">
          <Button class="button">Manage Institution</Button>
        </Link>
        <Link to="homepage">
          <Button class="button">EDUBD Homepage</Button>
        </Link>
        <a href="#login">Login</a>
      </p>
    </div>
  );
}
