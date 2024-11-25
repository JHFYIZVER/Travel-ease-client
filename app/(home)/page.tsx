import Image from "next/image";
import homeImage from "@/public/background.jpg";
import flyImage from "@/public/Flights.jpg";
import OutlineButton from "@/components/ui/outlineButton";
import TourList from "./components/tourList";
import PrimariButton from "@/components/ui/primariButton";
const HomePage = () => {
  return (
    <main className="max-w-xxl w-full mx-auto px-8 mt-16">
      <section className="relative text-white h-[600px] flex items-center justify-center">
        <h1 className="text-8xl text-center max-w-2xl relative z-10 flex flex-col">
          <span className="text-5xl">Helping Others</span> Live & Travel{" "}
          <span className="text-xl">Special offers to suit your plan</span>
        </h1>
        <Image
          className="absolute top-0 w-full h-full object-cover rounded-3xl"
          src={homeImage}
          alt="homeImage"
          loading="lazy"
        />
      </section>
      <section className="mt-16 flex flex-col gap-8">
        <div className="title flex justify-between items-center">
          <div>
            <h2 className="text-3xl">Спланируйте свое идеальное путешествие</h2>
            <span className="sub-title text-base">
              Поиск авиабилетов и мест проката по нашим самым популярным
              направлениям
            </span>
          </div>
          <OutlineButton text="Подробнее" />
        </div>
        <TourList />
      </section>
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
    </main>
  );
};

export default HomePage;
