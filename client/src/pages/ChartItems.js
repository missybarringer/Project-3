import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import API from "../utils/ChartAPI";
// import Item from '../components/Chart';
import BarChart from "./Chart";
import PieChart from "./PieChart";
import { VictoryChart, VictoryTheme } from "victory";

class ChartItems extends Component {
  state = {
    items: [],
    pieVisible: false,
    barVisible: false
  };

  componentDidMount = () => {
    this.loadItems();
  };

  loadItems = () => {
    API.getItems()
      .then(res => {
        console.log(res.data);
        this.setState({ items: res.data });
      })
      .catch(err => console.log(err));
  };

  //clickhandlers for conditional pie and bar visibility
  togglePie = () => {
    const doesShow = this.state.pieVisible;
    this.setState({ pieVisible: !doesShow });
  };

  toggleBar = () => {
    const doesShow = this.state.barVisible;
    this.setState({ barVisible: !doesShow });
  };

  render() {
    //variables that conditionally display the Pie and Bar components if
    // pieVisible and barVisible are true.  Triggered by button click handler.
    let showPie = null;
    let showBar = null;

    if (this.state.pieVisible) {
      showPie = (
        <div>
      <PieChart/>
        </div>
      )
    }

    if (this.state.barVisible) {
      showPie = (
        <div>
          <BarChart/>
        </div>
      );
    }

    return (
      <Container>
        <button onClick={this.togglePie}>Pie Chart</button>
        <button onClick={this.toggleBar}>Bar Chart</button>

        {showPie}

        <br />
        
        {showBar}
      </Container>
    );
  }
}

export default ChartItems;
