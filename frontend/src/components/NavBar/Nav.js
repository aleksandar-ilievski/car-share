import React from "react";
import {Link} from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav>
        <ul className="menu-bar" >
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <li>How it works</li>
            </Link>
            <Link to="/carlist" style={{ textDecoration: 'none' }}>
                <li>List your car</li>
            </Link>
            <Link to="/auth" style={{ textDecoration: 'none' }}>
                <li>Sign in</li>
            </Link>
        </ul>
    </nav>
  );
}
export default Nav;
