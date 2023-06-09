import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import CreateGroceryList from '../../../screens/CreateGroceryList';
import AddGroceryItem from '../../../screens/AddGroceryItem';

const FruitItemController = ({ item }) => {
  const [counter, setCounter] = useState(1000);
  const [isOnCart, setIsOnCart] = useState([false, 0]);
  const incrementCounter = () => setCounter(counter + 100);
  let decrementCounter = () => setCounter(counter - 100);
  if (counter <= 0) {
    decrementCounter = () => setCounter(1000);
  }
  return (
    <View style={styles.controllercontainer}>
      <View style={styles.controller}>
        <TouchableOpacity
          onPress={decrementCounter}
          style={styles.controllerfunc}
        >
          <Text style={{ fontSize: 25 }}>-</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15 }}>{counter} gr</Text>
        <TouchableOpacity
          style={styles.controllerfunc}
          onPress={incrementCounter}
        >
          <Text style={{ fontSize: 20 }}>+</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'pink'
        }}
      >
        <AddGroceryItem counter={counter} item={item} />
      </View>
    </View>
  );
};

export default FruitItemController;

const styles = StyleSheet.create({
  controllerfunc: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  controller: {
    flexDirection: 'row',
    backgroundColor: '#DAF2CF',
    width: 110,
    borderRadius: 40,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  controllercontainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 40,
    width: 160
  }
});
