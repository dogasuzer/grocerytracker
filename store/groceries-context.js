import { createContext, useState } from "react";

export const GroceriesContext = createContext({
  groceries: [],
  getGroceries: () => {},
  fruits: [],
  getFruits: () => {},
  veggies: [],
  getVeggies: () => {},
});

function GroceriesContextProvider({ children }) {
  const [groceries, setGroceries] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [veggies, setVeggies] = useState([]);
  function getGroceries(input) {
    setGroceries(input);
  }
  function getFruits(input) {
    setFruits(input);
  }
  function getVeggies(input) {
    setVeggies(input);
  }

  const value = {
    groceries: groceries,
    getGroceries: getGroceries,
    getFruits: getFruits,
    getVeggies: getVeggies,
    veggies: veggies,
    fruits: fruits,
  };
  return (
    <GroceriesContext.Provider value={value}>
      {children}
    </GroceriesContext.Provider>
  );
}

export default GroceriesContextProvider;
