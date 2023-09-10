import http from "@/common/http";

class VagaService {
    create() {
    return http.post("/vaga/normal");
  }

  create() {
    return http.post("/vaga/front");
  }

  getBySessao(id) {
    return http.get("/vaga"+id);
  }

}

export default new VagaService();
