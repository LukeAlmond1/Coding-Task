import React from "react";
const currencyFormatter = require("currency-formatter");

export default function MonthlySales() {
  const data = [
    { month: "Jan", sales: 24 },
    { month: "Feb", sales: 2210 },
    { month: "Mar", sales: 2290 },
    { month: "Apr", sales: 4023 },
    { month: "May", sales: 2181 },
    { month: "June", sales: 2521 },
    { month: "July", sales: 7112 },
    { month: "Aug", sales: 5121 },
    { month: "Sep", sales: 2166 },
    { month: "Oct", sales: 2145 },
    { month: "Nov", sales: 2133 },
    { month: "Dec", sales: 2134 },
  ];

  return (
    <div className="flex justify-center w-full mt-4 mb-4 ">
      <div className="w-11/12 gap-y-3 flex flex-col">
        {data.map((e, i) => (
          <div key={i} className="flex justify-between">
            <div className="text-lg font-bold">{e.month}</div>
            <div className="text-lg">
              {currencyFormatter.format(e.sales, { code: "GBP" })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
