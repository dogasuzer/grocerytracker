import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllGroceries from '../screens/groceries/AllGroceries';
import { Ionicons } from '@expo/vector-icons';
import Lists from '../screens/Lists';
import Profile from '../screens/Profile';
import SingleList from '../screens/SingleList';
import Groceries from '../screens/groceries/Groceries';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function ListScreeens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lists" component={Lists} />
      <Stack.Screen name="SingleList" component={SingleList} />
    </Stack.Navigator>
  );
}
const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Groceries"
        component={Groceries}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="nutrition" size={20} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="ListScreeens"
        component={ListScreeens}
        options={{
          tabBarLabel: 'Lists',
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu" size={18} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={20} color={color} />
          )
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
