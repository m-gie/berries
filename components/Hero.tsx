"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { berriesHandful, statistics } from "@/data";
import BerryCard from "./BerryCard";

const Hero = () => {
  const [selectedBerry, setSelectedBerry] = useState("/blueberries.jpg");

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-12 max-container"
    >
      {/* Left side */}
      <div className="relative xl:w-[40%] flex flex-col items-start w-full pt-28 max-sm:p-8">
        <p className="text-green-500 text-xl">Our Seasonal Collection</p>
        <h1 className="text-8xl font-bold mt-10 max-sm:text-7xl">
          <span className="relative xl:whitespace-nowrap xl:rounded-lg z-10 xl:bg-white">
            The Most Juicy
          </span>
          <br />
          <span>Tasty </span>
          <span className="text-green-500">Berries</span>
        </h1>
        <p className="text-gray-500 text-lg leading-8 mt-8 mb-14 sm:max-w-sm">
          You give shiny stones. Zog gives tasty berries. Berries fill tummy.
          You feel good.
        </p>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, idx) => (
            <div key={idx}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="leading-7 text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Right side */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-green-500 bg-cover bg-center rounded-2xl">
        <Image
          src={selectedBerry}
          alt="berries"
          width={500}
          height={610}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {berriesHandful.map((berry, idx) => (
            <div key={idx}>
              <BerryCard
                imgUrl={berry.imgUrl}
                selectedBerry={selectedBerry}
                changeSelectedBerry={setSelectedBerry}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
