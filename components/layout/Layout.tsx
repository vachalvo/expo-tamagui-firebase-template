import React from "react";
import { View, ViewProps } from "tamagui";

export const Layout: React.FC<ViewProps> = ({ children, ...props }) => {
  return (
    <View padding="$8" {...props}>
      {children}
    </View>
  );
};
export default Layout;
