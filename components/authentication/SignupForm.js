import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import LoadingOverlay from "../ui/LoadingOverlay";
import { useNavigation } from "@react-navigation/native";
import Input from "../shared/Input";
import CustomButton from "../ui/CustomButton";
import COLORS from "../ui/colors";

const SignupForm = ({ isLoading, onSubmit, credentialsInvalid }) => {
  const navigation = useNavigation();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const onPressHandler = () => {};
  const { password: passwordIsInvalid, username: usernameIsValid } =
    credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "username":
        setEnteredUsername(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }
  //const authCtx = useContext(AuthContext);

  function submitHandler() {
    onSubmit({
      username: enteredUsername,
      password: enteredPassword,
    });
    // {
    //   authCtx.token && navigation.navigate('BottomNavigator');
    // }
  }
  return (
    <View>
      {isLoading == true ? (
        <LoadingOverlay />
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            onUpdateValue={updateInputValueHandler.bind(this, "username")}
            value={enteredUsername}
            keyboardType="text"
            isInvalid={usernameIsValid}
            placeholder="username"
            style={styles.input}
          />
          <Input
            onUpdateValue={updateInputValueHandler.bind(this, "password")}
            secure
            value={enteredPassword}
            isInvalid={passwordIsInvalid}
            placeholder="password"
            style={styles.input}
          />
          <View style={{ paddingTop: 20 }}>
            <CustomButton
              textColor={COLORS.white}
              style={{
                backgroundColor: COLORS.secondary200,
                color: COLORS.white,
                width: 200,
              }}
              onPress={submitHandler}
              text={"Sign up"}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default SignupForm;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 25,
  },
  input: {
    backgroundColor: COLORS.white,
  },
});
