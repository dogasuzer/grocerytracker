import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { getAllGroceries } from "../../util/groceries";
import GroceryList from "../../components/ui/fruitsandVeg/GroceryList";
import { GroceriesContext } from "../../store/groceries-context";

const AllGroceries = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const groceriesCtx = useContext(GroceriesContext);

  async function getAllGroceriesHandler() {
    setIsLoading(true);
    try {
      const response = await getAllGroceries();
      groceriesCtx.getFruits(response.fruits);
      groceriesCtx.getVeggies(response.vegetables);
      setGroceryList(response.allGroceries);
    } catch (error) {
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getAllGroceriesHandler();
  }, []);

  return (
    <View
      style={styles.container}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <GroceryList groceryList={groceryList} />
    </View>
  );
};

export default AllGroceries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
