// Раздел "Наша продукция" с карточками категорий и заявками
import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Импорт изображений для каждой категории
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";
import product4 from "../images/product-4.png";

// Список категорий продукции
const PRODUCTS = [
  {
    id: "lifting-equipment",
    name: "Грузоподъемное оборудование",
    image: product1,
  },
  {
    id: "crane-equipment",
    name: "Крановое оборудование",
    image: product2,
  },
  {
    id: "reducers",
    name: "Редукторы",
    image: product3,
  },
  {
    id: "electric-motors",
    name: "Электродвигатели",
    image: product4,
  },
];

const ProductsSection = () => {
  const navigate = useNavigate();

  // Переход в каталог с выбранной вкладкой
  const handleModelSelect = (tab) => {
    navigate(`/catalog?tab=${tab}`);
  };

  return (
    <section className="products" id="products">
      {/* SEO-тег для описания раздела */}
      <Helmet>
        <meta
          name="description"
          content="Оборудование КранТех-Урал: грузоподъемное, крановое, редукторы, электродвигатели. Прямые поставки. Запросить консультацию."
        />
      </Helmet>

      <div className="container">
        <h2>Наша продукция</h2>

        {/* Сетка карточек продукции */}
        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <h3>{product.name}</h3>
              <button
                className="product-button"
                onClick={() => handleModelSelect(product.id)}
                aria-label={`Выбрать модель: ${product.name}`}
              >
                Выбрать модель
              </button>
            </div>
          ))}

          {/* Блок с двумя вариантами заявок */}
          <div className="request-block">
            <div className="request-content">
              {/* Первый блок — если не нашли нужное оборудование */}
              <div className="request-item">
                <h3>Не нашли то, что искали?</h3>
                <p>
                  Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время
                </p>
                <button
                  className="request-button"
                  onClick={() =>
                    document.getElementById("contacts")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  aria-label="Оставить заявку на поиск оборудования"
                >
                  Оставить заявку
                </button>
              </div>

              {/* Второй блок — предложение о выкупе оборудования */}
              <div className="request-item">
                <h3>Нужно продать? Мы готовы его купить.</h3>
                <p>
                  Оставьте заявку, наши специалисты свяжутся с вами, обсудят детали сделки
                </p>
                <button
                  className="request-button"
                  onClick={() =>
                    document.getElementById("contacts")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  aria-label="Оставить заявку на продажу оборудования"
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductsSection;