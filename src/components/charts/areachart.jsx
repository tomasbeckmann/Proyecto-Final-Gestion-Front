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
