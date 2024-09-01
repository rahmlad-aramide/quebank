import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyledView } from "@/components/StyledComponents";
import { ActivityIndicator } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    // Montserrat: require('../assets/fonts/Montserrat-Regular.woff'),
  });

  useEffect(() => {
    const checkSignUpStatus = async () => {
      try {
        const signUpStatus = await AsyncStorage.getItem("isSignedUp");
        if (signUpStatus !== null) {
          setIsSignedUp(true);
        }
      } catch (error) {
        console.log("Error checking sign-up status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkSignUpStatus();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || isLoading) {
    return (
      <StyledView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </StyledView>
    );
  }

  return (
      <Stack initialRouteName={isSignedUp ? "signin" : "index"}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
