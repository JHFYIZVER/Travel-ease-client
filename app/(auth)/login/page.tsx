import React from "react";
import ImageAuth from "../components/ImageAuth";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

const Page = () => {
  return (
    <main className="max-w-xl w-full mx-auto flex justify-between items-center">
      <section className="max-w-[512px] w-full flex flex-col gap-3">
        <h1 className="text-5xl">Логин</h1>
        <p className="text-base">
          Войдите, чтобы получить доступ к своей учетной записи TravelEasy
        </p>
        <LoginForm />
        <p className="flex items-center gap-2 mx-auto">
          У вас нет учетной записи?
          <Link className="text-red" href="/registration">
            Зарегистрироваться
          </Link>
        </p>
      </section>
      <ImageAuth />
    </main>
  );
};

export default Page;
