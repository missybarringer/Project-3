import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
// import Item from '../components/Item';

class Chart extends Component {
    state = {
        items: []
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-4">
                        <h3>Placeholder for Charts</h3>
                    </Col>
                </Row>
            </Container>
        );
    }


}

export default Chart;