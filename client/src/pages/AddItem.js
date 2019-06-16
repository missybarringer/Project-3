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

    displayItem = event => {
        event.preventDefault();
        // if (this.state.query) {
        //     API.searchGoogle(this.state.query)
        //         .then(res => {
        //             console.log(res.data.items);
        //             this.setState({ books: res.data.items })
        //         })
        //         // .then(res => this.loadBooks())
        //         .catch(err => console.log(err));
        // }
    };

    saveBtn = (id, category, name, quantity, notes) => {
        API.saveItem({
            _id: id,
            category: category,
            name: name,
            quantity: quantity,
            notes: notes
        })
            .then(res => alert("Item saved", res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-4">
                        <h3>Add Item</h3>
                        <Form>
                            <Form.Group controlId="formCategory">
                                <Form.Label>Item Category</Form.Label>
                                <Form.Control as="select">
                                    <option>Cleaning Supplies</option>
                                    <option>General Household</option>
                                    <option>Groceries</option>
                                    <option>Auto</option>
                                    <option>Bills</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formName">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Item Name"
                                    value={this.state.query}
                                    name="query"
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="formNotes">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control 
                                    type="number"
                                    placeholder="Quantity"
                                />
                            </Form.Group>
                            <Form.Group controlId="formNotes">
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
                                onClick={this.displayItem}
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
                                        btnFunc={this.saveBtn}
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