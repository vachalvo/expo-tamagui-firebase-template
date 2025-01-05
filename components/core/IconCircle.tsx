import React from "react";
import { IconProps } from "./Icon";
import {
  View,
  getTokenValue,
  getVariableValue,
  Token,
  useTheme,
} from "tamagui";

const IconCircle: React.FC<IconProps> = ({
  iconComponent: IconComponent,
  size = "$10",
  color,
}) => {
  const theme = useTheme();

  const colorValue = getVariableValue(color ?? theme.iconBrand);
  const sizeValue = getTokenValue(size as Token);

  return (
    <View
      width={size}
      height={size}
      borderRadius="$full"
      backgroundColor={theme.bgWhite}
      justifyContent="center"
      alignItems="center"
    >
      <IconComponent size={sizeValue * 0.8} color={colorValue} />
    </View>
  );
};

export default IconCircle;
