import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeFeatures: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Avrupa'ya Gitmenin
            <span className="text-accent"> En Kolay </span>
            Yolu
          </h2>
        </div>

        {/* Three Feature Columns */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Column 1 */}
          <Link
            href="/services"
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center flex-1 transition-all duration-300 md:hover:-translate-y-8"
          >
            {/* eustars */}
            <div className="bg-accent rounded-full p-1 mb-6">
              <Image
                src="/svgs/european-flag-accent.svg"
                alt="eu-flag"
                height={48}
                width={48}
                className=""
              />
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-4">
              Servislerimiz
            </h3>
            <div className="bg-neutral-300 h-[1px] w-2/3 my-2 "></div>
            <p className="text-primary">Avrupa'da Çalışma ya da Staj</p>

            <p className="text-primary">
              Avrupa'da Lisans/Yükseklisans İmkanı{" "}
            </p>
          </Link>

          {/* Column 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex-1 flex flex-col items-center text-center transition-all duration-300 md:hover:-translate-y-4">
            <div className="bg-accent rounded-full p-4 mb-6">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" fill="none" width="24" height="24" />

                <g>
                  <path
                    d="M2 19h20v3H2zM12 2L2 6v2h20V6M17 10h3v7h-3zM10.5 10h3v7h-3zM4 10h3v7H4z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-4">
              OVERSEA EĞİTİM VE DANIŞMANLIK
            </h3>
            <div className="bg-neutral-300 h-[1px] w-2/3 my-2 "></div>
            <Link
              href="https://www.instagram.com/oversea.education?igsh=ZDRndTVvaTRmejV3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary relative group"
            >
              <span>@oversea.education</span>
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-primary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              <span className="absolute bottom-0 right-1/2 w-0 h-[1px] bg-primary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            </Link>
          </div>

          {/* Column 3 */}
          <Link
            href="/appointment"
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center flex-1 transition-all duration-300 md:hover:-translate-y-4"
          >
            {/* eustars */}
            <div className="bg-accent rounded-full p-1 mb-6">
              <Image
                src="/svgs/european-flag-accent.svg"
                alt="eu-flag"
                height={48}
                width={48}
                className=""
              />
            </div>
            <h3 className="text-lg lg:text-xl font-semibold text-primary mb-4">
              Avrupa Çok Yakın
            </h3>
            <div className="bg-neutral-300 h-[1px] w-2/3 my-2 "></div>

            <p className="text-primary">Hemen Başvur!</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
