// Модальное окно с формой обратной связи
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Modal = ({ isOpen, onClose, source = "manual" }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const phoneRegex = /^((\+7|8)[\s-]?(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{2}[\s-]?\d{2})$/;

  const validatePhone = (value) => {
    if (!value) return "Номер телефона обязателен";
    if (!phoneRegex.test(value)) {
      return "Введите корректный номер телефона (например, +7 (922) 555-51-01)";
    }
    return "";
  };

  const getTitle = () => {
    return source === "auto"
      ? "Не нашли, что искали? Оставьте заявку и наш специалист обязательно Вам поможет"
      : "Оставьте заявку и наш специалист обязательно с Вами свяжется в течение 15 минут";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setFormStatus("Пожалуйста, введите ваше имя");
      return;
    }

    const phoneValidationError = validatePhone(phone);
    if (phoneValidationError) {
      setFormStatus(phoneValidationError);
      return;
    }

    setIsLoading(true);

    // 🔐 Ключи из .env
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const templateParams = {
      name: name,
      phone: phone,
      to_email: "eborkov16@gmail.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setFormStatus("Заявка успешно отправлена!");
        setName("");
        setPhone("");
      })
      .catch(() => {
        setFormStatus("Ошибка при отправке. Попробуйте позже.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick} style={overlayStyle}>
      <div className="contact-form" style={{ maxWidth: "400px", width: "100%", position: "relative" }}>
        <button
          onClick={onClose}
          aria-label="Закрыть окно"
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            fontSize: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#003087",
          }}
        >
          &times;
        </button>

        <h3>{getTitle()}</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Отправка..." : "Отправить"}
          </button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

export default Modal;
