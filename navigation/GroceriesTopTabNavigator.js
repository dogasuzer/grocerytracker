import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllGroceries from "../screens/groceries/AllGroceries";
import Veggies from "../screens/groceries/Veggies";
import Fruits from "../screens/groceries/Fruits";
import COLORS from "../components/ui/colors";

const Tab = createMaterialTopTabNavigator();
const GroceriesTopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray100,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.primary,
          height: 3,
        },
      }}
    >
      <Tab.Screen
        name="AllGroceries"
        options={{ tabBarLabel: "All" }}
        component={AllGroceries}
      />
      <Tab.Screen
        options={{ tabBarLabel: "VEGGIES" }}
        name="Veggies"
        component={Veggies}
      />
      <Tab.Screen
        options={{ tabBarLabel: "FRUITS" }}
        name="Fruits"
        component={Fruits}
      />
    </Tab.Navigator>
  );
};

export default GroceriesTopTabNavigator;
