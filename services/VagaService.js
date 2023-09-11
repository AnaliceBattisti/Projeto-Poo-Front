import http from "@/common/http";

class VagaService {
  createVagaNormal() {
    return http.post("/vaga/normal");
  }

  createVagaFront() {
    return http.post("/vaga/front");
  }

  getVagaById(id) {
    return http.get(`/vaga/${id}`);
  }

  listVagas() {
    return http.get("/vaga");
  }

  listVagasBySessao(idSessao) {
    return http.get(`/vaga/sessao/${idSessao}`);
  }
}

export default new VagaService();
