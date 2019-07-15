import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Media from "react-bootstrap/Media";

const ItemList = props => {
  return (
    <div key={props.id} className="p-3 mb-3 bg-secondary shadow rounded">
      <Media className="my-2">
        <img width={100} src={props.image} alt={props.title} />
        <Media.Body className="ml-3">
          <Row>
            <Col sm={9}>
              <h5>{props.name}</h5>
            </Col>
            <Col
              sm={3}
              className="d-flex justify-content-end itemColor rounded"
            >
              <h5>Quantity Remaining: {props.quantity}</h5>
            </Col>
          </Row>
          <Row className="pl-3">
            <p className="pr-3">Category: {props.category}</p>
            <p className="pr-3">Notes: {props.notes}</p>
          </Row>
          <Row>
            <button
              style={{ height: "15px", fontWeight: "bold" }}
              variant="danger"
              onClick={() => this.deleteBtn(props.item._id)}
            >
              Delete Item
            </button>
          </Row>
        </Media.Body>
      </Media>
    </div>
  );
};

export default ItemList;
