import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import BoldText from "../../components/ui/customTexts/BoldText";
import LoginForm from "./LoginForm";
import { Image } from "react-native";
import CustomText from "../ui/customTexts/CustomText";
import COLORS from "../ui/colors";
import { useNavigation } from "@react-navigation/native";

const LoginContent = ({ onAuthenticate, isLoading }) => {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    username: false,
    password: false,
  });

  function submitHandler(credentials) {
    let { username, password } = credentials;

    username = username.trim();
    password = password.trim();

    const usernameIsValid = username.length > 2;
    const passwordIsValid = password.length > 2;

    if (!passwordIsValid || !usernameIsValid) {
      Alert.alert("Failed", "Please check your inputs");
      setCredentialsInvalid({
        username: !usernameIsValid,
        password: !passwordIsValid,
      });
      return;
    }
    onAuthenticate({ username, password });
  }
  const onPress = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/grocerytracker.png")}
        style={{ width: 320, height: 220 }}
      />
      <View style={styles.brand}>
        <BoldText style={{ color: COLORS.primary, fontSize: 60 }}>
          Grocery
        </BoldText>
        <CustomText
          style={{ color: COLORS.primary, fontSize: 40, alignSelf: "flex-end" }}
        >
          Tracker
        </CustomText>
      </View>
      <LoginForm
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
        isLoading={isLoading}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          flexDirection: "row",
          marginTop: 20,
          maxHeight: 40,
        }}
      >
        <BoldText style={{}}>Don’t have account? </BoldText>
        <TouchableOpacity onPress={onPress}>
          <BoldText
            style={{
              color: COLORS.primary,
              marginLeft: 5,
            }}
          >
            Sign up!
          </BoldText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    marginBottom: 20,
    width: 230,
  },
});
