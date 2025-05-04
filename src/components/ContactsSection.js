// Компонент формы обратной связи и контактной информации
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const ContactsSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const phoneRegex = /^((\+7|8)[\s-]?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{2}[\s-]?\d{2})$/;

  const validatePhone = (value) => {
    if (!value) return 'Номер телефона обязателен';
    if (!phoneRegex.test(value)) return 'Введите корректный номер телефона (например, +7 (922) 555-51-01)';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setFormStatus('Пожалуйста, введите ваше имя');
      return;
    }

    const phoneError = validatePhone(phone);
    if (phoneError) {
      setFormStatus(phoneError);
      return;
    }

    setIsLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, { name, phone, to_email: 'eborkov16@gmail.com' }, publicKey)
      .then(() => {
        setFormStatus('Заявка успешно отправлена!');
        setName('');
        setPhone('');
      })
      .catch(() => {
        setFormStatus('Ошибка при отправке заявки. Попробуйте снова.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="contacts" id="contacts">
      <Helmet>
        <meta name="description" content="Контактная информация компании КранТех-Урал. Звоните, пишите или оставьте заявку прямо на сайте." />
      </Helmet>

      <div className="container">
        <h2>Контакты</h2>
        <div className="contacts-content">
          <div className="contact-form">
            <h3>Оставьте заявку, и мы свяжемся с вами в ближайшее время</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше Имя"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___ - __ - __"
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                aria-label="Отправить заявку"
                disabled={isLoading}
              >
                {isLoading ? 'Отправка...' : 'Отправить заявку'}
              </button>

              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>

          <div className="contact-info">
            <h3>Или позвоните по номеру</h3>
            <a href="tel:+79225555101" aria-label="Позвонить по номеру +7 (922) 555-51-01">
              +7 (922) 555 - 51 - 01
            </a>
            <a href="tel:+79080795933" aria-label="Позвонить по номеру +7 (908) 079-59-33">
              +7 (908) 079 - 59 - 33
            </a>

            <div className="messenger-links">
              <a
                href="https://t.me/krantehural"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Связаться через Telegram"
              >
                <FaTelegram className="messenger-link messenger-link-tg" />
              </a>

              <a
                href="https://wa.me/79080795933"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Связаться через WhatsApp"
              >
                <IoLogoWhatsapp className="messenger-link messenger-link-wa" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
