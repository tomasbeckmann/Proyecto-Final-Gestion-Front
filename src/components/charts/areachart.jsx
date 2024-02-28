import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "15/02/2024",
    Iniciadas: 2,
    Problemas: 0,
    Terminadas: 0
  },
  {
    name: "16/02/2024",
    Iniciadas: 2,
    Problemas: 0,
    Terminadas: 0
  },
  {
    name:  "17/02/2024",
    Iniciadas: 2,
    Problemas: 1,
    Terminadas: 0
  },
  {
    name:  "18/02/2024",
    Iniciadas: 3,
    Problemas: 0,
    Terminadas: 1
  },
  {
    name:"19/02/2024",
    Iniciadas: 3,
    Problemas: 1,
    Terminadas: 1
  },
  {
    name: "20/02/2024",
    Iniciadas: 4,
    Problemas: 1,
    Terminadas: 2
  },{
    name: "21/02/2024",
    Iniciadas: 5,
    Problemas: 1,
    Terminadas: 2
  },
  {
    name:  "22/02/2024",
    Iniciadas: 5,
    Problemas: 1,
    Terminadas: 3
  }
];

export default function AreaChartComponent() {
  return (
    <AreaChart
      width={500}
      height={250}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="bottom" height={36} />
      <Area
        type="monotone"
        dataKey="Iniciadas"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="Problemas"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="Terminadas"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  );
}
