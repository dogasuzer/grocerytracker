import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/ui/Header";
import GroceriesTopTabNavigator from "../../navigation/GroceriesTopTabNavigator";

const Groceries = () => {
  return (
    <>
      <Header
        text={"Fruits & Veggies"}
        backgroundColor={"#B397BA"}
        icon={false}
      />
      <GroceriesTopTabNavigator />
    </>
  );
};

export default Groceries;
