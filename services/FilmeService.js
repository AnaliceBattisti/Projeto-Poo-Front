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

  delete(id) {
    return http.delete(`/filme/${id}` );
  }

  
  getid(titulo) {
    return http.get(`/filme/${titulo}`)
      .then((response) => {
        // Extraia o ID do filme da resposta e retorne-o
        return response.data.id;
      })
      .catch((error) => {
        console.error("Erro ao obter ID do filme:", error);
        throw error; // Rejeita a promessa para que o erro seja tratado no componente Vue
      });
  }
  
}

export default new FilmeService();
