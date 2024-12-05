import ReportsApiSource from "../../data/remote/reports-api-source";
import AlertModals from "../../utils/alert-modals.js";

const Home = {
  async render() {
    return `
      <form id="add-report-form" autocomplete="off">
        <label for="report-name">Nama Anda</label>
        <input 
          id="report-form-name" 
          name="report-name" 
          type="text"
          autofocus
          required
        />
        <label for="report-description">Deskripsi Kejadian</label>
        <textarea 
          id="report-form-description" 
          name="report-description"
          type="text"
          required
        ></textarea>
        <label for="report-city">Kota Terjadinya Peristiwa Tersebut</label>
        <input 
          id="report-form-city" 
          name="report-city" 
          type="text"
          required
        />
        <label for="report-longitude">longitude</label>
        <input 
          id="report-form-longitude" 
          name="report-longitude" 
          type="text"
          placeholder="Otomatis terisi dengan Bagikan Lokasi"
          onkeydown="return false;"
          style="caret-color: transparent !important;"
          required
        />
        <label for="report-latitude">latitude</label>
        <input 
          id="report-form-latitude" 
          name="report-latitude" 
          type="text"
          placeholder="Otomatis terisi dengan Bagikan Lokasi"
          onkeydown="return false;"
          style="caret-color: transparent !important;"
          required
        />
        <button id="share-location-btn">Bagikan Lokasi Anda
          <i class="fa-solid fa-location-crosshairs"></i>
        </button>
        <label for="report-image">Upload Foto Tempat Kejadian Perkara</label>
        <input 
          id="report-form-image"
          name="report-image"
          type="file"
          accept="image/*"
          required
        />
        <button id="report-form-submit-btn" type="submit">Kirim Laporan</button>
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

      console.log(lon);
      console.log(lat);

      if (lon === null || lat === null) {
        AlertModals.showErrorModal("Sharing location is required to add report!");
        return false;
      }

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("city", city);
      formData.append("lon", lon);
      formData.append("lat", lat);
      formData.append("image-file", imageFile);

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