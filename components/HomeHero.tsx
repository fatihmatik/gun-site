import React from "react";

const HomeHero = () => {
  return (
    <div className="py-12 container mx-auto px-6 lg:px-16">
      <div className="container flex  items-center justify-between ">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 space-y-4 ">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Avrupa'ya <span className="text-accent "> Hemen</span> Ulaşın!
          </h1>
          <p className="text-lg text-primary">
            İtalya'da Üniversiteler için Lisans ve Yükseklisans okul başvuruları
          </p>

          <div className="py-3">
            <a
              href="/get-started"
              className="bg-accent text-white py-3 px-8 rounded-lg font-medium transition-all duration-all hover:bg-lightaccent "
            >
              Gelin Başlayalım!
            </a>
          </div>

          <div className="flex space-x-4 mt-8 ">
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <h4 className="font-semibold text-lg text-primary">
                İşte yurtdışı fırsatınız
              </h4>
              <p className="text-secondary">
                Tecrübe kazanmak isteyen bir öğrenciyseniz.
              </p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <h4 className="font-semibold text-lg text-primary">
                Avrupa'da deneyim kazanın
              </h4>
              <p className="text-secondary ">
                İtalya'da 10 farklı ev sahibi şirketimiz.
              </p>
            </div>
          </div>
        </div>
        {/* right section image content */}
        <div className="absolute lg:static lg:block lg:w-1/2 ml-8 opacity-10 lg:opacity-100 -z-10">
          <img
            src="/images/oversealogowithtext.png"
            alt="Student holding books"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
