import React from "react";
import { Col, Row } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import { VictoryBar, VictoryTheme} from "victory";

const BarChart = props => {
  let barData = []

  // props.data
  //   .reduce((acc, curr) => {
  //     if (!acc[curr.category]) {
  //       acc[curr.category] = { category: curr.category, quantity: 0 }
  //      barData.push(acc[curr.category])
  //     }
  //     acc[curr.category].quantity += curr.quantity
  //     return acc
  //   }, {})

  // return (
  //       <VictoryBar
  //         data={barData}
  //         x={barData.quantity}
  //         y={barData.category}
  //         style={{ parent: { maxWidth: "30%" }, display:"inline"}}
  //         domainPadding={10}
  //         // theme={VictoryTheme.material}
  //         colorScale={["crimson"]}
  //       />
  // );
  return ("<Bar Chart Will Render Here....Eventually")
};

// dropDownList() {
// let { DropdownList } = ReactWidgets;
// let people = listOfPeople();

// let widgets = (
//   <div>
//     <DropdownList
//       data={items}
//       textField='name'
//       groupBy='category'
//     />

//   </div>
// )
// }
// <VictoryAxis tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
// />
// <VictoryAxis dependentAxis tickFormat={(x) => (`$${x / 1000}k`)}
// />

export default BarChart;
