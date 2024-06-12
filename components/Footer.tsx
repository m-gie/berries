import React from "react";
import Image from "next/image";
import { attributions } from "@/data";

const Footer = () => {
  return (
    <section id="footer" className="w-full bg-green-500 text-white">
      <div className="max-container pt-12 flex flex-col lg:flex-row justify-between">
        <div className="pb-12 max-w-[40%]">
          <div className="flex flex-row items-center gap-5">
            <Image
              src="/berrieslogo.png"
              alt="Berries Logo"
              width={64}
              height={64}
            />
            <h3 className="text-4xl font-bold">Berry Trade</h3>
          </div>
          <p className="text-white/75">
            Get ready for the new season at your nearest Berry Market. Find Your
            favourite flavour with Zog.
          </p>
        </div>
        <div className="flex flex-col pb-12">
          <h3 className="text-2xl">Attributions</h3>
          {attributions.map((attribution, idx) => (
            <a
              key={idx}
              href={attribution.link}
              target="_blank"
              rel="noreferrer"
              className="text-white/90"
            >
              {attribution.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col pb-12">
          <h3 className="text-2xl">Get in touch</h3>
          <p className="text-white/75">maciejglowacki0@gmail.com</p>
        </div>
      </div>
      <div className="max-container pt-12">© Maciej Głowacki, 2024</div>
    </section>
  );
};

export default Footer;
