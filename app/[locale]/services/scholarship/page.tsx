import React from "react";
import Link from "next/link";
import { getI18n } from "@/locales/server";

const ScholarshipPage = async () => {
  const t = await getI18n();
  return (
    <div className="flex flex-col items-center p-8 pt-16 space-y-6 min-h-screen px-6 py-12 md:px-32">
      <h1 className="text-3xl font-bold text-primary mb-6">
        {t("servicesScholarshipPage.header")}
      </h1>

      {/* Scholarship Overview */}
      <section className="mb-12 space-y-4 text-gray-600">
        <h2 className="text-2xl font-semibold text-secondary">
          {t("servicesScholarshipPage.scholarshipOverview.h2")}
        </h2>
        <p>{t("servicesScholarshipPage.scholarshipOverview.p")}</p>
      </section>

      {/* Benefits */}
      <section className="mb-12 space-y-4 text-gray-600">
        <h2 className="text-2xl font-semibold text-secondary">
          {t("servicesScholarshipPage.benefits.h2")}
        </h2>
        <ul className="list-disc list-inside">
          <li>{t("servicesScholarshipPage.benefits.li1")}</li>
          <li>{t("servicesScholarshipPage.benefits.li2")}</li>
          <li>{t("servicesScholarshipPage.benefits.li3")}</li>
          <li>{t("servicesScholarshipPage.benefits.li4")}</li>
        </ul>
        <p>{t("servicesScholarshipPage.benefits.p")}</p>
      </section>

      {/* Eligibility and Application Process */}
      <section className="mb-12 space-y-4 text-gray-600">
        <h2 className="text-2xl font-semibold text-secondary">
          {t("servicesScholarshipPage.eligibilityandApplication.h2")}
        </h2>
        <p>{t("servicesScholarshipPage.eligibilityandApplication.p")}</p>
        <ul className="list-disc list-inside">
          <li>{t("servicesScholarshipPage.eligibilityandApplication.li1")}</li>
          <li>{t("servicesScholarshipPage.eligibilityandApplication.li2")}</li>
          <li>{t("servicesScholarshipPage.eligibilityandApplication.li3")}</li>
          <li>{t("servicesScholarshipPage.eligibilityandApplication.li4")}</li>
          <li>{t("servicesScholarshipPage.eligibilityandApplication.li5")}</li>
          <li>{t("servicesScholarshipPage.eligibilityandApplication.li6")}</li>
        </ul>
      </section>

      {/* Application Deadlines */}
      <section className="mb-12 space-y-4 text-gray-600">
        <h2 className="text-2xl font-semibold text-secondary">
          {t("servicesScholarshipPage.applicationDeadlines.h2")}
        </h2>
        <p>{t("servicesScholarshipPage.applicationDeadlines.p")}</p>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h3 className="text-2xl font-bold text-primary">
          {t("servicesScholarshipPage.callToAction.h3")}
        </h3>
        <p className="mt-4 text-lg text-gray-600 mb-6">
          {t("servicesScholarshipPage.callToAction.p")}
        </p>
        <Link
          href="/contact"
          className="px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-primary transition-colors"
        >
          {t("servicesScholarshipPage.callToAction.link")}
        </Link>
      </section>
    </div>
  );
};

export default ScholarshipPage;
