import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Item from '../components/Item';

class Stock extends Component {
    state = {
        items: []
    };

    render() {
        return (
            <Container>
                <br />
                <Row>
                    <Col size="md-4">
                        {this.state.items.length ? (
                            <div>
                                <h5>Saved Items</h5>
                                {this.state.items.map(item => (
                                    <Item
                                        key={item._id}
                                        label="Delete"
                                        id={item._id}
                                        category={item.category}
                                        name={item.name}
                                        quantity={item.quantity}
                                        notes={item.notes}
                                        btnFunc={() => this.deleteBtn(item._id)}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h5>All Items Out of Stock</h5>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }

    
}

export default Stock;