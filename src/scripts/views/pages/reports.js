import ReportsApiSource from "../../data/remote/reports-api-source.js";
import DomManipulator from "../../utils/dom-manipulator.js";
import AlertModals from "../../utils/alert-modals.js";

const Reports = {
  async render() {
    return `
      <section class="reports">
        <h2 tabindex="0">Expert Reviews, Curated Recommendations</h2>
        <div class="reports-container">
          <loading-anim></loading-anim>
        </div>
      </section>
      <a id="add-report" class="add-report-btn" href="/#/add-report" aria-label="add a new report" >
        <i class="fa-regular fa-plus"></i>
      </a>
    `;
  },

  async afterRender() {
    const reportsContainerElement = document.querySelector('.reports-container');
    try {
      const reports = await ReportsApiSource.getReports();
      if (reports.length) {
        DomManipulator.emptyElement(reportsContainerElement);
        const reportItemElements = reports.map((report) => {
            const reportItemElement = document.createElement("report-item");
            reportItemElement.report = report;
            return reportItemElement;
          },
        );
        reportsContainerElement.append(...reportItemElements);
      } else {
        reportsContainerElement.innerHTML = "<p>No reports as of now</p>";
      }
    } catch (error) {
      AlertModals.showErrorModal(error);
    }
  },
};

export default Reports;
