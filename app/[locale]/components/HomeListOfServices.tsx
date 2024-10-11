import Image from "next/image";
import React from "react";

const HomeListOfServices = () => {
  return (
    <div className="bg-cyan-500 -mx-32 h-fit">
      <div className="flex justify-around items-center px-32 py-10 text-2xl">
        {/* Services Section */}
        <div className="w-1/3 space-y-4 text-white">
          <Image
            height={256}
            width={256}
            src="/images/oversealogowithtext.png"
            alt="oversealogo"
            className="object-contain"
          />

          <h4 className="text-2xl font-semibold ">Servislerimiz</h4>
          <ul className="list-disc list-inside space-y-1 ">
            <li>Aylık 530-1100 € Destek</li>
            <li>1-6 ay süre</li>
            <li>41 ülkede proje fırsatı</li>
            <li className="font-semibold mt-2">Çalışma Alanları:</li>
            <ul className="ml-4 list-disc list-inside space-y-1 uppercase">
              <li>Promosyon ve Medya</li>
              <li>Eğitim servisleri</li>
              <li>Mimarlık ve İnşaat</li>
              <li>Mühendislik</li>
              <li>Turizm</li>
              <li>Gayrimenkul</li>
              <li>Linguistik</li>
              <li>Bilişim Teknolojileri</li>
              <li>Gıda</li>
            </ul>
          </ul>
          <p className="text-sm  mt-4">Kalma ve Yolculuk hariçtir</p>
          <p className="text-sm font-medium ">
            Eğer yurtdışı çalışma deneyimine hazırsanız, bugün başvurun!
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="w-1/3 text-center text-white">
          <p className="text-2xl font-semibold ">
            "OVERSEA EĞİTİM VE DANIŞMANLIK"
          </p>
          <a href="#" className=" hover:underline">
            @oversea.education
          </a>
        </div>

        {/* Application Fee Section */}
        <div className="w-1/3 text-center text-cyan-500 bg-white">
          <p className="text-lg font-semibold ">Başvuru Ücreti</p>
          <p className="text-8xl font-bold ">200€</p>
          <p className="text-sm ">10 Şubat 2024'e kadar</p>
          <a href="#" className=" hover:underline">
            @oversea.education
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeListOfServices;
