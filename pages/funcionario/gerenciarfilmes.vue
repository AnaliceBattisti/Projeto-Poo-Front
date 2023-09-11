<template>
    <v-container class="test">
      <v-row>
        <v-col
          v-for="(filme, index) in filmes"
          :key="index"
          cols="12"
          sm="4"
          md="4"
          lg="3"
        >
          <v-card class="ma-2" width="250" height="360">
            <v-img
              :src="filme.capa"
              alt="Capa do Filme"
              height="240"
            ></v-img>
            <v-card-title>{{ filme.titulo }}</v-card-title>
            <v-card-subtitle>Faixa Etária: {{ filme.faixaEtaria }}</v-card-subtitle>
            <v-card-actions>
          
              <v-btn
                size="small"
                color="red"
                @click="excluirFilme(filme.id, index)"
              >
                Excluir
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import FilmeService from "@/services/FilmeService";
  
  export default {
    data() {
      return {
        filmes: [],
      };
    },
    mounted() {
      this.listarFilmes();
    },
    methods: {
      async listarFilmes() {
        try {
          const response = await FilmeService.list();
          this.filmes = response.data;
        } catch (error) {
          console.error("Erro ao listar filmes:", error);
        }
      },
      async excluirFilme(filmeId, index) {
        try {
          const response = await FilmeService.delete(filmeId); // Suponha que você tenha um método de serviço para exclusão
          if (response.status === 200) {
            // Exclusão bem-sucedida
            this.filmes.splice(index, 1); // Remove o filme excluído da lista
          }
        } catch (error) {
          console.error("Erro ao excluir filme:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .test {
    background-color: #283593;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 1%;
  }
  </style>
  