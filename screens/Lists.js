import { View, StyleSheet } from "react-native";
import React from "react";
import ListItem from "../components/ui/lists/ListItem";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/ui/Header";
import COLORS from "../components/ui/colors";
import MediumText from "../components/ui/customTexts/MediumText";
import { ScrollView } from "react-native";
import BoldText from "../components/ui/customTexts/BoldText";

const Lists = () => {
  const dummyListLists = [
    {
      listname: "My First List",
      key: 1,
      totalitem: 7,
      registration: "2017-01-03",
      listcontent: [
        ["apple", 1000],
        ["strawberry", 1300],
      ],
    },
    {
      listname: "My Second List",
      key: 2,
      totalitem: 9,
      registration: "2017-01-03",
      listcontent: [
        ["apple", 1000],
        ["strawberry", 1300],
      ],
    },
  ];

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

      <ScrollView
        contentContainerStyle={{
          margin: 10,
        }}
      >
        {dummyListLists !== undefined || typeof listLists !== "undefined"
          ? dummyListLists.map((item) => {
              return <ListItem item={item} />;
            })
          : null}
        <View style={{ alignItems: "center" }}>
          <BoldText>end of lists</BoldText>
        </View>
      </ScrollView>
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
