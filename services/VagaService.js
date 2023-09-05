import http from "@/common/http";

class VagaService {
    create() {
    return http.post("/vaga/normal");
  }

  create() {
    return http.post("/vaga/front");
  }

}

export default new SessaoService();
