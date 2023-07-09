import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import FruitItemController from './FruitItemController';
import CustomText from '../customTexts/CustomText';
import COLORS from '../colors';
import GroceryItemImage from './GroceryItemImage';

const GroceryListItem = ({ item }) => {
  const itemName = item.name.charAt(0).toUpperCase() + item.name.slice(1);

  return (
    <View
      style={{
        width: 170,
        height: 220,
        marginTop: 20,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 10,
        borderRadius: 20
      }}
    >
      <GroceryItemImage item={item.name} />
      <CustomText
        style={{
          color: COLORS.black,
          fontSize: 35,
          minWidth: 150,
          textAlign: 'center'
        }}
      >
        {itemName}
      </CustomText>
      <FruitItemController item={item} />
    </View>
  );
};

export default GroceryListItem;
