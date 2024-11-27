 import dummy from "../../../public/dummy-data.json";

import API_ENDPOINT from "../../globals/api-endpoint.js";

class ReportsApiSource {
  static async getReports() {
    // const response = await fetch(API_ENDPOINT.REPORTS);
    // const responseJson = await response.json();
    // return responseJson;
     return dummy.reports;
  }
  
  static async postReport({ name, description, city, photoUrl, lon, lat }) {
    const report = {
      name: name,
      description: description,
      city: city,
      photoUrl: photoUrl,
      lon: lon,
      lat: lat
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report),
    };
  }
}

export default ReportsApiSource;