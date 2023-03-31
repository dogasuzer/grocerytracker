import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/ui/Header";
import GroceriesTopTabNavigator from "../../navigation/GroceriesTopTabNavigator";
import COLORS from "../../components/ui/colors";

const Groceries = () => {
  return (
    <>
      <Header
        text={"Fruits & Veggies"}
        backgroundColor={COLORS.purple100}
        icon={false}
      />
      <GroceriesTopTabNavigator />
    </>
  );
};

export default Groceries;
