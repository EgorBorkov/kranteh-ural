import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../assets/CatalogPage.css";

// Импорт изображений для вкладки "Грузоподъемное оборудование"
import img1_1 from "../images/product-1/electric-winches-big.png";
import img1_2 from "../images/product-1/metallurgical-winches-big.png";
import img1_3 from "../images/product-1/endless-rope-winches-big.png";
import img1_4 from "../images/product-1/winches-for-dredger-big.png";

// Импорт изображений для вкладки "Крановое оборудование"
import img2_1 from "../images/product-2/1-big.png";
import img2_2 from "../images/product-2/2-big.png";
import img2_3 from "../images/product-2/3-big.png";
import img2_4 from "../images/product-2/4-big.png";
import img2_5 from "../images/product-2/5-big.png";
import img2_6 from "../images/product-2/6-big.png";
import img2_7 from "../images/product-2/7-big.png";
import img2_8 from "../images/product-2/8-big.png";
import img2_9 from "../images/product-2/9-big.png";
import img2_10 from "../images/product-2/10-big.png";
import img2_11 from "../images/product-2/11-big.png";

// Импорт изображений для вкладки "Редукторы"
import img3_1 from "../images/product-3/1-big.png";
import img3_2 from "../images/product-3/2-big.png";
import img3_3 from "../images/product-3/3-big.png";
import img3_4 from "../images/product-3/4-big.png";
import img3_5 from "../images/product-3/5-big.png";
import img3_6 from "../images/product-3/6-big.png";
import img3_7 from "../images/product-3/7-big.png";

// Импорт изображений для вкладки "Электродвигатели"
import img4_1 from "../images/product-4/1-big.png";
import img4_2 from "../images/product-4/2-big.png";
import img4_3 from "../images/product-4/3-big.png";
import img4_4 from "../images/product-4/4-big.png";
import img4_5 from "../images/product-4/5-big.png";

const CatalogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Получаем параметр tab из URL или устанавливаем по умолчанию первую вкладку
  const query = new URLSearchParams(location.search);
  const initialTab = query.get("tab") || "lifting-equipment";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Массив с данными о вкладках каталога
  const tabs = [
    { id: "lifting-equipment", label: "Грузоподъемное оборудование" },
    { id: "crane-equipment", label: "Крановое оборудование" },
    { id: "reducers", label: "Редукторы" },
    { id: "electric-motors", label: "Электродвигатели" },
  ];

  // Основные данные каталога, сгруппированные по вкладкам
  const catalogData = {
    "lifting-equipment": [
      { name: "Лебедки электрические", image: img1_1, id: "electric-winches" },
      { name: "Лебедки металлургические", image: img1_2, id: "metallurgical-winches" },
      { name: "Лебедки с бесконечным тросом", image: img1_3, id: "endless-rope-winches" },
      { name: "Лебедки для земснаряда", image: img1_4, id: "dredger-winches" },
    ],
    "crane-equipment": [
      { name: "Блоки крановые", image: img2_1, id: "crane-blocks" },
      { name: "Тормоза крановые", image: img2_2, id: "crane-brakes" },
      { name: "Колеса крановые", image: img2_3, id: "crane-wheels" },
      { name: "Щеткодержатели", image: img2_4, id: "brush-holders" },
      { name: "Крюки крановые", image: img2_5, id: "crane-hooks" },
      { name: "Крюки чалочные", image: img2_6, id: "choker-hooks" },
      { name: "Подвески крюковые", image: img2_7, id: "hook-suspensions" },
      { name: "Муфты зубчатые", image: img2_8, id: "gear-couplings" },
      { name: "Шкивы тормозные", image: img2_9, id: "brake-pulleys" },
      { name: "Электрощетки", image: img2_10, id: "electric-brushes" },
      { name: "Кольца контактные", image: img2_11, id: "contact-rings" },
    ],
    reducers: [
      { name: "Редукторы цилиндрические", image: img3_1, id: "cylindrical-reducers" },
      { name: "Редукторы червячные", image: img3_2, id: "worm-reducers" },
      { name: "Редукторы крановые", image: img3_3, id: "crane-reducers" },
      { name: "Редукторы специальные", image: img3_4, id: "special-reducers" },
      { name: "Мотор-редукторы цилиндрические", image: img3_5, id: "cylindrical-motor-reducers" },
      { name: "Мотор-редукторы червячные", image: img3_6, id: "worm-motor-reducers" },
      { name: "Мотор-редукторы планетарные", image: img3_7, id: "planetary-motor-reducers" },
    ],
    "electric-motors": [
      { name: "Электродвигатели крановые", image: img4_1, id: "crane-motors" },
      { name: "Электродвигатели общепромышленные", image: img4_2, id: "general-motors" },
      { name: "Электродвигатели однофазные", image: img4_3, id: "single-phase-motors" },
      { name: "Электродвигатели взрывозащищенные", image: img4_4, id: "explosion-proof-motors" },
      { name: "Электродвигатели постоянного тока", image: img4_5, id: "dc-motors" },
    ],
  };

  // Эффект при изменении активной вкладки — обновляет URL
  useEffect(() => {
    if (!catalogData[activeTab]) {
      setActiveTab("lifting-equipment");
    } else {
      navigate(`?tab=${activeTab}`, { replace: true });
    }
  }, [activeTab, navigate]);

  return (
    <>
      {/* SEO-теги страницы */}
      <Helmet>
        <title>Каталог оборудования | КранТех-Урал</title>
        <meta
          name="description"
          content="КранТех-Урал: большой выбор кранового, грузоподъемного оборудования, редукторов и электродвигателей. Поставки по всей России."
        />
      </Helmet>

      <section className="catalog">
        <div className="container">
          <h2>Каталог</h2>

          {/* Вкладки каталога */}
          <div className="catalog-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                aria-label={`Открыть вкладку ${tab.label}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Сетка товаров по вкладке */}
          <div className="catalog-content">
            <div className="catalog-grid">
              {catalogData[activeTab] ? (
                catalogData[activeTab].map((item, index) => (
                  <Link
                    key={index}
                    to={`/models/${item.id}`}
                    className="catalog-item"
                    aria-label={`Подробнее о ${item.name}`}
                  >
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <h3>{item.name}</h3>
                  </Link>
                ))
              ) : (
                <p>Вкладка не найдена.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogPage;
