import { getI18n } from "@/locales/server";
import React from "react";

const page = async () => {
  const t = await getI18n();
  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-4">
        {t("aboutUsPage.title")}
      </h1>
      {/* paragraph 1 */}
      <p className="mb-4">
        {t("aboutUsPage.paragraph1.left")}
        <span className="text-secondary font-semibold">
          {" "}
          {t("aboutUsPage.paragraph1.span")}{" "}
        </span>
        {t("aboutUsPage.paragraph1.right")}
      </p>
      {/* paragraph 2*/}
      <p className="mb-4">
        🌍🎓 <strong> {t("aboutUsPage.paragraph2")}</strong>
      </p>
      {/* paragraph 3*/}
      <p className="mb-4">{t("aboutUsPage.paragraph3")}</p>

      {/* paragraph 4 */}
      <h2 className="text-2xl font-bold text-primary mt-6 mb-2">
        {t("aboutUsPage.paragraph4.h2")}
      </h2>
      <p className="mb-4">{t("aboutUsPage.paragraph4.p")}🌟</p>

      {/* paragraph 5 */}
      <h2 className="text-2xl font-bold text-primary mt-6 mb-2">
        {t("aboutUsPage.paragraph5.h2")}
      </h2>
      <p className="mb-4">{t("aboutUsPage.paragraph5.p")} ✅</p>

      {/* paragraph 6 */}
      <h2 className="text-2xl font-bold text-primary mt-6 mb-2">
        {t("aboutUsPage.paragraph6.h2")}
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>{t("aboutUsPage.paragraph6.li1")}</li>
        <li>{t("aboutUsPage.paragraph6.li2")}</li>
        <li>{t("aboutUsPage.paragraph6.li3")}</li>
        <li>{t("aboutUsPage.paragraph6.li4")}</li>
        <li>{t("aboutUsPage.paragraph6.li5")}</li>
      </ul>
      {/* paragraph 7 */}
      <p className="mb-4">{t("aboutUsPage.paragraph7")} 💼🌍</p>
    </div>
  );
};

export default page;
