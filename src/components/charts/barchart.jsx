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
    name: "Agosto 2023",
    Iniciadas: 4000,
    Problemas: 2400,
    Terminadas: 2400
  },
  {
    name: "Septiembre 2023",
    Iniciadas: 3000,
    Problemas: 1398,
    Terminadas: 2210
  },
  {
    name: "Octubre 2023",
    Iniciadas: 2000,
    Problemas: 9800,
    Terminadas: 2290
  },
  {
    name: "Noviembre 2023",
    Iniciadas: 2780,
    Problemas: 3908,
    Terminadas: 2000
  },
  {
    name: "Diciembre 2023",
    Iniciadas: 1890,
    Problemas: 4800,
    Terminadas: 2181
  },
  {
    name: "Enero 2024",
    Iniciadas: 2390,
    Problemas: 3800,
    Terminadas: 2500
  },
  {
    name: "Febrero 2024",
    Iniciadas: 3490,
    Problemas: 4300,
    Terminadas: 2100
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
      <Bar dataKey="Iniciadas" stackId="a" fill="#8884d8" />
      <Bar dataKey="Problemas" stackId="a" fill="#82ca9d" />
      <Bar dataKey="Terminadas" stackId="a" fill="#000000" />
    </BarChart>
  );
}