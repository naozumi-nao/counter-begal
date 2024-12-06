import Home from "../views/pages/home.js";
import Reports from "../views/pages/reports.js";
import AddReport from "../views/pages/add-report.js";
import About from "../views/pages/about.js";

const routes = {
  '/': Home,
  '/reports': Reports,
  '/add-report': AddReport,
  '/about': About,
};

export default routes;
