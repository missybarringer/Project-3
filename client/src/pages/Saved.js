import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/TaskAPI"
import Task from '../components/Task';

class Saved extends Component {
    state = {
        tasks: []
    };

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks = () => {
        API.getTasks()
            .then(res => {
                console.log(res.data)
                this.setState({ tasks: res.data })
            })
            .catch(err => console.log(err));
    };

    deleteBtn = (id) => {
        API.deleteTask(id)
            .then(res => {
                console.log("Task deleted\n", res)
                this.loadTasks();
            })    
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        {this.state.tasks.length ? (
                            <div>
                                <h5>Saved Tasks</h5>
                                {this.state.tasks.map(task => (
                                    <Task
                                        key={task._id}
                                        label="Delete"
                                        id={task._id}
                                        title={task.title}
                                        authors={task.authors}
                                        description={task.description}
                                        link={task.link}
                                        image={task.image}
                                        btnFunc={() => this.deleteBtn(task._id)}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h5>No tasks saved</h5>
                            )}
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Saved;