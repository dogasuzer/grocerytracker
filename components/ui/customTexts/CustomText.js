import { useCallback } from "react";
import { Text, View } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const CustomText = ({ children, style }) => {
  const [fontsLoaded] = useFonts({
    "Caveat-VariableFont": require("../../../assets/fonts/Caveat-VariableFont_wght.ttf"),
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
      <Text style={[style, { fontFamily: "Caveat-VariableFont" }]}>
        {children}
      </Text>
    </View>
  );
};
export default CustomText;
