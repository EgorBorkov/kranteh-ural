// Адаптивный хедер сайта с логотипом, навигацией и телефоном
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.svg";

// Список навигационных ссылок: якоря и маршруты
const NAV_LINKS = [
  { label: "Каталог", path: "/catalog?tab=lifting-equipment", type: "navigate" },
  { label: "О компании", hash: "about", type: "anchor" },
  { label: "Контакты", hash: "contacts", type: "anchor" }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // ✅ предотвращение утечки
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLinkClick = (link) => {
    if (link.type === "navigate") {
      navigate(link.path);
    } else if (link.type === "anchor") {
      if (location.pathname !== "/") {
        navigate(`/#${link.hash}`);
      } else {
        const target = document.getElementById(link.hash);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (isMenuOpen) toggleMenu();
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${isMenuOpen ? "open" : ""}`}>
      <div className="container">
        {/* Логотип */}
        <div className="logo">
          <Link to="/" aria-label="Перейти на главную страницу КранТех-Урал">
            <img src={logo} alt="Логотип КранТех-Урал" loading="eager" />
          </Link>
        </div>

        {/* Кнопка открытия/закрытия меню */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Навигация по разделам сайта */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`} role="navigation" aria-label="Основная навигация">
          <ul>
            {NAV_LINKS.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className="nav-link"
                  aria-label={`Перейти к разделу ${link.label}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Контактный номер телефона */}
        <div className="phone">
          <a href="tel:+79225555101" aria-label="Позвонить по номеру +7 (922) 555-51-01">
            <FaPhone className="phone-icon" />
            <span>+7 (922) 555-51-01</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
