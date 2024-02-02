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
        currentItem === scrollData.length - 1 ? 0 : currentItem + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentItem]);

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % scrollData.length);
  };

  const prevItem = () => {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + scrollData.length) % scrollData.length
    );
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentItem(slideIndex);
  };
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="mobile-mockup-screen absolute flex-box absolute-center">
        <img
          src={scrollData[currentItem].imageSrc}
          alt=""
          className=" bg-primary transition-all ease-out relative w-screen h-screen"
        />
      </div>
      <div className="w-full flex p-2 flex-col relative">
        {scrollData.map((screen, index) => (
          <div
            key={index}
            className={`${
              currentItem === index
                ? "w-full h-[80vh] flex flex-col justify-center py-4 transition-all duration-500 ease-in-out px-3 md:p-10 rounded-3xl slide-fade active z-20"
                : "hidden"
            }`}
          >
            <h1 className="font-bold text-5xl text-primary px-4">
              {screen.heading}
            </h1>
            <p className="text-md py-4 text-white px-4">{screen.description}</p>
            <Link href={screen.route}>
              <Button
                variant="outline"
                className="md:text-lg uppercase p-4 ml-4 md:p-6 text-primary border-primary hover:bg-primary hover:text-white transition-all ease-in-out"
              >
                Learn More
              </Button>
            </Link>
          </div>
        ))}
        <div className="sm:hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 -left-3 text-2xl rounded-full p-2 font-bold z-50 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevItem} size={50} />
        </div>

        <div className="sm:hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 -right-3 text-2xl rounded-full p-2 font-bold z-50 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextItem} size={50} />
        </div>

        <div className="flex top-4 justify-center py-2 z-20">
          {scrollData.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
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
