import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ViewProps } from "tamagui";

export const ScreenWrapper: React.FC<ViewProps> = ({ children, ...props }) => {
  return (
    <View {...props} flex={1} backgroundColor="$bgSecondary">
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </View>
  );
};
export default ScreenWrapper;
