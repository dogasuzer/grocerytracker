import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppStack from "./navigation/AppStack";
import AuthStack from "./navigation/AuthStack";
import GroceriesContextProvider from "./store/groceries-context";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <GroceriesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AppStack" component={AppStack} />
          {/* <Tab.Screen name="AuthStack" component={AuthStack} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GroceriesContextProvider>
  );
}
