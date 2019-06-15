import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Header = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1 className="text-center">Abode Organizer</h1>
                <p className="text-center lead">
                    Search and save items of interest
                </p>
            </Container>
        </Jumbotron>
    );
};

export default Header;