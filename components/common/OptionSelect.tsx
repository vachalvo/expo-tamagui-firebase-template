import { useTheme, View, XStack } from "tamagui";
import { Icon, Text } from "../core";
import React from "react";

export type OptionProps = {
  name: string;
  text: string;
  icon: React.ElementType | string;
  onPress: (name: string) => void;
  isSelected?: boolean;
};

export const Option = ({
  name,
  text,
  icon,
  onPress,
  isSelected,
}: OptionProps) => {
  const theme = useTheme();

  return (
    <View
      width="100%"
      backgroundColor={isSelected ? "$surfaceBrand" : "$surfaceWhite"}
      borderRadius="$1"
      onPress={() => onPress(name)}
    >
      <XStack
        paddingHorizontal="$5"
        paddingVertical="$3"
        alignItems="center"
        gap="$4"
      >
        <Icon
          iconComponent={icon}
          size="$7"
          color={isSelected ? theme.textInvert : theme.iconPrimary}
        />
        <Text
          variant="h3"
          weight="bold"
          color={isSelected ? "$textInvert" : undefined}
        >
          {text}
        </Text>
      </XStack>
    </View>
  );
};

type OptionSelectProps = {
  value: string;
  onValueChange: (value: string) => void;
  options: Omit<OptionProps, "onPress">[];
};

export const OptionSelect = ({
  value,
  onValueChange,
  options,
}: OptionSelectProps) => {
  const _onOptionPress = (name: string) => {
    onValueChange(name);
  };

  return (
    <View width="100%" gap="$4">
      {options.map((option) => (
        <Option
          key={option.name}
          name={option.name}
          text={option.text}
          icon={option.icon}
          onPress={_onOptionPress}
          isSelected={value === option.name}
        />
      ))}
    </View>
  );
};

export default OptionSelect;
