import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/ItemAPI"
import Item from '../components/Item';

class SavedItems extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getItems()
            .then(res => {
                console.log(res.data)
                this.setState({ items: res.data })
            })
            .catch(err => console.log(err));
    };

    deleteBtn = (id) => {
        API.deleteItem(id)
            .then(res => {
                console.log("Item deleted\n", res)
                this.loadItems();
            })    
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
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
                                <h5>No Items Saved</h5>
                            )}
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default SavedItems;