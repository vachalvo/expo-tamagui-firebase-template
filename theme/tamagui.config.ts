import { config as defaultConfig } from "@tamagui/config/v3";

import {
  ColorTokens,
  createFont,
  createTamagui,
  createTokens,
  SizeTokens,
} from "tamagui";
import { ViewStyleWithPseudos } from "@tamagui/core";

export const tokens = createTokens({
  ...defaultConfig.tokens,
  size: {
    $true: 48,
    0: 0,
    "0.5": 2,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
  },
  zIndex: { 0: 0, 1: 100, 2: 200, 3: 300, 4: 400, 5: 500 },
  radius: {
    ...defaultConfig.tokens.radius,
    1: 4,
    4: 16,
    full: 9999,
  },
});

const PoppinsFont = createFont({
  family: "Poppins",
  size: {
    h1: 32,
    h2: 26,
    h3: 18,
    body: 16,
    caption: 12,
    4: 10,
  },
  weight: {
    6: "400",
    7: "900",
    bold: "800",
    semibold: "700",
    medium: "500",
    regular: "400",
    light: "300",
  },
  letterSpacing: {
    true: 1,
  },
  // these will be used when run in native mode.
  face: {
    400: { normal: "Poppins-Regular", italic: "Poppins-Italic" },
    500: { normal: "Poppins-Medium", italic: "Poppins-MediumItalic" },
    600: { normal: "Poppins-Medium", italic: "Poppins-MediumItalic" },
    700: { normal: "Poppins-SemiBold", italic: "Poppins-SemiBoldItalic" },
    800: { normal: "Poppins-Bold", italic: "Poppins-BoldItalic" },
    900: { normal: "Poppins-Bold", italic: "Poppins-BoldItalic" },
  },
});

const config = createTamagui({
  ...defaultConfig,
  tokens,
  fonts: {
    heading: PoppinsFont,
    body: PoppinsFont,
    Poppins: PoppinsFont,
  },
});

type GetShadowReturnType = Pick<
  ViewStyleWithPseudos,
  "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius"
> & {
  elevation?: SizeTokens;
};

export const getShadow = (
  level: 1 | 2 | 3 | 4,
  variant: "default" | "darker" | ColorTokens
): GetShadowReturnType => {
  let shadowColor: ColorTokens;
  let shadowOpacity: number;

  switch (variant) {
    case "darker": {
      shadowOpacity = 0.1;
      break;
    }
    case "default": {
      shadowOpacity = 0.05;
      break;
    }
    default: {
      shadowColor = variant;
      shadowOpacity = 0.05;
      break;
    }
  }

  switch (level) {
    case 1: {
      return {
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 1,
        shadowOpacity,
      };
    }
    case 2: {
      return {
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
        shadowOpacity,
      };
    }
    case 3: {
      return {
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 3,
        shadowOpacity,
      };
    }
    case 4: {
      return {
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 16 },
        elevation: 4,
        shadowOpacity,
      };
    }
  }
};

export default config;

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
