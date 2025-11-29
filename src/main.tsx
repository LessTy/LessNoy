import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// --- ERUDA (КОНСОЛЬ) ---
//import eruda from 'eruda';
//eruda.init();
// -----------------------

// ВАЖНО: Мы используем createRoot напрямую, без слова ReactDOM
const rootElement = document.getElementById("root");

if (!rootElement) {
  // Если это сработает - значит проблема в index.html
  document.body.innerHTML =
    '<h1 style="color:red">ОШИБКА: В index.html нет элемента с id="root"</h1>';
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
