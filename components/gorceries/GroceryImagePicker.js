import { View, Text } from "react-native";
import React from "react";

const GroceryImagePicker = ({ item }) => {
  groceries = [
    { id: "apple", link: "../../../assets/groceries/apple.png" },
    { id: "banana", link: "../../../assets/groceries/banana.png" },
    { id: "carrot", link: "../../../assets/groceries/carrot.png" },
    { id: "coriander", link: "../../../assets/groceries/coriander.png" },
    { id: "eggplant", link: "../../../assets/groceries/eggplant.png" },
    { id: "grape", link: "../../../assets/groceries/grape.png" },
    { id: "kiwi", link: "../../../assets/groceries/kiwi.png" },
    { id: "melon", link: "../../../assets/groceries/melon.png" },
    { id: "orange", link: "../../../assets/groceries/orange.png" },
    { id: "peach", link: "../../../assets/groceries/peach.png" },
    { id: "potato", link: "../../../assets/groceries/potato.png" },
    { id: "strawberry", link: "../../../assets/groceries/strawberry.png" },
    { id: "tomato", link: "../../../assets/groceries/tomato.png" },
  ];
  // const found = (item) => {
  //   groceries.find((element) => element.id === item);
  // };

  // console.log(found("tomato"));

  //////

  const result = groceries.findIndex((element) => element.id == item);
  return result;
};
export default GroceryImagePicker;
