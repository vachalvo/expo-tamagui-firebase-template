import React from "react";
import Text from "./Text";

type LinkButtonProps = {
  onPress: () => void;
  text: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ onPress, text }) => {
  return (
    <Text
      variant="body"
      weight="medium"
      onPress={onPress}
      color="$textAccent"
      textDecorationLine="underline"
    >
      {text}
    </Text>
  );
};

export default LinkButton;
