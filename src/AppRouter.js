import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Ленивый импорт страниц (разделение кода)
const Home = lazy(() => import("./pages/App"));
const CatalogPage = lazy(() => import("./components/CatalogPage"));
const ModelDetailsPage = lazy(() => import("./components/ModelDetailsPage"));

// Компонент, отображающийся во время загрузки ленивых модулей
const LoadingScreen = () => (
  <div className="loading-screen" role="status" aria-busy="true">
    <p>Загрузка страницы...</p>
  </div>
);

// Главный маршрутизатор приложения
const AppRouter = () => (
  <Router>
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* Главный layout применяется ко всем вложенным маршрутам */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="models/:categoryId" element={<ModelDetailsPage />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
