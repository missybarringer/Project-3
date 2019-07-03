import React from 'react';
import { Card, Accordion, Button } from "react-bootstrap";

const ItemList = props => {

    return (
        <Accordion>
            <Card className="stock-card">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Card.Title>{props.name}</Card.Title>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text>Category: {props.category}</Card.Text>
                        <Card.Text>Quantity Remaining: {props.quantity}</Card.Text>
                        <Card.Text>Restock Date: {props.date}</Card.Text>
                        <Card.Text>Notes: {props.notes}</Card.Text>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default ItemList;