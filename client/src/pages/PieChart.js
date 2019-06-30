import React from "react";
import { VictoryPie, VictoryTheme } from "victory";

const PieChart = props => {
  let pieData = []
  console.log(props.data);
  props.data
    .reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = { category: curr.category, quantity: 0 }
       pieData.push(acc[curr.category])
      }
      acc[curr.category].quantity += curr.quantity
      return acc
    }, {})

  // return (
  //   <VictoryPie
  //       data={pieData}
  //     x={pieData.category}
  //     y={pieData.quantity}
  //     style={{ parent: { maxWidth: "35%" }, display: "inline" }}
  //     domainPadding={10}
  //     theme={VictoryTheme.material}
  //     colorScale={["firebrick", "salmon"]}
  //     innerRadius={25}
  //   />
  // );
  return (
    "<Pie Chart Will Render Here....Eventually"
  )
};

export default PieChart;
