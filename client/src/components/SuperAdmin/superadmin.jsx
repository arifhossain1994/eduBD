import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

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
          <button class="button">Manage Institution</button>
        </Link>
        <Link to="homepage">
          <button class="button">EDUBD Homepage</button>
        </Link>
        <a href="#login">Login</a>
      </p>
    </div>
  );
}
