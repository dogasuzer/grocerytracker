import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import CustomButton from "../components/ui/CustomButton";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/ui/Header";
import COLORS from "../components/ui/colors";
import MediumText from "../components/ui/customTexts/MediumText";

const Lists = () => {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate("SingleList");
  }

  return (
    <>
      <Header
        text={"MyLists"}
        backgroundColor={COLORS.secondary300}
        icon={false}
      />
      <View style={styles.container}>
        <MediumText style={styles.label}>List name</MediumText>
        <MediumText style={styles.label}>Total Item</MediumText>
        <MediumText style={styles.label}>Last Change</MediumText>
      </View>
    </>
  );
};

export default Lists;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 7,
  },
  label: {
    fontSize: 20,
    color: COLORS.gray500,
  },
});
