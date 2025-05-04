// Главная (Hero) секция с заголовком, описанием и кнопкой открытия модального окна
import React, { useState } from "react";
import Modal from "./Modal";
import { Helmet } from "react-helmet-async";

const HeroSection = () => {
  // Состояние управления модальным окном
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero" id="hero" role="banner">
      {/* SEO-заголовок и описание главной страницы */}
      <Helmet>
        <title>КранТех-Урал — Купить крановое оборудование</title>
        <meta name="description" content="Продажа кранового оборудования и запчастей по всей России. Гарантия, доставка, низкие цены." />
      </Helmet>

      <div className="container">
        <div className="hero-content">
          {/* Анимированный заголовок по словам */}
          <h1>
            <span className="hero-title-word hero-title-word-1">КУПИТЬ</span>
            <span className="hero-title-word hero-title-word-2">КРАНОВОЕ</span>
            <span className="hero-title-word hero-title-word-3">ОБОРУДОВАНИЕ</span>
          </h1>

          <p className="hero-subtitle">По самым доступным ценам</p>

          {/* Кнопка вызова модального окна */}
          <button
            className="cta-button"
            aria-label="Сделать заказ на крановое оборудование"
            onClick={() => setIsModalOpen(true)}
          >
            Сделать заказ
          </button>
        </div>
      </div>

      {/* Модальное окно (передаём источник "manual") */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="manual"
      />
    </section>
  );
};

export default HeroSection;
