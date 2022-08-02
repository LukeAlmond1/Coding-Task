import React from "react";
const currencyFormatter = require("currency-formatter");

export default function SalesByPerson() {
  const data = [
    {
      person: "Darren",
      ambient: 2400,
      Fresh: 500,
      Frozen: 80,
      FruitVeg: 900,
      salesTotal: 900,
      salesMargin: currencyFormatter.format(5039, { code: "GBP" }),
    },
    {
      person: "Jon",
      ambient: 2400,
      Fresh: 500,
      Frozen: 80,
      FruitVeg: 900,
      salesTotal: 900,
      salesMargin: currencyFormatter.format(4952, { code: "GBP" }),
    },
    {
      person: "Connor",
      ambient: 2400,
      Fresh: 500,
      Frozen: 80,
      FruitVeg: 900,
      salesTotal: 900,
      salesMargin: currencyFormatter.format(3928, { code: "GBP" }),
    },
    {
      person: "Sean",
      ambient: 2400,
      Fresh: 500,
      Frozen: 80,
      FruitVeg: 900,
      salesTotal: 900,
      salesMargin: currencyFormatter.format(4500, { code: "GBP" }),
    },
  ];

  const headers = [
    "Person",
    "Ambient",
    "Fresh",
    "Frozen",
    "Fruit & Veg",
    "Sales Total",
    "Sales Margin",
  ];

  return (
    <div className="flex justify-center w-full mt-4 mb-4 ">
      <table className="table-auto w-11/12 gap-y-3">
        <thead>
          <tr>
            {headers.map((e, i) => (
              <th key={i} className="text-lg text-start">
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => (
            <tr key={i} className="h-10">
              {Object.values(e).map((val, vali) => (
                <td key={vali} className="text-lg">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
