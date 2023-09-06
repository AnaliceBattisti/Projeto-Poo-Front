import http from "@/common/http";

class SessaoService {
  getById(id) {
    return http.get(`/sessao/${id}`);
  }

  list() {
    return http.get("/sessao");
  }

  create(sessao, titulo) {
    return http.post(`/sessao/${titulo}`);
  }

  getByFilme(titulo) {
    return http.get(`/sessao/${titulo}`);
  }

  getByHorarioAndData(horario, diaExibicao) {
    return http.get(`/sessao/horario-data/${horario}/${diaExibicao}`);
  }
}

export default new SessaoService();
