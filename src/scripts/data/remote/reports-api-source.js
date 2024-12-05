 import API_ENDPOINT from "../../globals/api-endpoint.js";
 //import dummy from "../../../public/dummy-data.json";

class ReportsApiSource {
  static async getReports() {
    const response = await fetch(API_ENDPOINT.REPORTS);
    const responseJson = await response.json();
    return responseJson.reports;
    //return dummy.reports;
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