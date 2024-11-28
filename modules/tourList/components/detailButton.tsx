"use client";
import { useRouter } from "next/navigation";

const DetailButton = ({ text, id }: { text: string; id: number }) => {
  const router = useRouter();
  const handleClick = async () => {
    await router.push(`/tourpage/${id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary py-2 px-8 text-white font-bold rounded-sm transition-all hover:bg-primaryDark relative z-10"
    >
      {text}
    </button>
  );
};

export default DetailButton;
