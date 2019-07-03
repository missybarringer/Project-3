import React from "react";
import { VictoryPie, VictoryTheme, VictoryContainer } from "victory";

const PieChart = props => {
  let pieData = [];

  props.data.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = { category: curr.category, quantity: 0 };
      pieData.push(acc[curr.category]);
    }
    acc[curr.category].quantity += curr.quantity;
    return acc;
  }, {});

  return (
    <VictoryContainer
      theme={VictoryTheme.material}
      domainPadding={10}
      style={{ parent: { maxWidth: "35%" }, display: "inline" }}
    >
      <VictoryPie
        data={pieData}
        x="pieData.category"
        y="pieData.quantity"
        labels={pieData => pieData.category}
        colorScale={["firebrick", "salmon"]}
      />
    </VictoryContainer>
  );

  return "<Pie Chart Will Render Here....Eventually";
};

export default PieChart;
