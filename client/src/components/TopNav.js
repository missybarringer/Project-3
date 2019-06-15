import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TopNav = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Abode Organizer</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/search">Add Item</Nav.Link>
                <Nav.Link href="/saved">Saved</Nav.Link>
                <Nav.Link href="/saved">Stock</Nav.Link>
                <Nav.Link href="/saved">Chart</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default TopNav;