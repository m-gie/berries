import React from "react";
import Image from "next/image";

const BerryCard = ({
  imgUrl,
  selectedBerry,
  changeSelectedBerry,
}: {
  imgUrl: string;
  selectedBerry: string;
  changeSelectedBerry: any;
}) => {
  const handleClick = () => {
    console.log(imgUrl, selectedBerry);
    if (imgUrl !== selectedBerry) {
      changeSelectedBerry(imgUrl);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor cursor-pointer max-sm:flex-1 ${
        selectedBerry === imgUrl ? "border-yellow-700 " : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <Image
        src={imgUrl}
        alt="berry"
        width={120}
        height={120}
        quality={50}
        className="rounded-xl object-fill"
      />
    </div>
  );
};

export default BerryCard;
