import React from "react";
import { useTheme, View, XStack } from "tamagui";
import { Icon, Text } from "../../components";
import { ChevronRight, LogOut, Star, Users } from "lucide-react-native";
import { useTranslation } from "react-i18next";
import Firebase from "../../utils/firebase";

export const SettingsScreen: React.FC = () => {
  const { t } = useTranslation();

  const BOTTOM_OPTIONS = [
    {
      titleKey: "review",
      icon: Star,
    },
    {
      titleKey: "about",
      icon: Users,
    },
    {
      titleKey: "logout",
      icon: LogOut,
      color: "red",
      showChevron: false,
      onPress: async () => {
        await Firebase.logOut();
      },
    },
  ];

  return (
    <View padding="$6" flex={1}>
      <Text variant="h2" weight="bold">
        {t("Screens.SettingsScreen.title")}
      </Text>

      <View flex={1} />

      <View gap="$4">
        {BOTTOM_OPTIONS.map((option) => (
          <SettinsgOption
            {...option}
            key={option.titleKey}
            title={t("Screens.SettingsScreen." + option.titleKey)}
          />
        ))}
      </View>
    </View>
  );
};

type SettingsOptionProps = {
  icon: React.ComponentType<any>;
  title: string;
  onPress?: () => void;
  color?: string;
  showChevron?: boolean;
};

const SettinsgOption: React.FC<SettingsOptionProps> = ({
  icon,
  title,
  onPress,
  color,
  showChevron,
}) => {
  const theme = useTheme();

  return (
    <XStack onPress={onPress} gap="$2">
      <Icon
        iconComponent={icon}
        size="$6"
        color={color ? theme.textError : theme.iconPrimary}
      />

      <View flex={1}>
        <Text
          variant="h3"
          weight="semibold"
          color={color ? theme.textError : undefined}
        >
          {title}
        </Text>
      </View>

      {showChevron !== false && (
        <Icon
          iconComponent={ChevronRight}
          size="$7"
          color={theme.iconPrimary}
        />
      )}
    </XStack>
  );
};

export default SettingsScreen;
