import Link from "next/link";
import React from "react";
import { getI18n } from "@/locales/server";

const page = async () => {
  const t = await getI18n();
  return (
    <div className="flex flex-col items-center p-8 pt-16 space-y-6 min-h-screen px-6 py-12 md:px-32">
      <h2 className="text-lg text-gray-600">
        {t("servicesIntershipPage.header")}
      </h2>

      {/* Opportunities section */}
      <section className="mb-12 space-y-4 text-gray-600">
        <h2 className="text-2xl font-semibold text-secondary">
          {t("servicesIntershipPage.opportunities.intershipH2")}
        </h2>
        <p>{t("servicesIntershipPage.opportunities.intershipP")}</p>
        <h2 className="text-2xl font-semibold text-secondary">
          {t("servicesIntershipPage.opportunities.workH2")}
        </h2>
        <p>{t("servicesIntershipPage.opportunities.workP")}</p>
      </section>

      {/* Application Process Section */}
      <section className="mb-12 space-y-4  w-full">
        <h2 className="text-3xl font-semibold text-secondary">
          {t("servicesIntershipPage.applicationProcess.h2")}
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {t("servicesIntershipPage.applicationProcess.p")}
        </p>
        <ul className="mt-4 space-y-4 text-lg text-gray-600">
          <li>- {t("servicesIntershipPage.applicationProcess.li1")}</li>
          <li>- {t("servicesIntershipPage.applicationProcess.li2")}</li>
          <li>- {t("servicesIntershipPage.applicationProcess.li3")}</li>
          <li>- {t("servicesIntershipPage.applicationProcess.li4")}</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <h3 className="text-2xl font-bold text-primary">
          {t("servicesIntershipPage.callToAction.h3")}
        </h3>
        <p className="mt-4 text-lg text-gray-600 mb-6">
          {t("servicesIntershipPage.callToAction.p")}
        </p>
        <Link
          href="https://forms.gle/aVBjhJzut2tFGPRW7"
          target="_blank"
          rel="noreferrer"
          className=" px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-primary transition-colors"
        >
          {t("servicesIntershipPage.callToAction.link")}
        </Link>
      </section>
    </div>
  );
};

export default page;
