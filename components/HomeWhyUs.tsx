import React from "react";

const HomeWhyUs = () => {
  return (
    <div className="pb-12">
      <div className="flex flex-col md:flex-row flex-1 pt-16">
        <h1 className="text-center md:w-1/3 md:ml-16 text-4xl font-extrabold text-primary">
          Neden <span className="text-accent text-5xl">Oversea</span>'yı Tercih
          Etmelisiniz?
        </h1>
        <p className="text-center  md:w-2/3 md:text-end md:mr-16 text-primary pt-4">
          Avrupa hem eğitim hem de çalışma deneyimi için olsun profesyonel
          ekibimizle beraber herhangi bir engelle ya da pürüzle karşılaşmadan en
          iyi deneyimi yaşayabilmek için gelin beraber hayallerinizi
          gerçekleştirelim!
        </p>
      </div>

      {/* flexbox */}
      <div className="relative">
        <div className="flex flex-col lg:gap-4 h-auto mt-4 lg:mt-12 ">
          {/* row 1 */}
          <div className="flex w-full h-36 gap-8">
            <div className="bg-gradient_flexbox_background rounded-3xl w-0 lg:w-[40%]"></div>
            <div className="bg-lightaccent rounded-3xl text-4xl text-white p-4 lg:p-8 w-full lg:w-[30%] text-center self-center">
              <span className="text-primary font-extrabold text-5xl">
                300+{" "}
              </span>
              Bizi Tercih Edenler
            </div>
            <div className="bg-gradient_flexbox_background rounded-3xl w-0 "></div>
          </div>

          {/* Row 2 */}
          <div className="flex w-full h-36 gap-8">
            <div className="bg-gradient_flexbox_background rounded-3xl w-0 lg:w-[50%] bg-cover bg-center"></div>
            <div className="bg-lightaccent rounded-3xl text-4xl text-white p-4 lg:p-8 w-full lg:w-[25%] text-center self-center">
              <span className="text-primary font-extrabold text-5xl">
                100+{" "}
              </span>
              Şirket
            </div>
            <div className="bg-gradient_flexbox_background rounded-3xl h-[80%] w-0 lg:w-[20%] self-end bg-cover bg-center"></div>
          </div>

          {/* row 3  */}
          <div className="flex w-full h-36 gap-8">
            <div className="bg-gradient_flexbox_background rounded-3xl w-0 lg:w-[65%]"></div>
            <div className="bg-lightaccent rounded-3xl text-4xl text-white p-4 lg:p-8 w-full lg:w-[23%] text-center self-center">
              İtalya'da
              <span className="text-primary font-extrabold text-5xl">
                {" "}
                10+{" "}
              </span>
              şehir
            </div>
            <div className="  bg-gradient_flexbox_background rounded-3xl w-0 lg:w-[8%]"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-10 z-10 opacity-0 lg:opacity-100">
          <img
            src="/images/stockgirl.png"
            alt="Overlay Image"
            className="h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeWhyUs;
