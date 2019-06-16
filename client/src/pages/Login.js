import React, { Component } from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";

class Login extends Component {

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
                            variant="success"
                            type="submit"
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
