import http from "@/common/http";

class UsuarioService {
  getAll() {
    return http.get("/usuario");
  }

  getById(id) {
    return http.get(`/usuario/${id}`);
  }

  create(usuario) {
    return http.post("/usuario", usuario);
  }

  update(id, usuario) {
    return http.patch(`/usuario/${id}`, usuario);
  }

  delete(email) {
    return http.delete(`/usuario/${email}`);
  }

  getIngressosByUsuarioId(id) {
    return http.get(`/usuario/ingressos/${id}`);
  }
}

export default new UsuarioService();
