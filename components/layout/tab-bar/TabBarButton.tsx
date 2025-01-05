import React from "react";
import { styled, useTheme, View } from "tamagui";
import { Text } from "../../core";

export type TabBarButtonProps = {
  isFocused: boolean;
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
};

const TabBarWrapper = styled(View, {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: "$1.5",
  padding: "$2",
  paddingTop: "$3",
  borderBottomWidth: "$1",
  borderColor: "transparent",

  variants: {
    isFocused: {
      true: {
        borderColor: "$borderBrand",
      },
    },
  } as const,
});

export const TabBarButton: React.FC<TabBarButtonProps> = ({
  isFocused,
  label,
  icon,
  onPress,
}) => {
  const theme = useTheme();

  return (
    <TabBarWrapper onPress={onPress} isFocused={isFocused}>
      {icon}

      <Text
        variant="caption"
        weight="medium"
        color={isFocused ? theme.textBrand : undefined}
      >
        {label}
      </Text>
    </TabBarWrapper>
  );
};

export default TabBarButton;
