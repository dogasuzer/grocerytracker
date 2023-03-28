import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../colors";

const GroceryItemImage = ({ item }) => {
  return (
    <View style={styles.shadowProp}>
      {item === "apple" ? (
        <Image
          style={[styles.image, styles.shadowProp]}
          source={require("../../../assets/groceries/apple.png")}
        />
      ) : null}

      {item === "banana" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/banana.png")}
        />
      ) : null}

      {item === "carrot" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/carrot.png")}
        />
      ) : null}

      {item === "coriander" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/coriander.png")}
        />
      ) : null}

      {item === "eggplant" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/eggplant.png")}
        />
      ) : null}

      {item === "grape" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/grape.png")}
        />
      ) : null}
      {item === "kiwi" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/kiwi.png")}
        />
      ) : null}

      {item === "melon" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/melon.png")}
        />
      ) : null}

      {item === "orange" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/orange.png")}
        />
      ) : null}

      {item === "peach" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/peach.png")}
        />
      ) : null}
      {item === "potato" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/potato.png")}
        />
      ) : null}

      {item === "strawberry" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/strawberry.png")}
        />
      ) : null}

      {item === "tomato" ? (
        <Image
          style={styles.image}
          source={require("../../../assets/groceries/tomato.png")}
        />
      ) : null}
    </View>
  );
};

export default GroceryItemImage;

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 100,
    backgroundColor: COLORS.gray50,
  },
  shadowProp: {
    shadowColor: "pink",
  },
});
