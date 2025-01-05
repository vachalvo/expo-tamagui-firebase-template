import React from "react";
import { Tabs } from "expo-router";
import { Bolt, House } from "lucide-react-native";
import { getVariableValue, useTheme } from "tamagui";

import { Icon, TabBar } from "../../components";

export default function TabLayout() {
  const theme = useTheme();

  const tabs = [
    {
      name: "index",
      title: "Home",
      icon: House,
      focusedIcon: House,
    },
    {
      name: "settings",
      title: "Settings",
      icon: Bolt,
    },
  ];

  const activeBaryTintColor = getVariableValue(theme.iconBrand);

  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: activeBaryTintColor }}
      tabBar={TabBar}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            headerShown: false,
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <Icon
                iconComponent={tab.icon}
                size="$6"
                color={focused ? theme.iconBrand : theme.iconPrimary}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
