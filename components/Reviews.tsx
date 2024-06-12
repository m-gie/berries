import { reviews } from "@/data";
import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="max-container mt-32 bg-green-100 rounded-xl"
    >
      <h3 className="text-center font-bold text-4xl">
        What Our <span className="text-green-500">Customers</span> Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg text-center text-gray-500">
        Hear genuine stories from our satisfied cusomers about their exceptional
        experiences with Zog.
      </p>
      <div className="flex flex-row justify-evenly max-sm:flex-col items-center mt-24">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
