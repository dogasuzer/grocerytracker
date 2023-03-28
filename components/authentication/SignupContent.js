import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import BoldText from "../../components/ui/customTexts/BoldText";
import { Image } from "react-native";
import CustomText from "../ui/customTexts/CustomText";
import COLORS from "../ui/colors";
import { useNavigation } from "@react-navigation/native";
import SignupForm from "./SignupForm";

const SignupContent = ({ onAuthenticate, isLoading }) => {
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
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <BoldText style={{ color: COLORS.secondary200, fontSize: 60 }}>
          Sign up
        </BoldText>
      </View>
      <SignupForm
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
        <BoldText style={{}}> Already have account? </BoldText>
        <TouchableOpacity onPress={onPress}>
          <BoldText
            style={{
              color: COLORS.secondary300,
              marginLeft: 5,
            }}
          >
            Login!
          </BoldText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  brand: {
    marginBottom: 20,
    width: 230,
    justifyContent: "center",
    alignItems: "center",
  },
});
