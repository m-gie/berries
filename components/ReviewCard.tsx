import React from "react";
import Image from "next/image";

const ReviewCard = ({
  imgUrl,
  name,
  rating,
  review,
}: {
  imgUrl: string;
  name: string;
  rating: string;
  review: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <Image
        src={imgUrl}
        alt={name}
        width={120}
        height={120}
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="text-gray-500 mt-4 max-sm:mx-8">{review}</p>
      <div className="flex flex-row gap-2 items-center mt-4 text-gray-500">
        <Image src="/star.svg" alt="star" width={20} height={20} />
        <p className="">{rating}</p>
      </div>
      <h4 className="text-2xl font-bold mt-6">{name}</h4>
    </div>
  );
};

export default ReviewCard;
