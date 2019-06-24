import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const TopNav = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">
                <img src="../../images/logo.png" alt="abode logo" height="80px" width="130px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Text className="align-center">
                <h1>ABODE</h1>
            </Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="align-right">
                    <Nav.Link href="/additem" className="text-center">
                        <img src="../../images/add.png" alt="add item" height="30px"/>
                        <br />
                        Add Item
                    </Nav.Link>
                    <Nav.Link href="/stock" className="text-center">
                        <img src="../../images/stock.png" alt="sock" height="30px"/>
                        <br />
                        Stock
                    </Nav.Link>
                    <Nav.Link href="/chart" className="text-center">
                        <img src="../../images/chart-line-gr.png" alt="chart" height="30px"/>
                        <br />
                        Chart
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNav;