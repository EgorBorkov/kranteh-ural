# 🏗️ КранТех-Урал — Многостраничный сайт по продаже кранового оборудования

Многостраничный адаптивный сайт компании «КранТех-Урал», специализирующейся на **продаже и покупке кранового оборудования и электрических лебёдок**.

Сайт содержит каталог продукции с возможностью перехода по категориям, отдельную страницу с деталями модели, контактную форму с EmailJS и SEO-оптимизацию. Адаптирован под все устройства, реализован с использованием React Router.

---

## 🌐 Онлайн-доступ

▶️ [http://kranteh-ural.ru/](http://kranteh-ural.ru/)

---

## 🚀 Технологии

- ⚛️ React 18
- 🧭 React Router DOM (многостраничная навигация)
- 📬 EmailJS (через `.env`)
- 🧠 React Helmet Async (SEO)
- 🎨 Custom CSS
- 🗂️ Компонентная архитектура
- 🧪 React Testing Library
- 🗺️ Sitemap + Robots.txt

---

## 📁 Структура проекта

```txt
├── public/
│   ├── index.html
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/         # стили, изображения, шрифты
│   ├── components/     # компоненты (Header, Footer, Modal и т.д.)
│   ├── data/           # данные каталога (ModelData.js)
│   ├── pages/          # App, Layout
│   └── AppRouter.js
├── .env                # ключи EmailJS
├── package.json
└── README.md
```

---

## 🧩 Установка

```bash
git clone https://github.com/EgorBorkov/kranteh-ural.git
cd kranteh-ural
npm install
```

### 🔐 Пример `.env`

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## ⚙️ Скрипты

```bash
npm start       # запуск dev-сервера
npm run build   # продакшн-сборка
npm test        # юнит-тесты
```

---

## 📝 Особенности

- Товары **заданы вручную** в `ModelData.js` — по желанию клиента.
- **Корзина и личный кабинет** отсутствуют.
- Полностью адаптивен.
- Страницы формируются через React Router.
- Обратная связь реализована через EmailJS.

---

## ✍️ Автор проекта

**Борков Егор Сергеевич**  
📧 [eborkov.it@gmail.com](mailto:eborkov.it@gmail.com)  
📞 +7 (992) 009-20-53  
📱 Telegram: [@BullFrog9](https://t.me/BullFrog9)  
🐙 GitHub: [github.com/EgorBorkov](https://github.com/EgorBorkov)

---

## 📜 Лицензия

MIT — свободно для использования и адаптации.
