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
    name: "15/02/2024",
    Documental: 2,
    Tareas_operativas: 0
      },
  {
    name: "16/02/2024",
    Documental: 2,
    Tareas_operativas: 0
  },
  {
    name: "17/02/2024",
    Documental: 2,
    Tareas_operativas: 1
  },
  {
    name:"18/02/2024",
    Documental: 3,
    Tareas_operativas: 2
  },
  {
    name: "19/02/2024",
    Documental: 3,
    Tareas_operativas: 2
  },
  {
    name: "20/02/2024",
    Documental: 3,
    Tareas_operativas: 3
  },{
    name: "21/02/2024",
    Documental: 4,
    Tareas_operativas: 3
  },
  {
    name: "22/02/2024",
    Documental: 5,
    Tareas_operativas: 3
  }
];

export default function BarChartComponent() {
  return (
    <BarChart
      width={500}
      height={250
      }
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
      
      <Bar dataKey="Documental" stackId="a" fill="#82ca9d" />
      <Bar dataKey="Tareas_operativas" stackId="a" fill="#000000" />
    </BarChart>
  );
}