<template>
    <v-container class="test">
      <v-row>
        <v-col
          v-for="(filme, index) in filmes"
          :key="index"
          cols="12"
          sm="4"
          md="4"
          lg="8"
        >
          <v-card class="ma-2">
            <v-img
              :src="filme.capa"
              alt="Capa do Filme"
              height="200"
            ></v-img>
            <v-card-title>{{ filme.titulo }}</v-card-title>
            <v-card-subtitle>Faixa Etária: {{ filme.faixaEtaria }}</v-card-subtitle>
            <v-card-actions>
              <nuxt-link :to="'/comprar-ingresso/' + filme.id">
                <v-btn   size="small" color="indigo-darken-4"
                class="bg-yellow">Comprar Ingresso</v-btn>
              </nuxt-link>
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
    },
  };
  </script>
  
  <style scoped>
 .test{
  background-color: #283593;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 1%;

}


  </style>
  