import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../index.css";

export default function superadmin() {
  return (
    <div class="body">
      <h4>Super Admin View</h4>
      <p class="topnav">
        <Link to="#">
          <Button className="btn-secondary">Manage User</Button>
        </Link>{" "}
        <Link to="manageInstitution">
          <Button className="btn-secondary">Manage Institution</Button>
        </Link>{" "}
        <Link to="homepage">
          <Button className="button">EDUBD Homepage</Button>
        </Link>
      </p>
    </div>
  );
}
