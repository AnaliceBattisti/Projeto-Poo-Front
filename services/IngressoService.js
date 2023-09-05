import http from "@/common/http";

class IngressoService {
  list() {
    return http.get("/ingresso");
  }

  comprarIngresso(data) {
    return http.post("/ingresso", data);
  }

  AtualizarIngresso(id , ingresso) {
    return http.patch(`/ingresso/${id}`, ingresso);
  }

  delete(id) {
    return http.delete(`/ingresso/${id}`);
  }
}

export default new IngressoService();
