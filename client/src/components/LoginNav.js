import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const LoginNav = () => {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
            <img className="logo" src="../../images/logo.png" alt="abode logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

        <Navbar.Collapse className="justify-content-end">
            <Nav className="align-right">
                <Nav.Link href="/" className="text-center">
                    <img className="bounce" src="../../images/logo.png" alt="home" height="30px"/>
                    <br />
                    Login
                </Nav.Link>
                <Nav.Link href="/signup" className="text-center">
                    <img className="bounce" src="../../images/add.png" alt="add item" height="30px"/>
                    <br />
                    Sign Up
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
};

export default LoginNav;