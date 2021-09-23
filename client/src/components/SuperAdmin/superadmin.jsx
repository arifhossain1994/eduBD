import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../index.css";

export default function superadmin() {
  return (
    <div class="body">
      <h4>Super Admin View</h4>
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
