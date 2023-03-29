import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/ui/Header";
import COLORS from "../components/ui/colors";
import MediumText from "../components/ui/customTexts/MediumText";
import ListGroceryItem from "../components/ui/lists/ListGroceryItem";

const SingleList = ({ route }) => {
  const { item } = route.params;
  listcontent = item.listcontent;
  return (
    <View style={styles.page}>
      <Header text={item.listname} backgroundColor="#E76666" icon={true} />
      <View style={styles.container}>
        <MediumText style={styles.label}>Items</MediumText>
      </View>
      {item.listcontent !== undefined ||
      typeof item.listcontent !== "undefined" ||
      item.listcontent.length() > 0
        ? listcontent.map((item) => {
            return <ListGroceryItem groceryitem={item} />;
          })
        : null}
    </View>
  );
};

export default SingleList;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
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
