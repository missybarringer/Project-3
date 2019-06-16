import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TopNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Abode Organizer</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="align-right">
                    <Nav.Link href="/additem">Add Item</Nav.Link>
                    <Nav.Link href="/stock">Stock</Nav.Link>
                    <Nav.Link href="/chart">Chart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;