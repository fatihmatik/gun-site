import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-sans font-bold text-primary mb-8">
        Contact Us
      </h1>
      <p className="text-center text-lg text-secondary mb-6">
        We would love to hear from you! Whether you have questions, need more
        information, or want to schedule a consultation, please fill out the
        form below.
      </p>

      <div className="flex flex-col md:flex-row md:gap-8 ">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 w-full md:w-fit ">
          <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-secondary mb-1 font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe" // Optional: Add a placeholder for clarity
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-secondary mb-1 font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email address" // Optional: Add a placeholder for clarity
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-secondary mb-1 font-bold"
              >
                Phone Number
              </label>
              <input
                type="tel" // Change the type to "tel" for phone numbers
                id="phone" // Change the id to "phone"
                required
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your phone number" // Optional: Add a placeholder for clarity
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-secondary mb-1 font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="I would like to know about..." // Optional: Add a placeholder for clarity
              ></textarea>
            </div>
            <button className="w-full bg-primary text-white rounded-lg py-2 hover:bg-secondary transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 md:mt-0 w-full md:w-fit md:mx-6 flex flex-col">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Our Contact Information
          </h2>
          <p className="text-secondary mb-2">
            <strong>Email:</strong> contact@oversea.com
          </p>
          <p className="text-secondary mb-2">
            <strong>Phone:</strong> +90 541 597 7568
          </p>
          <p className="text-secondary mb-2">
            <strong>Address:</strong> Ankara/Türkiye
          </p>
          <p className="text-secondary">
            Follow us on social media for updates:
          </p>
          <div className="flex mt-4 gap-4 items-center justify-end">
            <Link
              href={"https://www.facebook.com/share/1ybxXumtFyoJBCZz/"}
              className="transition-transform duration-300 hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svgs/facebook-icon.svg"
                alt="facebook-icon"
                width={27}
                height={27}
                style={{
                  filter:
                    "invert(27%) sepia(18%) saturate(2272%) hue-rotate(167deg) brightness(89%) contrast(101%)",
                }}
              />
            </Link>
            <Link
              href={
                "https://www.instagram.com/oversea.education?igsh=ZDRndTVvaTRmejV3"
              }
              className="transition-transform duration-300 hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svgs/instagram-icon.svg"
                alt="facebook-icon"
                width={28}
                height={28}
                style={{
                  filter:
                    "invert(27%) sepia(18%) saturate(2272%) hue-rotate(167deg) brightness(89%) contrast(101%)",
                }}
              />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/company/oversea-education-consulting/"
              }
              className="transition-transform duration-300 hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svgs/linkedin-icon.svg"
                alt="facebook-icon"
                width={42}
                height={42}
                style={{
                  filter:
                    "invert(27%) sepia(18%) saturate(2272%) hue-rotate(167deg) brightness(89%) contrast(101%)",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
