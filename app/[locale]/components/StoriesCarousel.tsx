"use client";

import Image from "next/image";
import Slider from "react-slick";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 1. Define the type for a single story object
type Story = {
  name: string;
  city: string;
  text: {
    [locale: string]: string; // Allows any string key (e.g., 'en', 'tr', 'bg')
  };
  image: string;
};

// 2. Define the interface for the component's props
interface StoriesCarouselProps {
  stories: Story[];
  locale: string;
}

// 3. Apply the StoriesCarouselProps interface to the component's props
export default function StoriesCarousel({
  stories,
  locale,
}: StoriesCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {stories.map((story) => (
        <div key={story.name} className="p-4">
          <div className="grid grid-cols-2 justify-between transition-transform duration-300 hover:scale-110 h-full">
            <div className="bg-white rounded-[40px] p-2 mr-8 h-fit w-fit my-4">
              <Image
                height={160}
                width={160}
                src={story.image}
                alt={story.name}
                className="object-cover rounded-full self-center transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="col-start-2 row-start-1 bg-white pt-2 flex flex-col gap-2 items-center justify-center h-full rounded-t-[40px] text-xl">
              <p className="text-secondary font-bold text-lg text-center">
                {story.name}
              </p>
              <div className="h-[1px] bg-gray-200 w-1/2"></div>
              <p className="text-primary font-thin">{story.city}</p>
            </div>
            <div className="col-span-2 col-start-1 row-start-2 bg-white rounded-tl-[40px] rounded-b-[40px] p-4">
              <p className="text-primary text-lg text-center mt-4">
                {story.text[locale]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
