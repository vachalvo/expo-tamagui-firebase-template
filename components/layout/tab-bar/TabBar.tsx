import React from "react";
import { XStack } from "tamagui";
import TabBarButton from "./TabBarButton";

type TabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

export const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  return (
    <XStack alignItems="center">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        const label = options.title !== undefined ? options.title : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TabBarButton
            key={route.name}
            isFocused={isFocused}
            onPress={onPress}
            label={label}
            icon={options.tabBarIcon({ focused: isFocused })}
          />
        );
      })}
    </XStack>
  );
};

export default TabBar;
