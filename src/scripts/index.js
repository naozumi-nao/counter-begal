import "../styles/main.scss";
import App from "./views/app.js";

import "./components/app-bar.js";
import "./components/footer-bar.js";
import "./components/loading-anim.js";
import "./components/report-item.js";

const app = new App({
  button: document.querySelector("#nav-drawer-btn"),
  drawer: document.querySelector(".nav-drawer"),
  content: document.querySelector("main"),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});