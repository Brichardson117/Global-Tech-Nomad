import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Button from "react-bootstrap/Button";
import SignUp from "../SignUp";
import Login from "../Login";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };


  return (
    <div className="header">
      <h1>Global Tech Nomad</h1>
      <nav className="navigation">
        <Button>
          <Link to="/">Home</Link>
        </Button>

        {Auth.loggedIn() ? (
          <>
            <Link to="Profile">Profile</Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
          <Button>
            <Login/>
          </Button>
            <Button variant="primary">
              <SignUp />
            </Button>
            <Button>
              <Link to="/countries">Countries</Link>
            </Button>
            
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
