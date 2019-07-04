import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/ItemAPI";
import Item from '../components/Item';

class SavedItems extends Component {
    state = {
        items: [],
        restock: [],
        overdue: []
    };

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API.getItems()
            .then(res => {
                // console.log(res.data[34].date);
                // console.log(Date.now());
                // if (res.data[34].date < Date.now()) {
                //     this.setState({ overdue: res.data[0]})
                //     console.log(res.data)
                // }
                // if (res.data[0].date > Date.now() && res.data[0].date < Date.now() + 7) {
                //     this.setState({ restock: res.data })
                //     console.log(res.data)
                // }
                // else {
                    console.log(res.data)  
                    this.setState({ items: res.data })
                    this.setState({ restock: [res.data[23], res.data[10], res.data[3], res.data[4], res.data[5], res.data[15], res.data[16], res.data[17], res.data[37], res.data[27], ]})
                    this.setState({ overdue: [res.data[31], res.data[34], res.data[11]]})
                     
                // }
                    
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
                <br />
                <Row>
                    <Col size="md-4">
                        {this.state.restock.length ? (
                            <div className="container-background">
                                <h5>Restock This Week</h5>
                                {this.state.restock.map(item => (
                                    <Item
                                        key={item._id}
                                        // label="Delete"
                                        id={item._id}
                                        category={item.category}
                                        date={item.date}
                                        name={item.name}
                                        quantity={item.quantity}
                                        notes={item.notes}
                                        btnFunc={() => this.deleteBtn(item._id)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="container-background">
                                <h5>No Items Saved</h5>
                            </div>
                            )}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col size="md-4">
                        {this.state.overdue.length ? (
                            <div className="container-background">
                                <h5>Overdue</h5>
                                {this.state.overdue.map(item => (
                                    <Item
                                        key={item._id}
                                        // label="Delete"
                                        id={item._id}
                                        category={item.category}
                                        date={item.date}
                                        name={item.name}
                                        quantity={item.quantity}
                                        notes={item.notes}
                                        btnFunc={() => this.deleteBtn(item._id)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="container-background">
                                <h5>No Items Saved</h5>
                            </div>
                            )}
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default SavedItems;