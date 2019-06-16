import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/ItemAPI"
import Item from '../components/Item';

class Saved extends Component {
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
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        {this.state.items.length ? (
                            <div>
                                <h5>Saved Items</h5>
                                {this.state.items.map(item => (
                                    <Item
                                        key={item._id}
                                        label="Delete"
                                        id={item._id}
                                        title={item.title}
                                        authors={item.authors}
                                        description={item.description}
                                        link={item.link}
                                        image={item.image}
                                        btnFunc={() => this.deleteBtn(item._id)}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h5>No items saved</h5>
                            )}
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Saved;