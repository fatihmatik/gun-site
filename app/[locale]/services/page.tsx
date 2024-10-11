import React from "react";

const ServicesPage = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-extrabold text-primary mb-8">
        Our Services
      </h1>
      <p className="text-center text-lg text-secondary mb-6 ">
        At Oversea, we provide comprehensive consultancy services to help you
        achieve your educational and career aspirations in Italy. Explore our
        services below:
      </p>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            Visa Consultancy
          </h2>
          <p className="text-secondary mb-4">
            We offer expert guidance on visa applications for undergraduate and
            master's programs in Italy, ensuring a smooth process from start to
            finish.
          </p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            Learn More
          </button>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            Scholarship Opportunities
          </h2>
          <p className="text-secondary mb-4">
            We help you identify and apply for scholarships that can make your
            education in Italy more affordable. Maximize your chances of
            securing funding.
          </p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            Learn More
          </button>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            Internship Placement
          </h2>
          <p className="text-secondary mb-4">
            Our team assists in finding paid internship opportunities in Italy,
            providing invaluable experience in your field while you study.
          </p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            Learn More
          </button>
        </div>

        {/* Service 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            Career Guidance
          </h2>
          <p className="text-secondary mb-4">
            Receive personalized career advice and strategies to enhance your
            employability in Italy and beyond. We are here to support your
            professional journey.
          </p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            Learn More
          </button>
        </div>

        {/* Service 5 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            Language Support
          </h2>
          <p className="text-secondary mb-4">
            We provide language support and resources to help you improve your
            Italian skills, essential for both academic and professional
            success.
          </p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            Learn More
          </button>
        </div>

        {/* Service 6 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
          <h2 className="text-xl font-bold text-primary mb-4">
            Ongoing Support
          </h2>
          <p className="text-secondary mb-4">
            Our commitment doesn't end with your placement. We offer ongoing
            support to ensure your experience in Italy is as rewarding as
            possible.
          </p>
          <button className="mt-auto bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
