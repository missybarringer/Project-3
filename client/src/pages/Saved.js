import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/GoogleBooksAPI"
import Book from '../components/Book';

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                console.log(res.data)
                this.setState({ books: res.data })
            })
            .catch(err => console.log(err));
    };

    deleteBtn = (id) => {
        API.deleteBook(id)
            .then(res => {
                console.log("Book deleted\n", res)
                this.loadBooks();
            })    
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        {this.state.books.length ? (
                            <div>
                                <h5>Saved Books</h5>
                                {this.state.books.map(book => (
                                    <Book
                                        key={book._id}
                                        label="Delete"
                                        id={book._id}
                                        title={book.title}
                                        authors={book.authors}
                                        description={book.description}
                                        link={book.link}
                                        image={book.image}
                                        btnFunc={() => this.deleteBtn(book._id)}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h5>No books saved</h5>
                            )}
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default Saved;