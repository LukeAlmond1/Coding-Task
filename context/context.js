import { createContext, useEffect, useState, useContext } from "react";

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);

  return (
    <stateContext.Provider
      value={{
        foodItems,
        setFoodItems,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(stateContext);
};
