// Точка входа React-приложения

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Глобальные стили
import AppRouter from "./AppRouter"; // Основной маршрутизатор
import { HelmetProvider } from "react-helmet-async"; // Для управления мета-тегами (SEO)

// Инициализация корневого рендера (React 18+)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендер приложения с поддержкой Helmet и React.StrictMode
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  </React.StrictMode>
);