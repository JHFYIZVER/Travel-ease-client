"use client";
import { useRouter } from "next/navigation";

const PrimariButton = ({ text }: { text: string }) => {
  const router = useRouter();
  const path = text === "Войти" ? "/login" : "/profile";

  const handleClick = async () => {
    if (text === "Выйти") {
      await fetch("/api/logout", { method: "GET" });
      router.replace("/");
      router.refresh();
    } else {
      router.replace(path);
      router.refresh();
    }
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

export default PrimariButton;
