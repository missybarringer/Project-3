import React from "react";
import { VictoryPie, VictoryTheme, VictoryChart, VictoryLabel } from "victory";

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

  const styles = {
    parent: { maxWidth: "45%", maxHeight: "50%" },
    backgroundColor: "lightgrey",
    labels: { fill: "black", fontSize: 15, fontWeight: "bold" }
  };

  return (
    <VictoryPie
      domainPadding={5}
      height={800}
      width={800}
      padAngle={3}
      cornerRadius={25}
      // colorScale={["crimson", "lightgrey"]}
      data={pieData}
      x="category"
      y="category"
      style={styles}
      colorScale={["firebrick", "lightgrey", "crimson"]}
    />
  );
};

export default PieChart;
