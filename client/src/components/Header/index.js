import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <h1>Global Tech Nomad</h1>
      <nav className="navigation">
        <Link to="/">Home</Link>
        {Auth.loggedIn() ? (
          <>
            <Link to="Profile">Profile</Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
       
            <Button variant="primary" onClick={handleShow}>
             Login
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Box>
                  <form>
                    <label>Login</label>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "20ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                    
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                      />
                      <br />
                      <Button size="large" variant="contained" color="success">
                        Login
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Sign Up</Button>
              </Modal.Footer>
            </Modal>
            <Link to="/countries">Countries</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
