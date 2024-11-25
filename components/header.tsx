"use client";
import logo from "@/public/logo.svg";
import Image from "next/image";
import PrimariButton from "./ui/primariButton";
import Link from "next/link";

const Header = () => {
  const token = localStorage.getItem("token") || undefined;
  return (
    <header className="bg-white">
      <div className="wrapper max-w-xxl w-full mx-auto flex items-center justify-between py-6 px-10">
        <div className="header-logo flex items-center font-semibold text-3xl">
          <Image src={logo} alt="logo" />
          TravelEase
        </div>
        <nav className="header-nav">
          <ul className="header-nav-list flex items-center gap-6 text-base">
            <Link href="/" className="header-nav-item">
              Главная
            </Link>
            <Link href="/tours" className="header-nav-item">
              Туры
            </Link>
          </ul>
        </nav>
        {token ? (
          <PrimariButton text="Профиль" />
        ) : (
          <PrimariButton text="Войти" />
        )}
      </div>
    </header>
  );
};

export default Header;
