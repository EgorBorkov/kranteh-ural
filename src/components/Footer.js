// Нижний колонтитул сайта с контактной информацией и копирайтом
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          {/* Левая часть: юридическая информация */}
          <div className="footer-left">
            <p>ИП Иванчук Анастасия Геннадьевна, г. Челябинск</p>
          </div>

          {/* Правая часть: email и телефон */}
          <div className="footer-right">
            <p>
              E-mail: <a href="mailto:krantchural@gmail.com" aria-label="Написать письмо на krantchural@gmail.com">krantchura@gmail.com</a>
            </p>
            <p>
              <a href="tel:+79225555101" aria-label="Позвонить по номеру +7 (922) 555-51-01">+7 (922) 555-51-01</a>
            </p>
          </div>
        </div>

        {/* Нижняя строка с копирайтом */}
        <div className="footer-bottom">
          <p>&copy; 2025 КранТех-Урал. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
