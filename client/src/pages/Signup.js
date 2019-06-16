import React, { Component } from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";

class Signup extends Component {

render() {
    return (
        <Container>
            <Row>
                <Col size="md-4">
                    <Form>
                    <Form.Group as={Row} controlId="formPlaintextFirstname">
                            <Form.Label column sm="2">
                            First Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control placeholder="First Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextLastname">
                            <Form.Label column sm="2">
                            Last Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control placeholder="Last Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="email" placeholder="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Create Password
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Button
                            variant="success"
                            type="submit"
                        >
                            Signup
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
  } 
}

export default Signup;