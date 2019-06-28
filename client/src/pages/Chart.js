import React from "react";
import { Col, Row } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import DropdownList from "react-widgets/lib/DropdownList";

// import Item from '../components/Item';

// const data = [
//     {quarter: 1, earnings: 13000},
//     {quarter: 2, earnings: 16500},
//     {quarter: 3, earnings: 14250},
//     {quarter: 4, earnings: 19000}
//   ];

const BarChart = props => {
  return (
    <div key={props.id} className="p-3 mb-3 bg-dark shadow rounded chart">
      <h1>Test Chart</h1>
      <VictoryChart
        style={{ parent: { maxWidth: "30%" } }}
        domainPadding={10}
        theme={VictoryTheme.material}
      >
        <VictoryBar
          data={[
            { employee: "Jane Doe", salary: 70 },
            { employee: "John Doe", salary: 20 }
          ]}
          x="employee"
          y="salary"
        />
      </VictoryChart>
    </div>
  );
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
