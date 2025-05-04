import React from 'react';
import { Helmet } from 'react-helmet-async';
import requisites from '../files/requisites.pdf';

// Массив с блоками текста о компании
const aboutData = [
  {
    title: "Наша компания — лидер по продаже кранового оборудования в нашем регионе.",
    text: "Мы гордимся тем, что предлагаем нашим клиентам не только самую <span class='highlight'>лучшую технику</span>, но и <span class='highlight'>лучшие условия</span> на рынке. Все наши товары соответствуют строгим стандартам качества и полностью сертифицированы.",
  },
  {
    title: "С нами вы можете быть уверены, что найдете любую необходимую деталь или кран по индивидуальному заказу по выгодной цене.",
    text: "Мы ценим <span class='highlight'>ваше время</span> и бережное отношение к вашим <span class='highlight'>финансовым ресурсам</span>, предлагая специальные условия для постоянных клиентов, включая <span class='highlight'>гибкую систему скидок</span>.",
  },
  {
    title: "На протяжении более десяти лет мы занимаемся продажей комплектующих на балки, мосты и козловые краны, обеспечивая наших клиентов всем необходимым для их строительных и производственных нужд.",
    text: "Благодаря нашему обширному опыту и профессионализму, мы заработали доверие более <span class='highlight'>7000 довольных покупателей</span>, как крупных производственных комплексов, так и частных застройщиков.",
    className: "number-2",
  },
  {
    title: "Присоединяйтесь к числу наших довольных покупателей. Мы стремимся к долгосрочному сотрудничеству и всегда готовы предложить оптимальные решения для вашего бизнеса.",
    text: "Наша команда готова помочь вам на каждом этапе — от выбора оборудования до его установки и обслуживания.",
    className: "number-7000",
  },
];

// Компонент "О компании"
const AboutSection = () => {
  return (
    <section className="about" id="about" role="region" aria-labelledby="about-title">
      {/* SEO-описание страницы */}
      <Helmet>
        <meta
          name="description"
          content="КранТех-Урал — 10 лет на рынке кранового оборудования. Более 7000 клиентов по всей России. Качество, опыт, гарантия."
        />
      </Helmet>

      <div className="container">
        <h2 id="about-title">О компании</h2>

        {/* Сетка с блоками информации */}
        <div className="about-grid">
          {aboutData.map((item, index) => (
            <div key={index} className={`about-item ${item.className || ''}`}>
              <h3>{item.title}</h3>
              {/* Вставка HTML с подсветкой через dangerouslySetInnerHTML */}
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>

        {/* Ссылка на PDF с реквизитами */}
        <div className="about-links">
          <a
            href={requisites}
            className="pdf-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть реквизиты компании"
          >
            <span className="pdf-icon">📄</span> Реквизиты компании
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
