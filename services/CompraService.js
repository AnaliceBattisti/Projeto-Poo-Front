import http from "@/common/http";

class CompraService {
  ProcurarCompraId(id) {
    return http.get(`/ingresso/${id}`);
  }

  list() {
    return http.get("/compra");
  }

  SalvarCompra(data) {
    return http.post("/compra", data);
  }

  delete(id) {
    return http.delete(`/compra/${id}`);
  }

}

export default new CompraService();
