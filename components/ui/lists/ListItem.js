import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BoldText from "../customTexts/BoldText";
import COLORS from "../colors";
import { useNavigation } from "@react-navigation/native";

const ListItem = ({ item }) => {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("SingleList", {
      item: item,
    });
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <TouchableOpacity onPress={onPressHandler}>
        <BoldText
          style={{ margin: 20, color: COLORS.primary }}
          key={Math.random() * 1000}
        >
          {item.listname}
        </BoldText>
      </TouchableOpacity>
      <BoldText
        style={{ margin: 20, color: COLORS.gray100 }}
        key={Math.random() * 1000}
      >
        {item.totalitem}
      </BoldText>
      <BoldText
        style={{ margin: 20, color: COLORS.gray100 }}
        key={Math.random() * 1000}
      >
        {item.registration}
      </BoldText>
    </View>
  );
};

export default ListItem;
