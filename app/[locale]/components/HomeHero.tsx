"use client";
import { useI18n } from "@/locales/client";

import Image from "next/image";
import Link from "next/link";

const HomeHero = () => {
  const t = useI18n();
  return (
    <div className="py-12 container mx-auto px-6 lg:px-16">
      <div className="container flex  items-center justify-between ">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 space-y-4 ">
          <div className="flex">
            <div className="flex flex-col ml-auto">
              <h1 className="text-4xl lg:text-4xl font-bold text-primary w-full ">
                {t("homeHero.leftSectionTextH1.Left")}
                <span className="text-secondary ">
                  {" "}
                  {t("homeHero.leftSectionTextH1.Span")}
                </span>{" "}
                {t("homeHero.leftSectionTextH1.Right")}
              </h1>
              <p className="text-lg text-primary mt-1">
                {t("homeHero.leftSectionTextP")}
              </p>
            </div>
            {/* euflag */}
            <Image
              src="/svgs/european-flag.svg"
              alt="eu-flag"
              height={64}
              width={96}
              className="bg-blue-800 mx-auto rounded-xl hidden md:block"
            />
          </div>

          <div className="py-3">
            <Link
              href="/services"
              className="bg-secondary text-white py-3 px-8 rounded-lg font-medium transition-all duration-all hover:bg-secondary "
            >
              {t("homeHero.leftSectionTextLink")}
            </Link>
          </div>
          {/* Services */}
          <div className="flex space-x-4 mt-8 ">
            <Link
              href={"/services/education"}
              className="bg-white shadow-lg p-4 rounded-lg flex flex-col flex-1 hover:scale-110 transition-all duration-300 border-[2px] border-blue-500"
            >
              <h4 className="font-semibold text-lg text-primary text-center">
                {t("homeHero.leftSectionLeftH4")}
              </h4>
              <p className="text-secondary text-center">
                {t("homeHero.leftSectionLeftP")}
              </p>
            </Link>
            <Link
              href={"services/internship"}
              className="bg-white shadow-lg p-4 rounded-lg flex flex-col flex-1 hover:scale-110 transition-all duration-300 border-[2px] border-blue-500"
            >
              <h4 className="font-semibold text-lg text-primary text-center ">
                {t("homeHero.leftSectionRightH4")}
              </h4>
              <p className="text-secondary text-center">
                {t("homeHero.leftSectionRightP")}
              </p>
            </Link>
          </div>
        </div>
        {/* right section image content */}
        <div className="absolute lg:static lg:block lg:w-1/2 ml-8 opacity-10 lg:opacity-100 -z-10">
          <img
            src="/images/oversealogowithtext.png"
            alt="Student holding books"
            className="w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
