import http from "@/common/http";

class FilmeService {
  list() {
    return http.get("/filme");
  }

  getByTitulo(titulo) {
    return http.get(`/filme/${titulo}`);
  }

  create(data) {
    return http.post("/filme", data);
  }

  delete(titulo) {
    return http.delete("/filme", { data: { titulo } });
  }
}

export default new FilmeService();
