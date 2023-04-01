import axios from "axios";
import { Alert } from "react-native";
import { BACKEND_URL_LOCAL, BACKEND_URL_SERVER } from "@env";
const url = BACKEND_URL_SERVER;

export async function addNewList() {
  const response = await axios
    .post(
      url + "groceries/addList",
      {
        title: "deneme",
        content: [],
        lastChange: "2023-02-02",
      },
      {
        headers: {
          Authorization:
            `Bearer ` +
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFiMTA4OGVjYzVlMWMxYWI3NmZkZjAiLCJ1c2VybmFtZSI6ImJlZGlyaGFuIiwiaWF0IjoxNjgwMzYzMzM5LCJleHAiOjE2ODAzNjY5Mzl9.JtZ2mC4pRyfA_xYfZNzUOjIyMxaxkCK4FSoX8ZoQTP4",
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
