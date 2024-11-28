import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-[#82A2FF] text-white">
      <div className="footer-wrapper max-w-xxl w-full mx-auto flex items-center justify-between py-6 px-10">
        <ul className="footer-list flex flex-col gap-4 cursor-pointer">
          <li className="footer-list-item font-bold text-xl">Пункты назначения</li>
          <li className="footer-list-item">Германия</li>
          <li className="footer-list-item">Франция</li>
          <li className="footer-list-item">Италия</li>
        </ul>
        <ul className="footer-list flex flex-col gap-4 cursor-pointer">
          <li className="footer-list-item font-bold text-xl">Наша деятельность</li>
          <li className="footer-list-item">Туры</li>
          <li className="footer-list-item">Поездки</li>
          <li className="footer-list-item">Путешествия</li>
        </ul>
        <ul className="footer-list flex flex-col gap-4 cursor-pointer">
          <li className="footer-list-item font-bold text-xl">О нас</li>
          <li className="footer-list-item">Блог</li>
          <li className="footer-list-item">Контакты</li>
          <li className="footer-list-item">Отзывы</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
