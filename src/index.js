import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./reduxToolkit";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ru"],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"]
    },
    backend: {
      loadPath: "/shared/locales/{{lng}}/translation.json"
    }
  });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
