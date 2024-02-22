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
    name: "15/02/2024",
    Al_dia: 2,
    Vencidos: 0,
    Por_Vencer: 2,
    
  },
  {
    name: "16/02/2024",
    Al_dia: 2,
    Vencidos: 0,
    Por_Vencer: 2,
    
  },
  {
    name: "17/02/2024",
    Al_dia: 2,
    Vencidos: 1,
    Por_Vencer: 1,
    
  },
  {
    name: "18/02/2024",
    Al_dia: 3,
    Vencidos: 0,
    Por_Vencer: 2,
    
  },
  {
    name: "19/02/2024",
    Al_dia: 3,
    Vencidos: 0,
    Por_Vencer: 2,
    
  },
  {
    name: "20/02/2024",
    Al_dia: 3,
    Vencidos: 0,
    Por_Vencer: 2,
    
  },
  {
    name: "21/02/2024",
    Al_dia: 4,
    Vencidos: 0,
    Por_Vencer: 3,
    
  },
  {
    name: "22/02/2024",
    Al_dia: 5,
    Vencidos: 1,
    Por_Vencer: 3,
    
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
      <Line type="monotone" dataKey="Vencidos" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Por_Vencer" stroke="#ff7300" />
     
    </LineChart>
  );
}