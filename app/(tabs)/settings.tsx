import React from "react";
import { ScreenWrapper, Text } from "../../components";
import { View } from "tamagui";

export function Settings() {
  return (
    <ScreenWrapper>
      <View flex={1} justifyContent="center" alignItems="center">
        <Text>This is settings screen screen</Text>
      </View>
    </ScreenWrapper>
  );
}

export default Settings;
