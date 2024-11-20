import { Map } from "maplibre-gl";
import Mapping from "../../utils/mapping-tools.js"
import ReportsApiSource from "../../data/remote/reports-api-source.js";
import AlertModals from "../../utils/alert-modals.js";

const Home = {
  async render() {
    return `
      <section class="map-container">
        <div id="map"></div>
      </section>
    `;
  },

  async afterRender() {
    const coordinates = [106.761429, -6.547753]; // longitude + latitude
    const map = new Map({
        container: "map",
        zoom: 10,
        center: coordinates,
        style: "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
        maxZoom: 18,
        maxPitch: 85
    });

    map.on("load", async () => {
      try {
        const reports = await ReportsApiSource.getReports();
          reports.forEach((report) => {
            Mapping.generateMarker(map, report);
            console.log(report);
          }); 
  
      } catch (error) {
        AlertModals.showErrorModal(error);
      }
    });
  },
};

export default Home;
