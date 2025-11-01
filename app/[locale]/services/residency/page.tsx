import Link from "next/link";
import React from "react";
import { getI18n } from "@/locales/server";

const EducationPage = async () => {
  const t = await getI18n();
  return (
    <div className="px-6 py-12 md:px-32  min-h-screen">
      {/* Why Study in Europe Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-secondary">
          {t("servicesEducationPage.whyEurope.h2")}
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {t("servicesEducationPage.whyEurope.p")}
        </p>
      </section>

      {/* Programs We Offer Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-secondary">
          {t("servicesEducationPage.whatWeOffer.h2")}
        </h2>
        <ul className="mt-4 space-y-4 text-lg text-gray-600">
          <li>- {t("servicesEducationPage.whatWeOffer.li1")}</li>
          <li>- {t("servicesEducationPage.whatWeOffer.li2")}</li>
          <li>- {t("servicesEducationPage.whatWeOffer.li3")}</li>
          <li>- {t("servicesEducationPage.whatWeOffer.li4")}</li>
        </ul>
      </section>

      {/* Why Italy */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-secondary">
          {t("servicesEducationPage.whyItaly.h2")}
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {t("servicesEducationPage.whyItaly.p1")}
        </p>
        <p className="mt-4 text-lg text-gray-600">
          {t("servicesEducationPage.whyItaly.p2")}
        </p>
      </section>

      {/* Application Process Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-secondary">
          {t("servicesEducationPage.applicationProcess.h2")}
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {t("servicesEducationPage.applicationProcess.p")}
        </p>
        <ul className="mt-4 space-y-4 text-lg text-gray-600">
          <li>- {t("servicesEducationPage.applicationProcess.li1")}</li>
          <li>- {t("servicesEducationPage.applicationProcess.li2")}</li>
          <li>- {t("servicesEducationPage.applicationProcess.li3")}</li>
          <li>- {t("servicesEducationPage.applicationProcess.li4")}</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mt-12">
        <h3 className="text-2xl font-bold text-primary">
          {t("servicesEducationPage.callToAction.h3")}
        </h3>
        <p className="mt-4 text-lg text-gray-600 mb-6">
          {t("servicesEducationPage.callToAction.p")}
        </p>
        <Link
          href="https://forms.gle/ogGVDV38wPpKbnnR6"
          target="_blank"
          rel="noreferrer"
          className=" px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-primary transition-colors"
        >
          {t("servicesEducationPage.callToAction.link")}
        </Link>
      </section>
    </div>
  );
};

export default EducationPage;
