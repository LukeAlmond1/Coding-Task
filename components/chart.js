import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Chart() {
  const data = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 2000 },
    { name: "Apr", sales: 2780 },
    { name: "May", sales: 1890 },
    { name: "June", sales: 2390 },
    { name: "July", sales: 3490 },
    { name: "Aug", sales: 3490 },
    { name: "Sep", sales: 3490 },
    { name: "Oct", sales: 3490 },
    { name: "Nov", sales: 3490 },
    { name: "Dec", sales: 3490 },
  ];

  return (
    <div className="mt-6 flex justify-center">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="black" />
        <Bar dataKey="month" fill="grey" />
      </BarChart>
    </div>
  );
}
