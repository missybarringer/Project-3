import React from "react";
import { Col, Row } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";

const BarChart = props => {
  let barData = [];

  props.data.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = { category: curr.category, quantity: 1 };
      barData.push(acc[curr.category]);
    }
    acc[curr.category].quantity += curr.quantity;
    return acc;
  }, {});

  const styles = {
    parent: { maxWidth: "40%", maxHeight: "30%" },
    data: { fill: "#c43a31" },
    display: "inline",
    backgroundColor: "lightgrey"
  };

  console.log(barData);
  return (
    <VictoryChart 
    theme={VictoryTheme.material} 
    colorScale={["crimson"]}
    height={500}
    width={1000}
    domainPadding={10}>

      <VictoryBar
        data={barData}
        y="quantity"
        labels={barData => barData.category}
        style={styles}
      />
    </VictoryChart>
  );

};


export default BarChart;
