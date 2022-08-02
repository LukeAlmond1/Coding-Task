import React, { useState } from "react";
import Sidebar from "./sidebar";
import {
  CountryList,
  FoodCategoryList,
  ProductList,
  SalesPersonList,
} from "./dataLists";
import CurrencyInput from "react-currency-input-field";
import { useStateContext } from "../context/context";
const currencyFormatter = require("currency-formatter");

export default function Addsale() {
  const { foodItems, setFoodItems } = useStateContext();
  const [unsavedItems, setUnsavedItems] = useState([...foodItems]);
  const [category, setCategory] = useState("Frozen");
  const [product, setProduct] = useState("Fish Fingers");
  const [salesPerson, setSalesPerson] = useState("Darren");
  const [shipToo, setShipToo] = useState("United Kingdom");
  const [price, setPrice] = useState(1);
  const [quantity, setQuantity] = useState(1);

  async function handleSave() {
    setFoodItems(unsavedItems);
  }

  const actions = [
    { name: "Category" },
    { name: "Product" },
    { name: "Sales person" },
    { name: "Country to ship too" },
    { name: "Price" },
    { name: "Quantity" },
  ];

  const tableHeaders = [
    "Product name",
    "Product category",
    "Price",
    "Quantity",
    "Actions",
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className=" ml-64 p-12 w-full flex flex-col items-center justify-center gap-y-12">
        <div className="border h-full w-full bg-stone-100 py-12 rounded-md flex flex-col items-center">
          <div className="grid grid-cols-3 w-11/12 justify-items-center gap-y-6 gap-x-12">
            {actions.map((e, i) => (
              <div key={i} className="flex flex-col w-full">
                <label>{e.name}</label>
                <div className="w-full bg-white mt-3 flex rounded-md justify-center">
                  {e.name === "Country to ship too" && (
                    <select
                      onChange={(e) => setShipToo(e.target.value)}
                      className="outline-none py-4  w-11/12"
                    >
                      {CountryList.map((e, i) => (
                        <option key={i}>{e}</option>
                      ))}
                    </select>
                  )}
                  {e.name === "Category" && (
                    <select
                      onChange={(e) => setCategory(e.target.value)}
                      className="outline-none py-4  w-11/12"
                    >
                      {FoodCategoryList.map((e, i) => (
                        <option key={i}>{e}</option>
                      ))}
                    </select>
                  )}
                  {e.name === "Product" && (
                    <select
                      onChange={(e) => setProduct(e.target.value)}
                      className="outline-none py-4  w-11/12"
                    >
                      {ProductList.map((e, i) => (
                        <option key={i}>{e}</option>
                      ))}
                    </select>
                  )}
                  {e.name === "Sales person" && (
                    <select
                      onChange={(e) => setSalesPerson(e.target.value)}
                      className="outline-none py-4  w-11/12"
                    >
                      {SalesPersonList.map((e, i) => (
                        <option key={i}>{e}</option>
                      ))}
                    </select>
                  )}
                  {e.name === "Price" && (
                    <CurrencyInput
                      className="outline-none py-4  w-11/12"
                      placeholder="£1.99"
                      id="input-example"
                      name="input-name"
                      prefix="£"
                      defaultValue={price}
                      decimalsLimit={2}
                      onValueChange={(value, name) => setPrice(value)}
                    />
                  )}
                  {e.name === "Quantity" && (
                    <input
                      onChange={(e) => setQuantity(e.target.value)}
                      type="number"
                      min="1"
                      className="outline-none py-4  w-11/12"
                      placeholder="1"
                    />
                  )}
                </div>
              </div>
            ))}
            <button
              onClick={() =>
                setUnsavedItems([
                  ...unsavedItems,
                  {
                    name: product,
                    category,
                    price: currencyFormatter.format(price, { code: "GBP" }),
                    quantity,
                  },
                ])
              }
              className="py-4 w-full px-12 text-lg bg-black text-bold text-white rounded-md"
            >
              Add
            </button>
          </div>
        </div>
        {/* TABLE */}
        <div className="border h-full w-full bg-stone-100 py-12 rounded-md flex flex-col items-center">
          <div className="w-11/12 justify-between px-8 rounded-md py-6 bg-black border flex">
            {tableHeaders.map((e, i) => (
              <div key={i} className="text-white w-1/5">
                {e}
              </div>
            ))}
          </div>
          {unsavedItems.length > 0 && (
            <div className="w-11/12 mt-4 flex-col bg-white justify-between px-8 rounded-md gap-y-4 py-6 flex">
              {unsavedItems.map((e, i) => (
                <div
                  key={i}
                  className={`flex w-full pb-2  ${
                    i !== unsavedItems.length - 1 && "border-b"
                  } pt-2`}
                >
                  {Object.values(e).map((val, vali) => (
                    <div key={vali} className="w-1/5">
                      {val}
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      const removedArray = unsavedItems.filter(
                        (el) => el !== e
                      );
                      setUnsavedItems(removedArray);
                    }}
                    className="text-red-600"
                  >
                    remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="w-11/12 flex justify-between items-center mt-8">
            <p className="text-lg font-bold">
              Total:{" "}
              <span className="font-normal">
                {currencyFormatter.format(1500, { code: "GBP" })}
              </span>
            </p>
            <button
              onClick={() => handleSave()}
              className="py-4 px-12 text-lg self-end bg-black text-bold text-white rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
