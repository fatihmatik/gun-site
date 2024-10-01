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
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center flex-1 transition-all duration-300 md:hover:-translate-y-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-primary mb-4">
              Servislerimiz
            </h3>
            <div className="bg-neutral-300 h-[1px] w-2/3 my-2 "></div>
            <p className="text-primary">
              Aylık
              <span className="text-accent font-bold"> 530-1100€ </span>
              Destek
            </p>

            <p className="text-primary"> 1-6 ay süre </p>
          </div>

          {/* Column 2 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex-1 flex flex-col items-center text-center transition-all duration-300 md:hover:-translate-y-10">
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
            <p className="text-primary">@oversea.education</p>
          </div>

          {/* Column 3 */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-center items-center flex-1 transition-all duration-300 md:hover:-translate-y-8">
            {/* <div className="bg-accent rounded-full p-4 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div> */}
            <h3 className="text-lg lg:text-xl font-semibold text-primary mb-4">
              Başvuru Ücreti
            </h3>
            <h2 className="text-3xl lg:text-4xl font-semibold text-accent mb-4">
              200€
            </h2>
            <div className="bg-neutral-300 h-[1px] w-2/3 my-2 "></div>

            <p className="text-primary">Hemen Başvur!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
