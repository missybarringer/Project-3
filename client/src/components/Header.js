import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Header = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1 className="text-center">React Google Books Search</h1>
                <p className="text-center lead">
                    Search and save books of interest
                </p>
            </Container>
        </Jumbotron>
    );
};

export default Header;