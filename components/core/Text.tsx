import React from "react";
import { SizableText, SizableTextProps, styled, useTheme } from "tamagui";

export type TextProps = SizableTextProps & {
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  weight?: "light" | "regular" | "medium" | "semibold" | "bold";
};

export const StyledText = styled(SizableText, {
  fontFamily: "$body",
  fontWeight: "$regular",

  variants: {
    variant: {
      h1: {
        size: "$h1",
      },
      h2: {
        size: "$h2",
      },
      h3: {
        size: "$h3",
      },
      body: {
        size: "$body",
      },
      caption: {
        size: "$caption",
      },
    },
    weight: {
      light: {
        fontWeight: "$light",
      },
      regular: {
        fontWeight: "$regular",
      },
      medium: {
        fontWeight: "$medium",
      },
      semibold: {
        fontWeight: "$semibold",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
  } as const,
});

const Text = ({ variant, weight, ...props }: TextProps) => {
  const theme = useTheme();
  return (
    <StyledText
      color={theme.textPrimary}
      {...props}
      variant={variant}
      weight={weight}
    />
  );
};

export default Text;
