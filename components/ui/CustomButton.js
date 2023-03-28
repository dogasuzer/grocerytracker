import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BoldText from "./customTexts/BoldText";

const CustomButton = ({ style, onPress, text, textColor }) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: "white",
          height: 50,
          width: 120,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
      onPress={onPress}
    >
      <BoldText style={{ color: textColor, fontSize: 20 }}>{text}</BoldText>
    </TouchableOpacity>
  );
};

export default CustomButton;
