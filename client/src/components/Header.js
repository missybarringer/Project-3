import React, { Component } from 'react';
import { Jumbotron, Container, Button, Modal } from "react-bootstrap";


class Header extends Component {

constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handlePageChange() {
    window.location = "/additem";
 }

render() {
    
    // var divStyle = {
    //     margin: "20px",
    //     display: "inline"
    // }

    return (
        // <Jumbotron fluid>
        //     <Container className="text-center lead jumbotron-text">
        //         {/* <h1 className="text-center">Abode Organizer</h1> */}
        //         {/* <img src="../../images/logo.png" alt="abode logo" height="300px" /> */}
        //         <br />
        //         <p>
        //         Abode Organizer is a home organization helper tool that 
        //         helps families keep track of recurring activities or home 
        //         item purchases that need to be done.
        //         </p>
        //         <br />
        //             <div>
        //                 <h4 style={divStyle}>GET STARTED:</h4>
        //                     <Button
        //                         variant="dark"
        //                         type="submit"
        //                         // not yet working
        //                         onClick={this.handlePageChange}
        //                     >
        //                         Add Items
        //                     </Button>
        //             </div>
        //     </Container>
        // </Jumbotron>

        <Container className="text-center lead">
            <br />
            <>
                <Button style={{height:"75px", fontWeight: "bold"}} variant="danger" onClick={this.handleShow}>
                GET STARTED
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>GET STARTED</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Abode Organizer is a home organization helper tool that 
                    helps families keep track of recurring activities or home 
                    item purchases that need to be done.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>
                    <Button variant="dark" onClick={this.handlePageChange}>
                    Add Items
                    </Button>
                </Modal.Footer>
                </Modal>
            </>
        </Container>
    );
};
}
export default Header;