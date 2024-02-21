import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Agosto 2023",
    Al_dia: 4000,
    Por_Vencer: 3000,
    Vencidos: 2400,
    
  },
  {
    name: "Septiembre 2023",
    Al_dia: 3000,
    Por_Vencer: 3000,
    Vencidos: 1398,
    
  },
  {
    name: "Octubre 2023",
    Al_dia: 2000,
    Por_Vencer: 3000,
    Vencidos: 9800,
    
  },
  {
    name: "Noviembre 2023",
    Al_dia: 2780,
    Por_Vencer: 3000,
    Vencidos: 3908,
    
  },
  {
    name: "Diciembre 2023",
    Al_dia: 1890,
    Por_Vencer: 3000,
    Vencidos: 4800,
    
  },
  {
    name: "Enero 2024",
    Al_dia: 2390,
    Por_Vencer: 3000,
    Vencidos: 3800,
    
  },
  {
    name: "Febrero 2024",
    Al_dia: 3490,
    Por_Vencer: 3000,
    Vencidos: 4300,
    
  }
];

export default function LineChartComponent() {
  return (
    <LineChart
      width={500}
      height={250}
      data={data}
      margin={{
        top: 5,
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
      <Line
        type="monotone"
        dataKey="Al_dia"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Por_Vencer" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Vencidos" stroke="#ff7300" />
     
    </LineChart>
  );
}