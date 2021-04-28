import React from "react";
import { Link, Route } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h1>FLUTTER</h1>
      </Link>
      <button>
        <h3>MENU</h3>
      </button>
      <Link to="/login">
        <h3>LOG IN</h3>
      </Link>

      <Link to="/register">
        <h3>Register</h3>
      </Link>
      
    </div>
  );
}
