import React, { Component } from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";

class Login extends Component {

constructor(props, context) {
    super(props, context);

    this.handlePageChange = this.handlePageChange.bind(this);
}

handlePageChange() {
    window.location = "/home"
}

render() {
    return (
        <Container>
            <Row>
                <Col size="md-4">
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Password
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Button
                            variant="danger"
                            onClick={this.handlePageChange}
                        >
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
  } 
}

export default Login;
