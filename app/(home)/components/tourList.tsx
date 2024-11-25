import React from "react";
import { TourType } from "../@types/tourType";
import TourListItem from "./tourListItem";

const TourList = () => {
  const tours: TourType[] = [
    {
      id: 0,
      name: "Стамбул, Турция",
      image: "Tour1.png",
    },
    {
      id: 1,
      name: "Сидней, Австралия",
      image: "Tour2.png",
    },
    {
      id: 2,
      name: "Баку, Азербайджан",
      image: "Tour3.png",
    },
    {
      id: 3,
      name: "Вели, Мальдивы",
      image: "Tour4.png",
    },
    {
      id: 4,
      name: "Париж, Франция",
      image: "Tour5.png",
    },
    {
      id: 5,
      name: "Нью-Йорк, США",
      image: "Tour6.png",
    },
    {
      id: 6,
      name: "Лондон, Великобритания",
      image: "Tour7.png",
    },
    {
      id: 7,
      name: "Токио, Япония",
      image: "Tour8.png",
    },
    {
      id: 8,
      name: "Дубай, ОАЭ",
      image: "Tour9.png",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-8">
      {tours.map((tour: any) => (
        <TourListItem key={tour.id} name={tour.name} path={tour.image} />
      ))}
    </div>
  );
};

export default TourList;
