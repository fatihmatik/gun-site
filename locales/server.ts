// locales/server.ts
import { createI18nServer } from "next-international/server";
import en from "./en";
export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer(
    {
      en: () => import("./en"),
      tr: () => import("./tr"),
      bg: () => import("./bg"),
    },
    {
      fallbackLocale: en,
    }
  );
