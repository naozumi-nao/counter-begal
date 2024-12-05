import ReportsApiSource from "../../data/remote/reports-api-source";
import AlertModals from "../../utils/alert-modals.js";

const Home = {
  async render() {
    return `
      <form id="add-report-form" autocomplete="off">
        <label for="report-name">Name</label>
        <input 
          id="report-form-name" 
          name="report-name" 
          type="text"
          autofocus
          required
        />
        <label for="report-description">Description</label>
        <textarea 
          id="report-form-description" 
          name="report-description"
          type="text"
          required
        ></textarea>
        <label for="report-city">City</label>
        <input 
          id="report-form-city" 
          name="report-city" 
          type="text"
          required
        />
        <button id="share-location-btn">Share Location</button>
        <label for="report-longitude">longitude</label>
        <input 
          id="report-form-longitude" 
          name="report-longitude" 
          type="text"
          disabled
          required
        />
        <label for="report-latitude">latitude</label>
        <input 
          id="report-form-latitude" 
          name="report-latitude" 
          type="text"
          disabled
          required
        />
        <label for="report-image">Upload an Image</label>
        <input 
          id="report-form-image"
          name="report-image"
          type="file"
          accept="image/*"
          required
        />
        <button id="report-form-submit-btn" type="submit">Submit report</button>
      </form>
    `;
  },

  async afterRender() {
    document.querySelector("#share-location-btn").addEventListener("click", () => {
      getLocation();
    })

    document.querySelector("#add-report-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.querySelector("#report-form-name").value;
      const description = document.querySelector("#report-form-description").value;
      const city = document.querySelector("#report-form-city").value;
      const lon = document.querySelector("#report-form-longitude").value;
      const lat = document.querySelector("#report-form-latitude").value;
      const imageFile = document.querySelector("#report-form-image").files[0];

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("city", city);
      formData.append("lon", lon);
      formData.append("lat", lat);
      formData.append("image-file", imageFile);

      console.log(formData);

      try {
        AlertModals.showLoadingModal();
        const result = await ReportsApiSource.postReport(formData);
        AlertModals.showSuccessModal(result.message, "successfully added report");
      } catch (error) {
        AlertModals.showErrorModal(error);
      }
    });
  },
};

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error, options);
  } else { 
    AlertModals.showErrorModal("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  document.querySelector("#report-form-longitude").value = position.coords.longitude;
  document.querySelector("#report-form-latitude").value = position.coords.latitude;
}

function error(err) {
  AlertModals.showErrorModal(`ERROR(${err.code}): ${err.message}`);
}

export default Home;