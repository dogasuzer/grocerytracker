import axios from "axios";
import { Alert } from "react-native";
import { BACKEND_URL_LOCAL, BACKEND_URL_SERVER } from "@env";
const url = BACKEND_URL_SERVER;

export async function getAllGroceries() {
  const response = await axios
    .get(url + "groceries")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      Alert.alert("Failed");
    });
  return response;
}
