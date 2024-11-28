import Image from "next/image";
import DetailButton from "./detailButton";
import location from "./icon.svg";
import { TourType } from "../@types/tourType";

const TourItem = (data: TourType) => {
  return (
    <div className="tour-item bg-white rounded-2xl p-4 flex items-center gap-3 justify-between max-w-[830px] w-full">
      <img
        src={`http://localhost:5000/static${data.pictures[0].url}`}
        alt="tourImg"
      />
      <div className="flex flex-col gap-3 w-full">
        <div className="tour-info flex items-center justify-between">
          <div className="tour-name">
            <h2>{data.title}</h2>
            <p className="flex items-center gap-2">
              <Image loading="lazy" src={location} alt="location" />
              {data.location}
            </p>
          </div>
          <div className="tour-price">
            <p>{data.price}₽</p>
          </div>
        </div>
        <div className="tour-characteristic flex items-center gap-8">
          <p>
            Туристическое агенство: <span>{data.travelAgency.name}</span>
          </p>
          <p>
            Авиакомпания: <span>{data.airlines.name}</span>
          </p>
        </div>
        <hr />
        <DetailButton id={data.id} text="Подробнее" />
      </div>
    </div>
  );
};

export default TourItem;
