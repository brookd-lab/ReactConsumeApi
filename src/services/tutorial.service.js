import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/employees");
  }

  get(id) {
    return http.get(`/employees/${id}`);
  }

  create(data) {
    return http.post("/employees", data);
  }

  update(data) {
    return http.put("/employees", data);
  }

  delete(id) {
    return http.delete(`/employees/${id}`);
  }

  findByTitle(title) {
    return http.get(`/employees?title=${title}`);
  }
}

export default new TutorialDataService();