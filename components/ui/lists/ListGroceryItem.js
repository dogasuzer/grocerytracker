import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import GroceryItemImage from '../../ui/fruitsandVeg/GroceryItemImage';
import FruitItemController from '../fruitsandVeg/FruitItemController';
import BoldText from '../customTexts/BoldText';

const ListGroceryItem = ({ groceryitem }) => {
  console.log(groceryitem);
  const itemName =
    groceryitem.name.charAt(0).toUpperCase() + groceryitem.name.slice(1);
  return (
    <View style={styles.container}>
      <GroceryItemImage item={groceryitem.name} />
      <BoldText
        style={{ width: 130, paddingLeft: 60, paddingRight: 10, fontSize: 16 }}
      >
        {itemName}
      </BoldText>
      <BoldText
        style={{ width: 130, paddingLeft: 40, paddingRight: 10, fontSize: 16 }}
      >
        {groceryitem.count} gr
      </BoldText>
    </View>
  );
};

export default ListGroceryItem;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingLeft: 5,
    width: '100%',
    height: 130,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 7,
    marginBottom: 10
  }
});
