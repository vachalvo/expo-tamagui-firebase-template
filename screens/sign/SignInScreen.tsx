import React from "react";
import { View, XStack } from "tamagui";
import {
  Button,
  Input,
  LinkButton,
  PasswordInput,
  Text,
} from "../../components";
import useAuth from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";
import SignLayout from "../../components/layout/SignLayout";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { router } from "expo-router";

type FormData = {
  email: string;
  password: string;
};

const DEFAULT_VALUES: FormData = {
  email: "",
  password: "",
};

const VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required"),
});

export const SignInScreen: React.FC = () => {
  const { t } = useTranslation();

  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(VALIDATION_SCHEMA),
    defaultValues: DEFAULT_VALUES,
  });

  const submitHandler = async (formData: FormData) => {
    try {
      await signIn(formData.email, formData.password);
      router.push("(tabs)");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignLayout
      title={t("Screens.SignInScreen.title")}
      description={t("Screens.SignInScreen.description")}
    >
      <View gap="$4" flex={1} alignItems="center">
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              placeholder={t("Screens.SignInScreen.email")}
              onBlur={onBlur}
              value={value}
              onChangeText={(value) => onChange(value)}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <PasswordInput
              placeholder={t("Screens.SignInScreen.password")}
              onBlur={onBlur}
              value={value}
              onChangeText={(value) => onChange(value)}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <XStack gap="$2">
          <Text variant="body" weight="medium">
            {t("Screens.SignInScreen.forgotPassword")}
          </Text>
          <LinkButton
            onPress={() => {}}
            text={t("Screens.SignInScreen.resetPassword")}
          />
        </XStack>
      </View>

      <View alignItems="center" gap="$5">
        <Button
          text={t("Screens.SignInScreen.signIn")}
          onPress={handleSubmit(submitHandler)}
        />
        <XStack gap="$2">
          <Text variant="body" weight="medium">
            {t("Screens.SignInScreen.dontHaveAccount")}
          </Text>
          <LinkButton
            onPress={() => router.push("sign-up")}
            text={t("Screens.SignInScreen.signUp")}
          />
        </XStack>
      </View>
    </SignLayout>
  );
};

export default SignInScreen;
