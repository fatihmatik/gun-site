import { getI18n } from "@/locales/server";
import Link from "next/link";
import React from "react";

const ServicesPage = async () => {
  const t = await getI18n();
  return (
    <>
      {/* Flag Image Container - Full Width */}
      <div className="w-full h-[40vh] flex">
        <div className="w-full h-full">
          <img
            src="/images/bg-eu-merge-flag.jpg" // Path to your image in the /public folder
            alt="bg-and-eu-flag"
            className="w-full h-full object-cover" // object-cover ensures the image fills the container without distortion
          />
        </div>
      </div>

      <div className="px-4 py-8 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-center text-4xl font-extrabold text-primary mb-8">
          {t("servicesPage.titleH1")}
        </h1>
        <p className="text-center text-lg text-secondary mb-6 ">
          {t("servicesPage.titleP")}
        </p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <Link
            href="/services/education"
            className="bg-white rounded-2xl shadow-lg p-6 py-12 flex flex-col"
          >
            <h2 className="text-xl font-bold text-primary mb-4">
              {t("servicesPage.service1.h2")}
            </h2>
            <p className="text-secondary mb-4">
              {t("servicesPage.service1.p")}
            </p>
            <div className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition text-center">
              {t("servicesPage.learnMore")}
            </div>
          </Link>

          {/* Service 2 */}
          <Link
            href="/services/scholarship"
            className="bg-white rounded-2xl shadow-lg p-6 py-12 flex flex-col"
          >
            <h2 className="text-xl font-bold text-primary mb-4">
              {t("servicesPage.service2.h2")}
            </h2>
            <p className="text-secondary mb-4">
              {t("servicesPage.service2.p")}
            </p>
            <div className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition text-center">
              {t("servicesPage.learnMore")}
            </div>
          </Link>

          {/* Service 3 */}
          <Link
            href="/services/internship"
            className="bg-white rounded-2xl shadow-lg p-6 py-12 flex flex-col"
          >
            <h2 className="text-xl font-bold text-primary mb-4">
              {t("servicesPage.service3.h2")}
            </h2>
            <p className="text-secondary mb-4">
              {t("servicesPage.service3.p")}
            </p>
            <div className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition text-center">
              {t("servicesPage.learnMore")}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
