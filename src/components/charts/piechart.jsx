import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

class PieChartComponent extends React.Component {
  COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
  pieData = [
    {
      name: "Tareas Creadas",
      value: 54.85
    },
    {
      name: "Tareas Asignadas",
      value: 47.91
    },
    {
      name: "Tareas ejecutadas",
      value: 16.85
    },
    {
      name: "Tareas Finalizadas",
      value: 16.14
    }
  ];

  CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffffff",
            padding: "35px",
            border: "1px solid #cccc"
            }}
        >
          <label>{`${payload[0].name} : ${payload[0].value.toFixed(2)}%`}</label>
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <PieChart width={300} height={200}>
        <Pie
          data={this.pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"  
          outerRadius={150}
          fill="#8884d8"
        >
          {this.pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={this.COLORS[index % this.COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<this.CustomTooltip />} />
        <Legend />
      </PieChart>
    );
  }
}

export default PieChartComponent;

