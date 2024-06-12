import React from "react";

const Subscribe = () => {
  return (
    <section className="max-container mt-32">
      <div className="flex flex-row justify-between max-sm:flex-col items-center">
        <h3 className="font-bold text-4xl max-w-md leading-[68px]">
          Subscribe for <span className="text-green-500">Updates</span> and
          Newsletter!
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col p-2.5 sm:border sm:border-gray-400 rounded-full h-20">
          <input
            type="text"
            placeholder="subscribe@berries.com"
            className="input"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <button className="px-12 py-4 rounded-full bg-green-500 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-green-400 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
