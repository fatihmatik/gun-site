import Image from "next/image";
import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Kağan Çelik",
      city: "Bari",
      text: "Thank you for your service and support, I did my university internship in Bari for 1 month because of your work.",
      image: "/images/oversealogowithtext.png", // Placeholder image
    },
    {
      name: "Fatoş S.",
      city: "Torino",
      text: "Thank you for your help throught the entire process. Oversea helped me with the application process, which was impossible for me. I hope everyone reaches their dreams ❤❤.",
      image: "/images/oversealogowithtext.png", // Placeholder image
    },
    {
      name: "Maria P.",
      city: "Lecce",
      text: "I want to give thanks to Oversea, thanks to their service I had a 6 months of exchange in South of Italy.",
      image: "/images/oversealogowithtext.png", // Placeholder image
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-center text-4xl font-bold bg-cyan_to_darkblue text-transparent bg-clip-text font-notosansbold pb-8 transition-transform duration-300 hover:scale-x-105">
        Başarı Hikayelerimiz
      </h2>

      <div className="flex flex-col md:flex-row md:gap-4 lg:gap-8 justify-center ">
        {stories.map((story, index) => (
          <div
            key={index}
            className="p-6 grid grid-cols-2 justify-between transition-transform duration-300 hover:scale-110 w-full md:w-1/3 h-auto"
          >
            <div className="bg-background rounded-[40px] p-2 mr-8 h-fit w-fit my-4">
              <Image
                height={160}
                width={160}
                src={story.image}
                alt={story.name}
                className="object-cover rounded-full self-center transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="col-start-2 row-start-1 bg-background  pt-2 flex flex-col gap-2 items-center justify-center h-full rounded-t-[40px] text-xl">
              <p className="text-secondary font-bold">{story.name}</p>
              <div className="h-[1px] bg-gray-200 w-1/2"></div>
              <p className="text-primary font-thin ">{story.city}</p>
            </div>

            <div className="col-span-2 col-start-1 row-start-2 bg-background rounded-tl-[40px] rounded-b-[40px] p-4 ">
              <p className="text-primary text-lg text-center mt-4">
                {story.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
