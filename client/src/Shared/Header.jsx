import React from "react";
import { Link, Route } from "react-router-dom";
import { useState } from 'react';
import './header.css'

export default function Header() {
const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click)
  }



    

  return (
    <div>
      <Link to="/">
        <h1>FLUTTER</h1>
      </Link>
      
      <Link to="/login">
        <h3>LOG IN</h3>
      </Link>

      <div class="dropdown">
        <button onClick={handleClick} className="dropbtn">Menu</button>
  <div id="myDropdown" className={click ? "show" : "dropdown-content"}>
    <Link to="/birds/type">Birds!</Link>
    <br/>
    <Link to="/birds/create">Add a Bird</Link>
  </div>
</div>

      <Link to="/register">
        <h3>Register</h3>
      </Link>
      <Link to="/birds">
        Bird Friends
      </Link>
    </div>
  );
}
