import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <Link to="/">
        <h1>FLUTTER</h1>
      </Link>

      {currentUser ? (
        <h1>{`Welcome ${currentUser?.username}!`}</h1>
      ) : (
        <h1>Welcome!</h1>
      )}

      <div className="dropdown">
        <button onClick={handleClick} className="dropbtn">
          Menu
        </button>
        <div id="myDropdown" className={click ? "show" : "dropdown-content"}>
          <Link to='/birds/type'>Birds!</Link>
          <br />
          {currentUser ? <Link to="/birds/create">Add a Bird</Link> : null}
          <br />
          {currentUser ? null : <Link to="/register">Register</Link>}
          <br />
          <Link to="/birds">Bird Friends</Link>
          <br />
          {currentUser ? null : <Link to="/login">LOG IN</Link>}
          <br/>
          {currentUser ? <button onClick={handleLogout}>Logout</button> : null
          }
        </div>
      </div>
      
    </div>
  );
}
