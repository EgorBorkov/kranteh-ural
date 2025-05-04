// Страница с деталями моделей по выбранной категории
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import modelData from "../data/ModelData";
import Modal from "./Modal";
import "../assets/ModelDetailsPage.css";

const ModelDetailsPage = () => {
  // Получаем параметр из URL — ID категории
  const { categoryId } = useParams();

  const [openAccordion, setOpenAccordion] = useState(null); // какая категория открыта
  const [isModalOpen, setIsModalOpen] = useState(false);    // состояние модалки

  // Открытие/закрытие аккордеона по индексу
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Список моделей по текущей категории
  const models = modelData[categoryId] || [];

  // Баннер и текст для верхней части страницы (если данные есть)
  const bannerImage = models.length > 0 ? models[0].bannerImage : "/images/default-banner.png";
  const bannerText = models.length > 0 ? models[0].bannerText : [
    { text: "Описание отсутствует." },
    { text: "Пожалуйста, выберите другую категорию." },
  ];

  // Заголовок страницы в зависимости от ID категории
  const getPageTitle = () => {
    const titles = {
      "electric-winches": "Лебедки электрические",
      "metallurgical-winches": "Лебедки металлургические",
      "endless-rope-winches": "Лебедки с бесконечным тросом",
      "dredger-winches": "Лебедки для земснаряда",
      "crane-blocks": "Блоки крановые",
      "crane-brakes": "Тормоза крановые",
      "crane-wheels": "Колеса крановые",
      "brush-holders": "Щеткодержатели",
      "crane-hooks": "Крюки крановые",
      "choker-hooks": "Крюки чалочные",
      "hook-suspensions": "Подвески крюковые",
      "gear-couplings": "Муфты зубчатые",
      "brake-pulleys": "Шкивы тормозные",
      "electric-brushes": "Электрощетки",
      "contact-rings": "Кольца контактные",
      "cylindrical-reducers": "Редукторы цилиндрические",
      "worm-reducers": "Редукторы червячные",
      "crane-reducers": "Редукторы крановые",
      "special-reducers": "Редукторы специальные",
      "cylindrical-motor-reducers": "Мотор-редукторы цилиндрические",
      "worm-motor-reducers": "Мотор-редукторы червячные",
      "planetary-motor-reducers": "Мотор-редукторы планетарные",
      "crane-motors": "Электродвигатели крановые",
      "general-motors": "Электродвигатели общепромышленные",
      "single-phase-motors": "Электродвигатели однофазные",
      "explosion-proof-motors": "Электродвигатели взрывозащищенные",
      "dc-motors": "Электродвигатели постоянного тока",
    };
    return titles[categoryId] || "Модели";
  };

  // Определяем вкладку в каталоге для кнопки "Вернуться"
  const categoryToTabMap = {
    "electric-winches": "lifting-equipment",
    "crane-hooks": "crane-equipment",
    "worm-reducers": "reducers",
    "dc-motors": "electric-motors",
  };

  const getTabParam = () => categoryToTabMap[categoryId] || "lifting-equipment";

  // Обработка случая, когда нет моделей
  if (!models.length) {
    return (
      <div className="model-details">
        <div className="container">
          <h2>Модели не найдены</h2>
          <Link to="/catalog" className="back-link">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="model-details">
      {/* SEO-заголовок и описание страницы */}
      <Helmet>
        <title>{`${getPageTitle()} | КранТех-Урал`}</title>
        <meta name="description" content={`Каталог: ${getPageTitle()}. Описание, характеристики и изображения моделей.`} />
      </Helmet>

      <div className="container">
        <h2>{getPageTitle()}</h2>

        {/* Блок с баннером и текстом */}
        <div className="banner-section">
          <img src={bannerImage} alt={getPageTitle()} className="banner-image" loading="lazy" />
          <div className="banner-text">
            {bannerText.map((block, index) => (
              <div key={index} className="banner-block">
                {/* вставка html-тегов из данных (поддержка выделений и разметки) */}
                <p dangerouslySetInnerHTML={{ __html: block.text }} />
              </div>
            ))}
          </div>
        </div>

        {/* Список моделей в виде аккордеонов */}
        <div className="model-list">
          {models.map((modelCategory, index) => (
            <div key={index} className="model-item">
              <div
                className="model-header"
                onClick={() => toggleAccordion(index)}
                role="button"
                aria-expanded={openAccordion === index}
                aria-controls={`model-content-${index}`}
              >
                <h3>{modelCategory.category}</h3>
                <span className={`accordion-icon ${openAccordion === index ? "open" : ""}`}>
                  {openAccordion === index ? "−" : "+"}
                </span>
              </div>

              <div
                id={`model-content-${index}`}
                className={`model-content ${openAccordion === index ? "open" : ""}`}
              >
                <div className="model-grid">
                  {modelCategory.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="model-card">
                      <img src={item.image} alt={item.name} loading="lazy" className="model-card-image" />
                      <h4>{item.name}</h4>
                      <ul className="characteristics-list">
                        {item.characteristics.map((char, charIndex) => (
                          <li key={charIndex}>
                            <span className="char-label">{char.label}:</span>{" "}
                            <span className="char-value">{char.value}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="model-card-footer">
                        <span className="model-price">{item.price}</span>
                        <button
                          className="buy-button"
                          aria-label="Сделать заказ на крановое оборудование"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Купить
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Модальное окно заказа */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} source="manual" />

        {/* Ссылка назад в каталог */}
        <Link to={`/catalog?tab=${getTabParam()}`} className="back-link">
          Вернуться в каталог
        </Link>
      </div>
    </section>
  );
};

export default ModelDetailsPage;
