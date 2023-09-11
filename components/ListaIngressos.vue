<template>
    <v-container class="test">
      <v-row>
        <v-col
          v-for="(ingresso, index) in ingressos"
          :key="index"
          cols="12"
          sm="4"
          md="4"
          lg="8"
        >
          <v-card class="ma-2">
            <v-card-title>{{ ingresso.filme }}</v-card-title>
            <v-card-title>{{ ingresso.sessao }}</v-card-title>
            <v-card-title>{{ ingresso.vaga }}</v-card-title>
            <v-card-actions>
              <nuxt-link :to="'/comprar-ingresso/' + ingresso.id">
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
  import IngressoService from "@/services/IngressoService";
  
  export default {
    data() {
      return {
        ingressos: [],
      };
    },
    mounted() {
      this.listarIngressos();
    },
    methods: {
      async listarIngressos() {
        try {
          const response = await IngressoService.list();
          this.ingressos = response.data;
        } catch (error) {
          console.error("Erro ao listar ingressos:", error);
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
  