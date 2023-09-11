import http from "@/common/http";

class SessaoService {
  getById(id) {
    return http.get(`/sessao/${id}`);
  }

  list() {
    return http.get("/sessao");
  }

  create(sessao, id) {
    return http.post(`/savesessao/${id}`, sessao);
  }

  listByFilme(idFilme) {
    return http.get(`/sessao/filme/${idFilme}`);
  }

  getByHorarioAndData(horario, diaExibicao) {
    return http.get(`/sessao/horario-data/${horario}/${diaExibicao}`);
  }
}

export default new SessaoService();
