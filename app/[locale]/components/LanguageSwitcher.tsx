"use client";

import { useChangeLocale } from "@/locales/client";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher = () => {
  const changeLocale = useChangeLocale();

  return (
    <div className="flex justify-center items-center space-x-3 ">
      <button onClick={() => changeLocale("en")}>
        <ReactCountryFlag
          countryCode="US"
          svg
          height={32}
          width={64}
          style={{
            fontSize: "2em",
          }}
          className="rounded-lg"
        />
      </button>
      <div className="border border-t-gray-300 h-8" />
      <button onClick={() => changeLocale("tr")}>
        <ReactCountryFlag
          countryCode="TR"
          svg
          height={32}
          width={64}
          style={{
            fontSize: "2em",
          }}
          className="rounded-lg"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
