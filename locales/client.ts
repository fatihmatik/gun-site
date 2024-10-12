// locales/client.ts
"use client";
import { createI18nClient } from "next-international/client";
import en from "./en";

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient(
  {
    en: async () => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return import("./en");
    },
    tr: async () => {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return import("./tr");
    },
  },
  {
    fallbackLocale: en,
  }
);
