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
      <p className="mb-4">{t("aboutUsPage.paragraph1")}</p>

      {/* paragraph 2*/}
      <p className="mb-4">{t("aboutUsPage.paragraph2")}</p>

      {/* paragraph 3*/}
      <p className="mb-4">{t("aboutUsPage.paragraph3")}</p>

      {/* paragraph 4 */}
      <p className="mb-4">{t("aboutUsPage.paragraph4")}</p>
    </div>
  );
};

export default page;
