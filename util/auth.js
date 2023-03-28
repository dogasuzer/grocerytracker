import axios from "axios";
import { Alert } from "react-native";
import { BACKEND_URL_LOCAL } from "@env";
const url = BACKEND_URL_LOCAL;

export async function login(username, password) {
  const response = await axios

    .post(
      url + "users/login",

      {
        username: username,
        password: password,
      }
    )
    .then(function (response) {
      //
      //

      if (response.status == 200) {
        return response.data.token;
      } else {
        Alert.alert("Failed", response.data.token);
      }
    })
    .catch(function (error) {
      Alert.alert("Failed");
    });
  return response;
}
//////////////////signup
export async function signup(username, password) {
  const response = await axios

    .post(
      url + "users/signup",

      {
        username: username,
        password: password,
      }
    )
    .then(function (response) {
      //
      //

      if (response.status == 200) {
        return response.data.token;
      } else {
        Alert.alert("Failed", response.data.token);
      }
    })
    .catch(function (error) {
      Alert.alert("Failed");
    });
  return response;
}
