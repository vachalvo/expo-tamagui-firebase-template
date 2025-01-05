import React from "react";
import { View, XStack } from "tamagui";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AtSign, User } from "lucide-react-native";
import { KeyboardAvoidingView, Platform } from "react-native";

import {
  Button,
  Input,
  LinkButton,
  PasswordInput,
  Text,
} from "../../components";
import useAuth from "../../hooks/useAuth";
import SignLayout from "../../components/layout/SignLayout";

type FormData = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

const DEFAULT_VALUES: FormData = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must contain at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const SignUpScreen: React.FC = () => {
  const { t } = useTranslation();

  const { signUp } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(VALIDATION_SCHEMA),
    defaultValues: DEFAULT_VALUES,
  });

  const submitHandler = async (formData: FormData) => {
    console.log("asdf");
    try {
      await signUp(formData.email, formData.password);
      router.push("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInPress = () => {
    router.push("/sign-in");
  };

  return (
    <SignLayout
      title={t("Screens.SignUpScreen.title")}
      description={t("Screens.SignUpScreen.description")}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <View gap="$4">
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                iconBefore={AtSign}
                placeholder={t("Screens.SignUpScreen.email")}
                onBlur={onBlur}
                value={value}
                onChangeText={(value) => onChange(value)}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            name="username"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                iconBefore={User}
                placeholder={t("Screens.SignUpScreen.username")}
                onBlur={onBlur}
                value={value}
                onChangeText={(value) => onChange(value)}
                errorMessage={errors.username?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <PasswordInput
                placeholder={t("Screens.SignUpScreen.password")}
                onBlur={onBlur}
                value={value}
                onChangeText={(value) => onChange(value)}
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <PasswordInput
                placeholder={t("Screens.SignUpScreen.confirmPassword")}
                onBlur={onBlur}
                value={value}
                onChangeText={(value) => onChange(value)}
                errorMessage={errors.confirmPassword?.message}
              />
            )}
          />
        </View>

        <View flex={1} />

        <View alignItems="center" gap="$5">
          <Button
            onPress={handleSubmit(submitHandler)}
            text={t("Screens.SignUpScreen.signUp")}
          ></Button>
          <XStack gap="$2">
            <Text variant="body" weight="medium">
              {t("Screens.SignUpScreen.alreadyHaveAccount")}
            </Text>
            <LinkButton
              onPress={handleSignInPress}
              text={t("Screens.SignUpScreen.signIn")}
            />
          </XStack>
        </View>
      </KeyboardAvoidingView>
    </SignLayout>
  );
};

export default SignUpScreen;
