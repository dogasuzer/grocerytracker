import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ListItem from "../components/ui/lists/ListItem";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/ui/Header";
import COLORS from "../components/ui/colors";
import MediumText from "../components/ui/customTexts/MediumText";
import { ScrollView } from "react-native";
import BoldText from "../components/ui/customTexts/BoldText";
import CreateGroceryList from "./CreateGroceryList";
import { getUserLists } from "../util/lists";
import { AuthContext } from "../store/auth-context";

const Lists = () => {
  const [userLists, setUserLists] = useState([]);
  const authCtx = useContext(AuthContext);

  const token = authCtx.token;
  async function getUserListsHandler() {
    try {
      const response = await getUserLists(token);
      setUserLists(response);
    } catch (error) {}
  }
  useEffect(() => {
    getUserListsHandler();
  }, []);
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
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
        <CreateGroceryList />
        {userLists !== undefined || typeof userLists !== "undefined"
          ? userLists.map((item) => {
              return (
                <>
                  <ListItem item={item} />
                  <View style={styles.lineStyle} />
                </>
              );
            })
          : null}
      </ScrollView>
    </View>
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
    elevation: 2,
  },
  label: {
    fontSize: 20,
    color: COLORS.gray500,
  },
  lineStyle: {
    borderWidth: 0.2,
    width: "90%",
    borderColor: "#D0CFCF",
    margin: 10,
    elevation: 1,
  },
});
