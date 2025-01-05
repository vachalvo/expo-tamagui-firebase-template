import React from "react";
import {
  ButtonProps as TGButtonProps,
  Button as TGButton,
  useTheme,
} from "tamagui";
import Text from "./Text";

type ButtonProps = TGButtonProps & {
  text: string;
};

const Button = (props: ButtonProps) => {
  const theme = useTheme();

  return (
    <TGButton
      {...props}
      width="100%"
      backgroundColor={theme.surfaceBrand}
      borderRadius="$1"
    >
      <Text variant="body" weight="bold" color="$textInvert">
        {props.text}
      </Text>
    </TGButton>
  );
};

export default Button;
