import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "01/01/2024",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "02/01/2024",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "03/01/2024",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "04/01/2024",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "05/01/2024",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "06/01/2024",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "07/01/2024",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function BarChartComponent() {
  return (
    <BarChart
      width={300}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      <Bar dataKey="amt" stackId="a" fill="#000000" />
    </BarChart>
  );
}