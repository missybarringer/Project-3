import React from 'react';
import { Col, Row } from "react-bootstrap";
import Media from 'react-bootstrap/Media'

const Book = props => {

    return (
        <div key={props.id} className="p-3 mb-3 bg-light shadow rounded">
            <Media className="my-2">
                <img
                    width={100}
                    src={props.image}
                    alt={props.title}
                />
                <Media.Body
                    className="ml-3"
                >
                    <Row>
                        <Col sm={9}>
                            <h5>{props.title}</h5>
                        </Col>
                        <Col sm={3} className="d-flex justify-content-end">
                            <a
                                href={props.link}
                                data-id={props.id}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-outline-secondary mr-1">
                                View
                            </a>

                            <button
                                className={"btn btn-sm " +
                                    ((props.label === "Save") ?
                                    "btn-outline-primary" :
                                    "btn-outline-danger")
                                }
                                data-id={props.id}
                                onClick={() => {
                                    props.btnFunc(
                                        props.id,
                                        props.title,
                                        props.authors,
                                        props.description,
                                        props.link,
                                        props.image
                                    )
                                    console.log(props.id)
                                }}>
                                {props.label}
                            </button>
                        </Col>
                    </Row>
                    <Row className="pl-3">
                        <p className="pr-3">Author(s): {props.authors.join(", ")}</p>
                        <p className="pr-3">{props.description}</p>
                    </Row>
                </Media.Body>
            </Media>
        </div>
    );
};

export default Book;