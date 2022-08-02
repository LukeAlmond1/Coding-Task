import React from "react";
import Sidebar from "./sidebar";
import Value from "./value";
import MonthlySales from "./monthlySales";
import SalesByPerson from "./salesByPerson";
const currencyFormatter = require("currency-formatter");

import dynamic from "next/dynamic";
const Chart = dynamic(import("./chart"), { ssr: false });

export default function Dashboard() {
  const boxes = [
    { title: "Total sales by category" },
    { title: "Total sales this month" },
    { title: "Best selling category ever" },
    { title: "Most sales this month" },
    { title: "Best selling product ever" },
    { title: "Total margin" },
    { title: "Most shipped" },
    { title: "Total sales" },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-12 ml-64 w-full flex items-center justify-center">
        <div className="h-full w-full bg-stone-100 py-12 rounded-md flex flex-col items-center">
          <div className="grid grid-cols-2 grid-row-3 grid-flow-row	 h-full gap-8 w-11/12">
            {boxes.map((e, i) => (
              <div key={i} className="bg-white flex flex-col min-h-[200px]">
                <p className="font-bold text-lg mt-6 ml-6">{e.title}</p>
                {e.title === "Total sales by category" && <Chart />}
                {e.title === "Total sales this month" && <Value val="120" />}
                {e.title === "Best selling category ever" && (
                  <Value val="Fresh" />
                )}
                {e.title === "Most sales this month" && <Value val="Apples" />}
                {e.title === "Best selling product ever" && (
                  <Value val="Fish Fingers" />
                )}
                {e.title === "Total margin" && (
                  <Value
                    val={currencyFormatter.format(40616, { code: "GBP" })}
                  />
                )}
                {e.title === "Most shipped" && <Value val="UK" />}
                {e.title === "Total sales" && <Value val="87,019" />}
              </div>
            ))}
          </div>
          <div className="bg-white flex flex-col w-11/12 mt-8">
            <p className="font-bold text-lg mt-6 ml-6">Monthly sales</p>
            <MonthlySales />
          </div>
          <div className="bg-white flex flex-col w-11/12 mt-8">
            <p className="font-bold text-lg mt-6 ml-6">Sales by person</p>
            <SalesByPerson />
          </div>
        </div>
      </div>
    </div>
  );
}
