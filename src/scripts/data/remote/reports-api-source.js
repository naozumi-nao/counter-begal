 import API_ENDPOINT from "../../globals/api-endpoint.js";

class ReportsApiSource {
  static async getReports() {
    const response = await fetch(API_ENDPOINT.REPORTS);
    const responseJson = await response.json();
    return responseJson;
  }
  
  static async postReport(formData) {
    const options = {
      method: "POST",
      body: formData,
    };
    const response = await fetch(API_ENDPOINT.REPORTS, options);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default ReportsApiSource;