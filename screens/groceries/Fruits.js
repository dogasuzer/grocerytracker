import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { GroceriesContext } from "../../store/groceries-context";
import GroceryList from "../../components/ui/fruitsandVeg/GroceryList";

const Fruits = () => {
  const groceriesCtx = useContext(GroceriesContext);
  return (
    <View
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <GroceryList groceryList={groceriesCtx.fruits} />
    </View>
  );
};

export default Fruits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
