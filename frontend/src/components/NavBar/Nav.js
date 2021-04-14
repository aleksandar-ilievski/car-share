import React, { useState, useEffect } from "react";
import {Link, useLocation, useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as actionType from '../../constants/actionType';
import { Avatar } from '@material-ui/core';
import decode from 'jwt-decode';
import "./nav.css";

function Nav() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/');
        setUser(null);
      };

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

  return (
    <header className="navbar">
        <ul className="menu-bar" >
            <Link className="logo" to="/" style={{ textDecoration: 'none' }}>
                <li><span style={{
                    fontFamily: 'Kaushan Script',
                    fontSize:' 25px',
                    fontWeight: 'bold',
                    color: 'rgb(151,6,44)'
                }}><span style={{color: 'white'}}>car</span>Share</span></li>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <li>How it works</li>
            </Link>
            <Link to="/carlist" style={{ textDecoration: 'none' }}>
                <li>Listed Cars</li>
            </Link>
            {user?.result ? (
                <ul id="menu">
                    <li><Link to="/profile" style={{ textDecoration: 'none', minWidth: "100px" }}><Avatar style={{color: 'rgb(151,6,44)'}}>{user?.result.name.charAt(0)}</Avatar></Link>
                        <ul>
                        <Link to="/profile" style={{ textDecoration: 'none', minWidth: "100px" }}>
                        <li><button>{user.result.name}</button></li>
                        </Link>
                        <Link to="/rental" style={{ textDecoration: 'none', minWidth: "100px" }}>
                        <li><button>Your Rentals</button></li>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', minWidth: "100px" }}>
                        <li><button onClick={logout} >Log out</button></li>
                        </Link>
                        </ul>
                    </li>
                </ul>
            ):(
            <Link to="/auth" style={{ textDecoration: 'none' }}>
                <li>Sign in</li>
            </Link>
            )}
        </ul>
    </header>
  );
}
export default Nav;
