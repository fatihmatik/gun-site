import { getI18n } from "@/locales/server";
import React from "react";

const ServicesPage = async () => {
  const t = await getI18n();
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-extrabold text-primary mb-8">
        {t("servicesPage.titleH1")}
      </h1>
      <p className="text-center text-lg text-secondary mb-6 ">
        {t("servicesPage.titleP")}
      </p>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            {t("servicesPage.service1.h2")}
          </h2>
          <p className="text-secondary mb-4">{t("servicesPage.service1.p")}</p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            {t("servicesPage.learnMore")}
          </button>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            {t("servicesPage.service2.h2")}
          </h2>
          <p className="text-secondary mb-4">{t("servicesPage.service2.p")}</p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            {t("servicesPage.learnMore")}
          </button>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            {t("servicesPage.service3.h2")}
          </h2>
          <p className="text-secondary mb-4">{t("servicesPage.service3.p")}</p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            {t("servicesPage.learnMore")}
          </button>
        </div>

        {/* Service 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            {t("servicesPage.service4.h2")}
          </h2>
          <p className="text-secondary mb-4">{t("servicesPage.service4.p")}</p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            {t("servicesPage.learnMore")}
          </button>
        </div>

        {/* Service 5 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            {t("servicesPage.service5.h2")}
          </h2>
          <p className="text-secondary mb-4">{t("servicesPage.service5.p")}</p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            {t("servicesPage.learnMore")}
          </button>
        </div>

        {/* Service 6 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            {t("servicesPage.service6.h2")}
          </h2>
          <p className="text-secondary mb-4">{t("servicesPage.service1.p")}</p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            {t("servicesPage.learnMore")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
