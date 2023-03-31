import { View, Text } from "react-native";
import React from "react";
import BoldText from "../components/ui/customTexts/BoldText";
import COLORS from "../components/ui/colors";
import CustomButton from "../components/ui/CustomButton";

const Profile = () => {
  const name = "dummyname";
  const email = "dummyemail";
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", height: "100%" }}
    >
      <View
        style={{
          backgroundColor: COLORS.secondary200,
          width: 120,
          height: 120,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 60,
          marginBottom: 20,
        }}
      >
        <BoldText
          style={{
            fontSize: 90,
            color: "white",
          }}
        >
          {name[0].toUpperCase()}
        </BoldText>
      </View>
      <BoldText style={{ fontSize: 30 }}>{name}</BoldText>
      <BoldText style={{ color: COLORS.gray100, fontSize: 17, marginTop: 10 }}>
        {email}{" "}
      </BoldText>
      <CustomButton
        style={{ backgroundColor: COLORS.secondary, width: 150, marginTop: 30 }}
        onPress={{}}
        text={"Logout"}
        textColor={COLORS.gray500}
      />
    </View>
  );
};

export default Profile;
