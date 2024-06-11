import React from "react";
import Image from "next/image";

const ServiceCard = ({
  imgUrl,
  label,
  description,
}: {
  imgUrl: string;
  label: string;
  description: string;
}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] md:max-w-48  w-full rounded-[20px] shadow-2xl px-10 py-16">
      <div className="flex w-full h-11 justify-center items-center">
        <Image src={imgUrl} alt="label" width={48} height={48} />
      </div>
      <h3 className="mt-5 text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words text-lg leading-normal text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
