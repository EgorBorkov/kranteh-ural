// Раздел с быстрыми действиями: выбор товара или консультация
import React from 'react';
import { Helmet } from 'react-helmet-async';

const QuestionsSection = () => {
  // Плавная прокрутка к нужному разделу по ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="questions" role="region" aria-labelledby="questions-title">
      {/* SEO-описание для раздела */}
      <Helmet>
        <meta name="description" content="Найдите нужный товар или получите бесплатную консультацию от специалистов КранТех-Урал." />
      </Helmet>

      <div className="container">
        <div className="questions-content">

          {/* Блок: выбор товара → прокрутка к продукции */}
          <div className="question-block" role="group">
            <h2 id="questions-title">Хотите найти что-то определённое?</h2>
            <button
              className="question-button"
              onClick={() => scrollToSection('products')}
              aria-label="Перейти к выбору товара"
            >
              Выбрать товар
            </button>
          </div>

          {/* Блок: помощь специалиста → прокрутка к контактам */}
          <div className="question-block" role="group">
            <h2>Нужна помощь специалиста?</h2>
            <button
              className="question-button"
              onClick={() => scrollToSection('contacts')}
              aria-label="Получить консультацию"
            >
              Получить консультацию
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;