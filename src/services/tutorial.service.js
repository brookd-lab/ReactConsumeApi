import http from "../http-common";
import authHeader from "./auth-header";

class TutorialDataService {
  getAll() {
    return http.get("/employees", {headers: authHeader() });
  }

  get(id) {
    return http.get(`/employees/${id}`, {headers: authHeader() });
  }

  create(data) {
    return http.post("/employees", data, {headers: authHeader() });
  }

  update(data) {
    return http.put("/employees", data, {headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/employees/${id}`, {headers: authHeader() });
  }

  findByTitle(title) {
    return http.get(`/employees?title=${title}`);
  }
}

export default new TutorialDataService();