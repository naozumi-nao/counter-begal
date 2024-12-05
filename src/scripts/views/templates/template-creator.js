import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit.js";
import convertDate from "../../utils/iso-date-converter.js"

const createAppBarTemplate = () => `
  <div class="icon-group">
    <a href="#" class="app-icon">
      <picture>
        <source type="image/webp" srcset="./icons/home-icon.webp">
        <source type="image/jpeg" srcset="./icons/home-icon.png">
        <img src="./icons/home-icon.png" alt="Counter Begal Icon">
      </picture>
    </a>
    <button id="nav-drawer-btn" aria-label="Open navigation menu"></button>
  </div>
  <nav class="nav-drawer">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="#/reports">Reports</a></li>
      <li><a href="https://linkedin.com/in/bimaadityokurniawan/" target="_blank" rel="noreferrer">About Us</a></li>
    </ul>
  </nav>
`;

const createFooterBarTemplate = () => `
  <p>Copyright &#169 2024 Counter-Begal</p>
  <p>by Bima Adityo Kurniawan</p>
`;

const createReportItemTemplate = (report) => `
  <section id="${report.id}" class="report-item" tabindex="0">
    <picture>
      <source type="image/webp" srcset="${(report.photoUrl)}">
      <source type="image/jpeg" srcset="${(report.photoUrl)}">
      <img src="./images/placeholder.jpg" class="lazyload" data-src="${(report.photoUrl)}" alt="${report.name}'s snapshot of the situation">
    </picture>
    <h3 tabindex="0" class="item-name">${report.name || '-'}</h3>
    <p class="item-description">${report.description || '-'}</p>
    <p class="item-city">Location: <strong>${report.city || '-'}</strong></p>
    <p class="item-timestamp">${convertDate(report.createdAt) || '-'}</p>
  </section>
`;

export {
  createAppBarTemplate,
  createFooterBarTemplate,
  createReportItemTemplate,
};
