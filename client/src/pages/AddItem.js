import React, { Component } from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import API from "../utils/ItemAPI"
import Item from '../components/Item';
import { Input, TextArea } from "../components/Form";


class Search extends Component {
    state = {
        items: [],
        id: "",
        category: "",
        name: "",
        quantity: "",
        notes: "",
        date: "",
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
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Category " + this.state.category + "Name " + this.state.name + "quant " + this.state.quantity + "notes " + this.state.notes + "date " + this.state.date);
        API.saveItem({
            category: this.state.category,
            name: this.state.name,
            quantity: this.state.quantity,
            notes: this.state.notes,
            date: this.state.date
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
                            <Input
                            value={this.state.category}
                            onChange={this.handleInputChange}
                            name="category"
                            placeholder="Category (required)"
                            />
                            <Input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="Name (required)"
                            />
                            <Input
                            value={this.state.quantity}
                            onChange={this.handleInputChange}
                            name="quantity"
                            placeholder="Quantity (required)"
                            />
                            <TextArea 
                            value={this.state.notes}
                            onChange={this.handleInputChange}
                            name="notes" 
                            placeholder="Notes (Optional)" 
                            rows="3"
                            />
                            <Button
                                variant="dark"
                                type="submit"
                                // disabled={!(this.state.query)}
                                // used to call saveBtn on line 39 with API returned info MMB
                                onClick={this.handleFormSubmit}
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
                                        label="Saved"
                                        category={item.category}
                                        name={item.name}
                                        quantity={item.quantity}
                                        notes={item.notes}
                                        date={item.date}
                                        btnFunc={this.handleFormSubmit}
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