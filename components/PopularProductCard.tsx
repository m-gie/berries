import React from "react";
import Image from "next/image";

const PopularProductCard = ({
  imgUrl,
  name,
  price,
  rating,
}: {
  imgUrl: string;
  name: string;
  price: string;
  rating: string;
}) => {
  return (
    <div className="flex flex-col mt-12">
      <Image
        src={imgUrl}
        alt={name}
        width={280}
        height={280}
        className="border-4 border-green-500 rounded-xl"
      />
      <div className="flex flex-row gap-2 items-center mt-4 text-gray-500">
        <Image src="/star.svg" alt="star" width={20} height={20} />
        {rating}
      </div>
      <div className="font-bold mt-1 text-xl">{name}</div>
      <div className="flex flex-row mt-1 gap-2 items-center text-green-500 font-bold">
        {price}
        <Image src="/shinystone.png" alt="stone" width={24} height={24} />
      </div>
    </div>
  );
};

export default PopularProductCard;
