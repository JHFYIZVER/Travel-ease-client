import { TourType } from "./@types/tourType";
import { getAllTours } from "./api/route";
import TourItem from "./components/tourItem";

export default async function TourList() {
  const data = await getAllTours();
  if ((data.length = 0)) {
    return (
      <div>
        <h1>Туры не найдены</h1>
      </div>
    );
  }

  

  return (
    <div className="tour-list flex flex-col max-w-[830px] gap-5">
      {data.tour.map((item: TourType) => (
        <TourItem key={item.id} {...item} />
      ))}
    </div>
  );
}
