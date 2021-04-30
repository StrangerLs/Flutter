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

    <div className='header'>
      <div className="dropdown">
        <button onClick={handleClick} className="dropbtn">
          Menu
        </button>
      </div>
      <div id='flutter'>

      <Link to="/">
        <h1>FLUTTER</h1>
      </Link>
      </div>

      <div id='greeting'>
      {currentUser ? (
        <h1>{`Welcome, ${currentUser?.username}!`}</h1>
      ) : (
        <h1>Welcome!</h1>
      )}

      </div>

      
    </div>
        <div id="myDropdown" className={click ? "show" : "dropdown-content"}>
          <Link to="/birds">Bird Friends</Link>
          <br />
          <Link to='/birds/type/Macaw'>Macaws</Link>
          <br/>
          <Link to='/birds/type/African Grey'>African Greys</Link>
          <br/>
          <Link to='/birds/type/Conure'>Conures</Link>
          <br/>
          <Link to='/birds/type/Cockatoo'>Cockatoos</Link>
          <br />
          {currentUser ? <Link to="/birds/create">Add a Bird</Link> : null}
          <br />
          {currentUser ? null : <Link to="/register">Register</Link>}
          <br />
          
          {currentUser ? null : <Link to="/login">LOG IN</Link>}
          <br/>
          {currentUser ? <button id='menu' onClick={handleLogout}>Logout</button> : null
          }
        </div>
    </div>
  );
}
