import { useChangeLocale } from "@/locales/client";

const LanguageSwitcher = () => {
  const changeLocale = useChangeLocale();

  return (
    <>
      <button onClick={() => changeLocale("en")}>English</button>
      <button onClick={() => changeLocale("tr")}>Turkish</button>
    </>
  );
};

export default LanguageSwitcher;
