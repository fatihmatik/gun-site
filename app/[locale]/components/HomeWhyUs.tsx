import { getI18n } from "@/locales/server";
import React from "react";
import AnimatedCounterRow from "./AnimatedCounterRow";

const HomeWhyUs = async () => {
  const t = await getI18n();
  return (
    <div className="pb-12">
      <div className="flex flex-col md:flex-row flex-1 pt-16">
        <h1 className="text-center md:w-1/3 md:ml-16 text-4xl font-extrabold text-primary">
          {t("homeWhyUs.h1.left")}{" "}
          <span className="text-secondary text-5xl">
            {t("homeWhyUs.h1.span")}
          </span>
          {t("homeWhyUs.h1.right")}
        </h1>
        <p className="text-center  md:w-2/3 md:text-end md:mr-16 text-primary pt-4">
          {t("homeWhyUs.p")}
        </p>
      </div>

      {/* flexbox */}
      <div className="relative">
        <div className="flex flex-col lg:gap-4 h-auto mt-4 lg:mt-12 ">
          {/* row 1 */}
          <div className="flex w-full h-36 gap-8">
            <div className="bg-gradient_flexbox_background rounded-3xl w-0 lg:w-[40%]"></div>
            <AnimatedCounterRow
              number={300}
              rightString={t("homeWhyUs.row1")}
              boxWidth={30}
            />
            <div className="bg-gradient_flexbox_background rounded-3xl w-0 "></div>
          </div>

          {/* Row 2 */}
          <div className="flex w-full h-36 gap-8">
            <div className="bg-gradient_flexbox_background rounded-3xl w-0 lg:w-[50%] bg-cover bg-center"></div>
            <AnimatedCounterRow
              number={100}
              rightString={t("homeWhyUs.row2")}
              boxWidth={25}
            />
            <div className="bg-gradient_flexbox_background rounded-3xl h-[80%] w-0 lg:w-[20%] self-end bg-cover bg-center"></div>
          </div>

          {/* row 3  */}
          <div className="flex w-full h-36 gap-8">
            <div className="bg-gradient_flexbox_background rounded-3xl w-0 lg:w-[65%]"></div>
            <AnimatedCounterRow
              leftString={t("homeWhyUs.row3.left")}
              number={10}
              rightString={t("homeWhyUs.row3.right")}
              boxWidth={23}
            />
            <div className="  bg-gradient_flexbox_background rounded-3xl w-0 lg:w-[8%]"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-10 z-10 opacity-0 lg:opacity-100">
          <img
            src="/images/whyusboss.png"
            alt="Overlay Image"
            className="h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeWhyUs;
