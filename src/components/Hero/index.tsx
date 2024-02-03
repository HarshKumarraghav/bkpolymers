"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollData = [
    {
      heading: "B.K Polymers",
      description:
        "POLYMERS is an established organization pertaining to manufacturing of polypropylene Fabrics. We are based in centra",
      imageSrc: "/assets/industry1.jpg",
      route: "/services/",
    },
    {
      heading: "B.K Polymers",
      description:
        "We are  one of the leading businesses in the packaging material manufacturing industry. We are proud to offer a wide range of high-quality products and services to our valued customers.",
      imageSrc: "/assets/industry2.jpg",
      route: "/services/",
    },

    {
      heading: "B.K Polymers",
      description:
        "Our team of experienced professionals is dedicated to providing exceptional customer service and ensuring that every client's unique needs are met. ",
      imageSrc: "/assets/industry3.jpg",
      route: "/services/",
    },
  ];
  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((currentItem) =>
        currentItem === scrollData.length - 1 ? 0 : currentItem + 1,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentItem]);

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % scrollData.length);
  };

  const prevItem = () => {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + scrollData.length) % scrollData.length,
    );
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentItem(slideIndex);
  };
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-10 bg-black/50" />
      <div className="mobile-mockup-screen flex-box absolute-center absolute">
        <Image
          width={100}
          height={100}
          src={scrollData[currentItem].imageSrc}
          alt=""
          className=" bg-primary relative h-screen w-screen transition-all ease-out"
        />
      </div>
      <div className="relative flex w-full flex-col p-2">
        {scrollData.map((screen, index) => (
          <div
            key={index}
            className={`${
              currentItem === index
                ? "slide-fade active z-20 flex h-[80vh] w-full flex-col justify-center rounded-3xl px-3 py-4 transition-all duration-500 ease-in-out md:p-10"
                : "hidden"
            }`}
          >
            <h1 className="text-primary px-4 text-5xl font-bold">
              {screen.heading}
            </h1>
            <p className="text-md px-4 py-4 text-white">{screen.description}</p>
            <Link href={screen.route}>
              <Button
                variant="outline"
                className="text-primary border-primary hover:bg-primary ml-4 p-4 uppercase transition-all ease-in-out hover:text-white md:p-6 md:text-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        ))}
        <div className="absolute -left-3 top-1/2 z-50 -translate-x-0 -translate-y-1/2 cursor-pointer rounded-full p-2 text-2xl font-bold text-white group-hover:block sm:hidden">
          <BsChevronCompactLeft onClick={prevItem} size={50} />
        </div>

        <div className="absolute -right-3 top-1/2 z-50 -translate-x-0 -translate-y-1/2 cursor-pointer rounded-full p-2 text-2xl font-bold text-white group-hover:block sm:hidden">
          <BsChevronCompactRight onClick={nextItem} size={50} />
        </div>

        <div className="top-4 z-20 flex justify-center py-2">
          {scrollData.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer text-2xl ${
                slideIndex === currentItem ? "text-primary" : "text-white"
              }`}
            >
              <RxDotFilled size={40} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
