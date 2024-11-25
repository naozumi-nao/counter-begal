// import dummy from "../../../public/dummy-data.json";

import API_ENDPOINT from "../../globals/api-endpoint.js";

class ReportsApiSource {
  static async getReports() {
    const response = await fetch(API_ENDPOINT.REPORTS);
    const responseJson = await response.json();
    return responseJson;
    // return dummy.reports;
  }
}

export default ReportsApiSource;