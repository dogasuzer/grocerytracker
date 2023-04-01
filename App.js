import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppStack from "./navigation/AppStack";
import AuthStack from "./navigation/AuthStack";
import GroceriesContextProvider from "./store/groceries-context";
import { useContext, useEffect } from "react";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthNavigaiton() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
    }
    fetchToken();
  }, [authCtx.isAuthenticated]);

  return (
    <GroceriesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {authCtx.isAuthenticated == false && (
            <Stack.Screen name="AuthStack" component={AuthStack} />
          )}
          {authCtx.isAuthenticated == true && (
            <Stack.Screen name="AppStack" component={AppStack} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GroceriesContextProvider>
  );
}
export default function App() {
  return (
    <AuthContextProvider>
      <AuthNavigaiton />
    </AuthContextProvider>
  );
}
