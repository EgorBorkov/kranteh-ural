import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import QuestionsSection from "../components/QuestionsSection";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import ContactsSection from "../components/ContactsSection";
import Modal from "../components/Modal";  // Подключаем модалку
import "../index.css";

const App = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("manual");

  // Плавный переход по якорям
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // Автоматическое открытие модального окна через минуту
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
      setModalSource("auto");
    }, 180000); // 180 секунд
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <link rel="icon" href="/logo.ico" />
        <link rel="manifest" href="/manifest.json" />
        <title>КранТех-Урал | Купить крановое оборудование в Челябинске</title>
        <meta
          name="description"
          content="КранТех-Урал — продажа и покупка кранового оборудования в Челябинске. Широкий ассортимент, доступные цены, сертифицированная продукция. Звоните: +7 (922) 555-51-01."
        />
        <meta name="keywords" content="крановое оборудование, КранТех-Урал, Челябинск, купить кран, грузоподъемное оборудование, редукторы, электродвигатели" />
        <meta property="og:title" content="КранТех-Урал | Купить крановое оборудование в Челябинске" />
        <meta property="og:description" content="КранТех-Урал — продажа и покупка кранового оборудования в Челябинске. Широкий ассортимент, доступные цены, сертифицированная продукция." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="https://yourwebsite.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="КранТех-Урал | Купить крановое оборудование в Челябинске" />
        <meta name="twitter:description" content="КранТех-Урал — продажа и покупка кранового оборудования в Челябинске. Широкий ассортимент, доступные цены." />
        <meta name="twitter:image" content="https://yourwebsite.com/images/twitter-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "КранТех-Урал",
            "url": "http://kranteh-ural.ru/",
            "logo": "%PUBLIC_URL%/logo.svg",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+79225555101",
                "contactType": "customer service",
                "areaServed": "RU",
                "availableLanguage": "Russian"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Челябинск",
              "addressCountry": "RU"
            }
          })}
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-X"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-XXXXX-X');
          `}
        </script>
      </Helmet>

      <main>
        <HeroSection />
        <QuestionsSection />
        <ProductsSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="contacts">
          <ContactsSection />
        </section>
      </main>

      {/* Модальное окно с автоматическим открытием и переданным source */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source={modalSource}
      />
    </>
  );
};

export default App;
