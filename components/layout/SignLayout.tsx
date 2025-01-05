import React, { PropsWithChildren } from "react";
import { useTheme, View } from "tamagui";
import { Icon, Text } from "../core";
import { ArrowLeft } from "lucide-react-native";
import { router, useNavigation } from "expo-router";

type SignLayoutScreenProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export const SignLayout: React.FC<SignLayoutScreenProps> = ({
  title,
  description,
  children,
}) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <View flex={1} padding="$4">
      <View paddingVertical="$8" gap="$6">
        {navigation.canGoBack() ? (
          <Icon
            size="$10"
            iconComponent={ArrowLeft}
            color={theme.iconPrimary}
            onPress={() => router.back()}
          />
        ) : (
          <View width="$10" height="$10" />
        )}

        <View>
          <Text variant="h1" weight="bold">
            {title}
          </Text>
          <Text variant="h3">{description}</Text>
        </View>
      </View>

      {children}
    </View>
  );
};
export default SignLayout;
