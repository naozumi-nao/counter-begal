import turfCircle from "@turf/circle";
import { Popup, Marker } from "maplibre-gl";

class Mapping {
  static generateMarker(map, report) {
    const coordinates = [report.lon, report.lat];
    console.log(coordinates);
    // create the popup
    const popup = new Popup({offset: 25}).setText(
      `${report.description}`
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


  static generateCircle(map, coordinates) {
    // Generate a polygon using turf.circle
    // See https://turfjs.org/docs/#circle
    const radius = 2.5; // kilometer
    const options = {
        steps: 64,
        units: "kilometers"
    };
    const circle = turfCircle(coordinates, radius, options);

    // Add the circle as a GeoJSON source
    map.addSource("location-radius", {
        type: "geojson",
        data: circle
    });

    // Add a fill layer with some transparency
    map.addLayer({
        id: "location-radius",
        type: "fill",
        source: "location-radius",
        paint: {
            "fill-color": "#8CCFFF",
            "fill-opacity": 0.55
        }
    });

    // Add a line layer to draw the circle outline
    map.addLayer({
        id: "location-radius-outline",
        type: "line",
        source: "location-radius",
        paint: {
            "line-color": "#0094ff",
            "line-width": 2
        }
    });
  };
}

export default Mapping;