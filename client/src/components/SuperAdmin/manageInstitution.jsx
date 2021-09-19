import React from "react";
import "../index.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function manageInstitution() {
  return (
    <div class="body">
      <header class="bodyheader">
        <h1>EDUBD</h1>
      </header>
      <p>Super Admin View</p>
      <p>Add New Institution</p>

      <form class="form">
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Address:
          <input type="text" />
        </label>
        <label>
          Phone:
          <input type="tel" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <table class="table">
        <tr>
          <td>Name</td>
          <td>Address</td>
          <td>Phone</td>
        </tr>
      </table>
    </div>
  );
}
