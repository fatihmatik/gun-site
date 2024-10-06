import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background py-6 text-gray-600 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-lg font-semibold text-primary">
            © 2024 Oversea Education. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 justify-center items-center">
            <Link
              href={"https://www.facebook.com"}
              className="transition-transform duration-300 hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
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
              href={"https://www.instagram.com"}
              className="transition-transform duration-300 hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
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
              href={"https://www.linkedin.com"}
              className="transition-transform duration-300 hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
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
    </footer>
  );
}
