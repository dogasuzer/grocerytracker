import axios from "axios";
import { Alert } from "react-native";
import { BACKEND_URL_LOCAL, BACKEND_URL_SERVER } from "@env";
const url = BACKEND_URL_SERVER;

export async function addNewList(token, title, lastChange) {
  const response = await axios
    .post(
      url + "groceries/addList",
      {
        title: title,
        content: [],
        lastChange: lastChange,
      },
      {
        headers: {
          Authorization: `Bearer ` + token,
        },
      }
    )
    .then(function (response) {
      // console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      Alert.alert("Failed");
    });
  return response;
}
export async function getUserLists(token) {
  const response = await axios
    .get(url + "groceries/userLists", {
      headers: {
        Authorization: `Bearer ` + token,
      },
    })
    .then(function (response) {
      // console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      Alert.alert("Failed");
    });
  return response;
}
