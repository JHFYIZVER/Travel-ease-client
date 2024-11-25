import React from "react";
import ImageAuth from "../components/ImageAuth";
import Link from "next/link";
import RegistrForm from "../components/RegistrForm";

const Page = () => {
  return (
    <main className="max-w-xl w-full mx-auto flex justify-between items-center">
      <ImageAuth />
      <section className="max-w-[512px] w-full flex flex-col gap-3">
        <h1 className="text-5xl">Регистрация</h1>
        <p className="text-base">
          Давайте подготовим вас, чтобы вы могли получить доступ к своей личной
          учетной записи.
        </p>
        <RegistrForm />
        <p className="flex items-center gap-2 mx-auto">
          У вас уже есть аккаунт?
          <Link className="text-red" href="/login">
            Авторизоваться
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Page;
