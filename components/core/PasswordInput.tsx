import React from "react";
import Input, { InputProps } from "./Input";
import { Eye, EyeOff, KeyRound } from "lucide-react-native";
import { useTheme } from "tamagui";

const PasswordInput = ({ ...props }: InputProps) => {
  const theme = useTheme();

  const [isVisibile, setIsVisible] = React.useState(false);

  const handleOnAfterIconPress = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Input
      {...props}
      iconBefore={KeyRound}
      iconAfter={isVisibile ? EyeOff : Eye}
      iconAfterProps={{
        onPress: handleOnAfterIconPress,
        color: theme.iconPrimary,
      }}
      secureTextEntry={!isVisibile}
    />
  );
};

export default PasswordInput;
