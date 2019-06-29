import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/ChartAPI"
// import Item from '../components/Chart';
import BarChart from './Chart';


class ChartItems extends Component {
    state = {
        items: []
    };

    componentDidMount = () => {
        this.loadItems();
    }

    loadItems = () => {
        API.getItems()
            .then(res => {
                console.log(res.data)
                this.setState({ items: res.data })
                // count = this.state.items.length;
                // console.log(count);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <br />
                <BarChart/>
            </Container>
        );
    }
}

export default ChartItems;