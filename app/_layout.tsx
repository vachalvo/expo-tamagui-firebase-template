import React from "react";
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { TamaguiProvider, Theme } from "@tamagui/core";
import { ActivityIndicator, useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

import "../firebase.config";
import "../i18n";

import config from "../theme/tamagui.config";
import { View } from "tamagui";
import { auth } from "../firebase.config";

export default function RootLayout() {
  const [fontLoaded, fontLoadedError] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontLoaded || fontLoadedError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontLoadedError]);

  if (!fontLoaded && !fontLoadedError) {
    return null;
  }

  return <Providers />;
}

function Providers() {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <Content />
    </TamaguiProvider>
  );
}

function Content() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any | null>();

  const router = useRouter();
  const segments = useSegments();

  const onAuthStateChanged = (user: any | null) => {
    console.log("onAuthStateChanged", user);
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    return auth.onAuthStateChanged(onAuthStateChanged);
  }, []);

  useEffect(() => {
    if (initializing) return;

    const inTabs = segments[0] === "(tabs)";

    if (user && !inTabs) {
      router.replace("(tabs)");
    } else if (!user && inTabs) {
      router.replace("sign-in");
    }
  }, [user, initializing]);

  if (initializing)
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <Theme name={"light"}>
      <Stack
        initialRouteName="sign-in"
        screenOptions={{ headerShown: false }}
      />
    </Theme>
  );
}
