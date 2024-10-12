"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <div className="flex justify-center items-center space-x-3 ">
      <button onClick={() => changeLocale("en")}>
        <ReactCountryFlag
          countryCode="US"
          svg
          style={{
            fontSize: "2em",
            height: 24,
            width: 32,
          }}
          className="rounded-md"
        />
      </button>
      <div className="border border-t-gray-300 h-8" />
      <button onClick={() => changeLocale("tr")}>
        <ReactCountryFlag
          countryCode="TR"
          svg
          style={{
            fontSize: "2em",
            height: 24,
            width: 32,
          }}
          className="rounded-md"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
