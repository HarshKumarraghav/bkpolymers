"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import Wrapper from "../Container/Wrapper";

const WhoWeAre = () => {
  return (
    <Wrapper>
      <motion.div
        initial="hidden"
        className="min-h-[220px] md:min-h-[650px] mt-8 sm:mt-0 w-full flex flex-col justify-center items-center md:flex-row md:justify-between px-4"
      >
        <div className="w-full max-w-screen-xl  flex justify-between  items-center">
          <div className="font-bold md:text-start md:w-1/2">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              <h1>
                WE AT B.K
                <span className="bg-clip-text bg-gradient-to-r text-primary">
                  {" "}
                  POLYMERS
                </span>
              </h1>
            </div>
            <div className="text-zinc-600 text-sm md:text-sm font-normal pt-4 md:pt-8">
              Polymers is the foremost manufacturer and renowned trader of
              PP(Polypropylene) woven fabrics and products in India. We possess
              state of the art machinery and top-notch,skillful team of
              designers to provide the unbeatable range of Laminated PP Bags and
              Laminated Woven PP fabrics. Our quality inspecting team makes sure
              of the industry based guidelines & norms being followed
              pre-production and meeting the client requirements, quality and
              defect-free products post-production. Our proficient team fulfills
              the customer demands & expectations to provide impeccable and high
              performance products.
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 h-full justify-end items-center">
            <Image
              alt="growth image"
              src={"/assets/industry1.jpg"}
              width={500}
              height={500}
            />
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default WhoWeAre;
