import OutlineButton from "@/components/ui/outlineButton";
import TourList from "./tourList";

const TourSection = () => {
  return (
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
  );
};

export default TourSection;
