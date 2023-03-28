import { useCallback } from "react";
import { Text, View } from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const MediumText = ({ children, style }) => {
  const [fontsLoaded] = useFonts({
    "Forum-Regular": require("../../../assets/fonts/Forum-Regular.ttf"),
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
      <Text style={[style, { fontFamily: "Forum-Regular" }]}>{children}</Text>
    </View>
  );
};
export default MediumText;
