import React from "react";
import {
  InputProps as TGInputProps,
  XStack,
  Input as TGInput,
  View,
  styled,
  useTheme,
} from "tamagui";
import Icon, { IconProps } from "./Icon";
import Text from "./Text";

export type InputProps = TGInputProps & {
  iconBefore?: React.ElementType;
  iconAfter?: React.ElementType;
  onAfterIconPress?: () => void;
  iconAfterProps?: Omit<IconProps, "iconComponent">;
  errorMessage?: string;
};

const InputWrapper = styled(XStack, {
  gap: "$3",
  backgroundColor: "$bgWhite",
  borderRadius: "$1",
  borderWidth: 1,
  borderColor: "transparent",
  width: "100%",
  alignItems: "center",
  paddingVertical: "$2",
  paddingHorizontal: "$3",

  focusStyle: {
    borderColor: "$borderDarkenLight",
  },

  variants: {
    isError: {
      true: {
        borderColor: "$borderError",
        backgroundColor: "$surfaceErrorSoft",
      },
    },
  } as const,
});

const StyledInput = styled(TGInput, {
  unstyled: true,

  fontSize: "$body",
  fontFamily: "$body",
  fontWeight: "$medium",

  paddingTop: "$1",
});

const Input = ({
  iconBefore,
  iconAfter,
  onAfterIconPress,
  iconAfterProps,
  errorMessage,
  ...props
}: InputProps) => {
  const theme = useTheme();

  const isError = !!errorMessage;

  return (
    <View>
      <InputWrapper isError={isError}>
        {iconBefore && (
          <Icon
            iconComponent={iconBefore}
            color={theme.iconPrimaryLight}
            size="$5"
          />
        )}
        <StyledInput flex={1} {...props} />
        {iconAfter && (
          <Icon
            color={theme.iconPrimaryLight}
            size="$5"
            {...iconAfterProps}
            iconComponent={iconAfter}
          />
        )}
      </InputWrapper>

      {errorMessage && (
        <Text color="$textError" variant="body" marginTop="$1">
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default Input;
