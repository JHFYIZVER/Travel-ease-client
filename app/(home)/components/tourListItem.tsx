import Image from "next/image";
import React from "react";

const TourListItem = ({ path, name }: { path: string; name: string }) => {
  const imageUrl = `/${path}`;
  return (
    <div className="max-w-[389px] w-full bg-white p-4 rounded-2xl flex items-center gap-4">
      <Image src={imageUrl} alt={name} loading="lazy" width={90} height={90} />
      <div>
        <h4>{name}</h4>
        <p>Рейсы • Отели • Курорты</p>
      </div>
    </div>
  );
};

export default TourListItem;
