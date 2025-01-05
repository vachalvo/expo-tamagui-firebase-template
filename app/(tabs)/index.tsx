import React from "react";
import { View } from "tamagui";
import { Text, ScreenWrapper } from "../../components";

export default function HomeTab() {
  return (
    <ScreenWrapper>
      <View flex={1} justifyContent="center" alignItems="center">
        <Text>This is home screen</Text>
      </View>
    </ScreenWrapper>
  );
}
