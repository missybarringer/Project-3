import React from 'react';
import { Col, Row, Card, Container, Accordion, Button } from "react-bootstrap";
import Media from 'react-bootstrap/Media';

const ItemList = props => {

    return (
        // <div key={props.id} className="shadow rounded" style={{fontSize: ".75rem"}}>
        //     <Media className="my-2">
        //         <Media.Body
        //             className="ml-3"
        //         >
        //             <Row>
        //                 <Col sm={9}>
        //                     <h5>{props.name}</h5>
        //                 </Col>
        //                 <Col sm={3} className="d-flex justify-content-end itemColor rounded">
        //                     <h5>Quantity Remaining: {props.quantity}</h5>
        //                 </Col>
        //             </Row>
        //             <Row className="pl-3">Category: {props.category}</Row>
        //             <Row className="pl-3">Notes: {props.notes}</Row>
        //             <Row className="pl-3">Restock Date: {props.date}</Row>
                    
        //         </Media.Body>
        //     </Media>
        // </div>

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
                        <Card.Text>Notes: {props.notes}</Card.Text>
                        <Card.Text>Quantity Remaining: {props.quantity}</Card.Text>
                        <Card.Text>Restock Date: {props.date}</Card.Text>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default ItemList;