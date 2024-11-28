import PrimariButton from '@/components/ui/primariButton';
import Image from 'next/image';
import React from 'react';
import flyImage from "@/public/Flights.jpg";
const FlySection = () => {
   return (
      <section className="relative text-white h-[550px] flex flex-col items-center justify-end my-10 p-8">
        <h2 className="text-4xl text-center max-w-2xl relative z-10 flex flex-col mb-4">
          Flights
          <span className="text-base">
            Search Flights & Places Hire to our most popular destinations
          </span>
        </h2>
        <div>
          <PrimariButton text="Подробнее" />
        </div>
        <Image
          className="absolute top-0 w-full h-full rounded-3xl"
          src={flyImage}
          alt="flyImage"
          loading="lazy"
        />
      </section>
   );
};

export default FlySection;