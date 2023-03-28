import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import GroceryListItem from "./GroceryListItem";

const GroceryList = ({ groceryList }) => {
  // console.log(groceryList);
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingBottom: 30,
      }}
    >
      {groceryList !== undefined || typeof groceryList !== "undefined"
        ? groceryList.map((item) => {
            return <GroceryListItem item={item} key={Math.random() * 1000} />;
          })
        : null}
    </ScrollView>
  );
};

export default GroceryList;
