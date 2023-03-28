import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SingleList = () => {
  return (
    <View style={styles.container}>
      <Text>SingleList</Text>
    </View>
  );
};

export default SingleList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
