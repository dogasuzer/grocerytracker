import { View, Text } from "react-native";
import React from "react";

const ListGroceryItem = ({ groceryitem }) => {
  return (
    <View>
      <Text>{groceryitem[0]}</Text>
    </View>
  );
};

export default ListGroceryItem;
