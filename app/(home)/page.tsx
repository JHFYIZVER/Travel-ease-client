import MainSection from "./components/mainSection";
import TourSection from "./components/tourSection";
import FlySection from "./components/flySection";
const HomePage = () => {
  return (
    <main className="max-w-xxl w-full mx-auto px-8 mt-16">
      <MainSection />
      <TourSection />
      <FlySection />
    </main>
  );
};

export default HomePage;
