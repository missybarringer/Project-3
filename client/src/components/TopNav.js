import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TopNav = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/home">
                <img className="logo" src="../../images/logo.png" alt="abode logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

            <Navbar.Collapse className="justify-content-end">
                <Nav className="align-right">
                    <Nav.Link href="/home" className="text-center">
                        <img className="bounce" src="../../images/logo.png" alt="home" height="30px"/>
                        <br />
                        Home
                    </Nav.Link>
                    <Nav.Link href="/additem" className="text-center">
                        <img className="bounce" src="../../images/add.png" alt="add item" height="30px"/>
                        <br />
                        Add Item
                    </Nav.Link>
                    <Nav.Link href="/stock" className="text-center">
                        <img className="bounce" src="../../images/stock.png" alt="sock" height="30px"/>
                        <br />
                        Stock
                    </Nav.Link>
                    <Nav.Link href="/chart" className="text-center">
                        <img className="bounce" src="../../images/chart-line-gr.png" alt="chart" height="30px"/>
                        <br />
                        Chart
                    </Nav.Link>
                    <Nav.Link href="/" className="text-center">
                        <img className="bounce" src="../../images/logo.png" alt="logout" height="30px"/>
                        <br />
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;