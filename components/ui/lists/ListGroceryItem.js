import { View, Text, StyleSheet } from "react-native";
import React from "react";
import GroceryItemImage from "../../ui/fruitsandVeg/GroceryItemImage";
import FruitItemController from "../fruitsandVeg/FruitItemController";
import BoldText from "../customTexts/BoldText";

const ListGroceryItem = ({ groceryitem }) => {
  const itemName =
    groceryitem.name.charAt(0).toUpperCase() + groceryitem.name.slice(1);
  return (
    <View style={styles.container}>
      <GroceryItemImage item={groceryitem.name} />
      <BoldText
        style={{ width: 80, marginLeft: 20, marginRight: 10, fontSize: 16 }}
      >
        {itemName}
      </BoldText>
      <FruitItemController />
    </View>
  );
};

export default ListGroceryItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 130,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    elevation: 7,
    marginBottom: 10,
  },
});
