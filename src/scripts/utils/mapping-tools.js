import turfCircle from "@turf/circle";
import { Popup, Marker } from "maplibre-gl";
import convertDate from "./iso-date-converter";

class Mapping {
  static generateMarker(map, report) {
    const coordinates = [report.lon, report.lat];
    const popup = new Popup({offset: 25}).setText(
      `${report.description} \n (${convertDate(report.createdAt)})`
    );

    const el = document.createElement('div');
    el.id = `marker-${report.id}`;
    el.className = 'marker';
    el.style.backgroundImage =
    `url(${report.photoUrl})`;

    // create the marker
    new Marker({element: el})
        .setLngLat(coordinates)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
  }

  static generateCircle(map, coordinates, reportId) {
    // Generate a polygon using turf.circle
    // See https://turfjs.org/docs/#circle
    const radius = 2.5; // kilometer
    const options = {
        steps: 64,
        units: "kilometers"
    };
    const circle = turfCircle(coordinates, radius, options);

    // Add the circle as a GeoJSON source
    map.addSource(reportId, {
        type: "geojson",
        data: circle
    });

    // Add a fill layer with some transparency
    map.addLayer({
        id: `${reportId}-location-radius`,
        type: "fill",
        source: reportId,
        paint: {
            "fill-color": "#FCC737", 
            "fill-opacity": 0.55
        }
    });

    // Add a line layer to draw the circle outline
    map.addLayer({
        id: `${reportId}-location-radius-outline`,
        type: "line",
        source: reportId,
        paint: {
            "line-color": "#C7253E",
            "line-width": 2
        }
    });
  };
}

export default Mapping;