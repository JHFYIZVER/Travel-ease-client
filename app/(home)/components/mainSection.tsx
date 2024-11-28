import Image from "next/image";
import homeImage from "@/public/background.jpg";

const MainSection = () => {
   return (
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
   );
};

export default MainSection;