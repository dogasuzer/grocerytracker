import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import BoldText from "./customTexts/BoldText";
import COLORS from "./colors";
import EditImage from "../../assets/icons/pencil.svg";

const Header = ({ text, backgroundColor, icon }) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        height: 150,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          marginTop: 60,
          flexDirection: "row",
          marginLeft: 20,
        }}
      >
        <BoldText
          style={{
            color: COLORS.white,
            fontSize: 35,
            minWidth: 150,
            textAlign: "left",
          }}
        >
          {text}
        </BoldText>
        {icon == !false ? (
          <TouchableOpacity style={{ marginLeft: 100 }}>
            <EditImage width={40} height={40} color={"white"} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Header;
