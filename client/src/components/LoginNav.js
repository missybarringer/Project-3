import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const LoginNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Abode Organizer</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="align-right">
                    <Nav.Link href="/additem">Login</Nav.Link>
                    <Nav.Link href="/stock">Signup</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default LoginNav;