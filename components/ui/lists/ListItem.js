import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BoldText from "../customTexts/BoldText";
import COLORS from "../colors";
import { useNavigation } from "@react-navigation/native";

const ListItem = ({ item }) => {
  const navigation = useNavigation();
  const dateConverter = item.lastChange.slice(0, 10);

  function onPressHandler() {
    navigation.navigate("SingleList", {
      item: item,
    });
  }
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <TouchableOpacity onPress={onPressHandler}>
        <BoldText
          style={{ margin: 20, color: COLORS.secondary200, width: 110 }}
          key={Math.random() * 1000}
        >
          {item !== undefined ? item.title : null}
        </BoldText>
      </TouchableOpacity>
      <BoldText
        style={{ margin: 20, color: COLORS.gray100, width: 60 }}
        key={Math.random() * 1000}
      >
        {item !== undefined ? item.content.length : null}
      </BoldText>
      <BoldText
        style={{ margin: 20, color: COLORS.gray100, width: 80 }}
        key={Math.random() * 1000}
      >
        {dateConverter}
      </BoldText>
    </View>
  );
};

export default ListItem;
