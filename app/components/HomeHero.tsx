import React from "react";

const HomeHero = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-16">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Avrupa'ya gidin<span className="text-accent"> Hemen</span>
          </h1>
          <p className="text-lg text-gray-600">
            İtalya'da Üniversiteler için Lisans ve Yükseklisans okul başvuruları
          </p>

          <div className="mt-6">
            <a
              href="/get-started"
              className="bg-accent hover:bg-accent-dark text-white py-3 px-8 rounded-lg font-medium"
            >
              Gelin Başlayalım!
            </a>
          </div>

          <div className="flex space-x-4 mt-8">
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <h4 className="font-semibold text-lg">
                İşte yurtdışı fırsatınız
              </h4>
              <p className="text-gray-500">
                Tecrübe kazanmak isteyen bir öğrencisyseniz.
              </p>
            </div>
            <div className="bg-white shadow-lg p-4 rounded-lg">
              <h4 className="font-semibold text-lg">
                Avrupa'da deneyim kazanın
              </h4>
              <p className="text-gray-500">
                İtalya'da 10 farklı ev sahibi şirketimiz.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-full lg:w-1/2">
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
