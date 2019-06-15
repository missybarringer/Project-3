import React, { Component } from 'react';
import { Col, Row, Container, Button, Form } from "react-bootstrap";
import API from "../utils/TaskAPI"
import Task from '../components/Task';


class Search extends Component {
    state = {
        tasks: [],
        query: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // searchTask = event => {
    //     event.preventDefault();
    //     if (this.state.query) {
    //         API.searchGoogle(this.state.query)
    //             .then(res => {
    //                 console.log(res.data.items);
    //                 this.setState({ tasks: res.data.items })
    //             })
    //             // .then(res => this.loadTasks())
    //             .catch(err => console.log(err));
    //     }
    // };

    saveBtn = (id, title, authors, description, link, image) => {
        API.saveTask({
            _id: id,
            title: title,
            authors: authors,
            description: description,
            link: link,
            image: image
        })
            .then(res => console.log("Task saved", res))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Form>
                            <Form.Group controlId="formGroupTask">
                                <Form.Label className="h3">Task search</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Task title, author or subject"
                                    value={this.state.query}
                                    name="query"
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={!(this.state.query)}
                                onClick={this.searchTask}
                            >
                                Search
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col size="md-12">
                        {this.state.tasks.length ? (
                            <div>
                                <h5>Search Results</h5>
                                {this.state.tasks.map(task => (
                                    <Task
                                        key={task.id}
                                        label="Save"
                                        id={task.id}
                                        title={task.volumeInfo.title}
                                        authors=
                                        {
                                            task.volumeInfo.authors ?
                                            task.volumeInfo.authors :
                                            ["No information"]
                                        }
                                        description={task.volumeInfo.description}
                                        link={task.volumeInfo.infoLink}
                                        image=
                                        {
                                            task.volumeInfo.imageLinks ?
                                                task.volumeInfo.imageLinks.thumbnail :
                                                "https://via.placeholder.com/100x150?text=image"
                                        }
                                        btnFunc={this.saveBtn}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h5>No Results to Display</h5>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;