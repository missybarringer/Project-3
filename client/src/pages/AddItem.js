import React, { Component } from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import API from "../utils/ItemAPI"
import Item from '../components/Item';


class Search extends Component {
    state = {
        items: [],
        query: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    saveBtn = (id, category, name, quantity, notes) => {
        API.saveItem({
            _id: id,
            category: category,
            name: name,
            quantity: quantity,
            notes: notes
        })
            .then(res => console.log("Item saved", res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <h3>Add Item</h3>
                        <Form>
                            <Form.Group controlId="formGroupItem">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Item Name"
                                    value={this.state.query}
                                    name="query"
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Notes</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows="3" 
                                />
                            </Form.Group>
                            <Button
                                variant="success"
                                type="submit"
                                // disabled={!(this.state.query)}
                                onClick={this.saveBtn}
                            >
                                Save
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col size="md-12">
                        {this.state.items.length ? (
                            <div>
                                <h5>Items Tracked</h5>
                                {this.state.items.map(item => (
                                    <Item
                                        key={item.id}
                                        label="Saved"
                                        id={item.id}
                                        category={item.category}
                                        name={item.name}
                                        quantity={item.quantity}
                                        notes={item.notes}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h5>No Items to Display</h5>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;