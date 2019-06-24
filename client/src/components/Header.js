import React, { Component } from 'react';
import { Jumbotron, Container, Button } from "react-bootstrap";


class Header extends Component {

constuctor() {
    this.handlePageChange = this.handlePageChange.bind(this);
    }

handlePageChange() {
    window.location = "/additem";
}

render() {
    
    var divStyle = {
        margin: "20px",
        display: "inline"
    }

    return (
        <Jumbotron fluid>
            <Container className="text-center lead">
                {/* <h1 className="text-center">Abode Organizer</h1> */}
                <p>
                Abode Organizer is a home organization helper tool that 
                helps families keep track of recurring activities or home 
                item purchases that need to be done.
                </p>
                <br />
                    <div>
                        <h4 style={divStyle}>GET STARTED:</h4>
                            <Button
                                variant="primary"
                                type="submit"
                                // not yet working
                                onClick={this.handlePageChange}
                            >
                                Add Items
                            </Button>
                    </div>
            </Container>
        </Jumbotron>
    );
};
}
export default Header;