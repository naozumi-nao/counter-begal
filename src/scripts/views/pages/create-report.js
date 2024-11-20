// import AlertModals from "./alert-modals.js";

// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition, error, options);
//   } else { 
//     AlertModals.showErrorModal("Geolocation is not supported by this browser.");
//   }
// }

// function showPosition(position) {
//   const longitude = position.coords.longitude;
//   const latitude = position.coords.latitude;
// }

// function error(err) {
//   AlertModals.showErrorModal(`ERROR(${err.code}): ${err.message}`);
// }