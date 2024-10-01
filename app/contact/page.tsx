import React from "react";

const ContactPage = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-extrabold text-primary mb-8">
        Contact Us
      </h1>
      <p className="text-center text-lg text-secondary mb-6">
        We would love to hear from you! Whether you have questions, need more
        information, or want to schedule a consultation, please fill out the
        form below.
      </p>

      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex-1">
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
              ></textarea>
            </div>
            <button className="w-full bg-primary text-white rounded-lg py-2 hover:bg-accent transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 md:mt-0 flex-1">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Our Contact Information
          </h2>
          <p className="text-secondary mb-2">
            <strong>Email:</strong> contact@oversea.com
          </p>
          <p className="text-secondary mb-2">
            <strong>Phone:</strong> +39 123 456 7890
          </p>
          <p className="text-secondary mb-2">
            <strong>Address:</strong> Via Roma, 123, Rome, Italy
          </p>
          <p className="text-secondary">
            Follow us on social media for updates:
          </p>
          <div className="flex mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mr-4 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
