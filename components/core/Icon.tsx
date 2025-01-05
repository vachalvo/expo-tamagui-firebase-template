import React from "react";
import {
  getVariableValue,
  useTheme,
  Variable,
  View,
  SizeTokens,
  getTokens,
} from "tamagui";

export type IconProps = {
  iconComponent: React.ElementType | string;
  size?: SizeTokens;
  color?: Variable<string> | string;
  onPress?: () => void;
};

const Icon: React.FC<IconProps> = ({
  iconComponent: IconComponent,
  size = "$10",
  color,
  onPress,
}) => {
  const theme = useTheme();

  // @ts-ignore
  const sizeValue = getTokens().size[size].val;
  const colorValue = getVariableValue(color ?? theme.iconBrand);

  return (
    <View
      onPress={onPress}
      width={sizeValue}
      height={sizeValue}
      alignItems="center"
      justifyContent="center"
    >
      <IconComponent color={colorValue} size={sizeValue} />
    </View>
  );
};

export default Icon;
