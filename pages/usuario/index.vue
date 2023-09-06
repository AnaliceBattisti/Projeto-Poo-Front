<template>
    <v-main>
      <v-container fluid>
        <h1 class="headline">Filmes</h1>
        <lista-filmes></lista-filmes> 
      </v-container>
    </v-main>
  </template>
  
  <script>

definePageMeta({
    layout: 'usuario'
})
  import ListaFilmes from "@/components/ListaFilmes.vue";
  
  export default {
    name: "Home",
    components: {
      ListaFilmes,
    },
  };
  </script>
  
  <style scoped>
  .headline {
    margin-top: 2rem;
    text-align: center;
  }
  </style>
  