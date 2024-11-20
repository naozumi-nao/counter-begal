import dummy from "../../../public/dummy-data.json";

class ReportsApiSource {
  static async getReports() {
    return dummy.reports;
  }
}

export default ReportsApiSource;