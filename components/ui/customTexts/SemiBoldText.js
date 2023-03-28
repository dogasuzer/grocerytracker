import { useCallback } from "react";
import { Text, View } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const BoldText = ({ children, style }) => {
  const [fontsLoaded] = useFonts({
    "Changa-VariableFont": require("../../../assets/fonts/Changa-VariableFont_wght.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Text style={[style, { fontFamily: "Changa-VariableFont" }]}>
        {children}
      </Text>
    </View>
  );
};
export default BoldText;
