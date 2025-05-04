// Отчёт по Web Vitals (метрики производительности страницы)
// Можно использовать для логирования или отправки аналитики

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);   // Когерентность макета
      getFID(onPerfEntry);   // Задержка первого ввода
      getFCP(onPerfEntry);   // Время до первого контента
      getLCP(onPerfEntry);   // Время до самого большого элемента
      getTTFB(onPerfEntry);  // Время до первого байта
    });
  }
};

export default reportWebVitals;