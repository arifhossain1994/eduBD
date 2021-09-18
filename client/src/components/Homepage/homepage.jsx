import React from "react";
import "../index.css";
import "./homepage.css";

export default function Homepage() {
  return (
    <div class="body">
      <header class="bodyheader">
        <h1>EDUBD</h1>
      </header>
      <p class="topnav">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#assignments">Assignments</a>
      </p>
    </div>
  );
}
