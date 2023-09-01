<template>
    <v-container class="test">
      <v-form color = white @submit.prevent="cadastrarFilme">
        <v-text-field v-model="titulo" label="Título"></v-text-field>
        <v-text-field v-model="duracao" label="Duração"></v-text-field>
        <v-text-field v-model="faixaEtaria" label="Faixa Etária"></v-text-field>
        <v-textarea v-model="sinopse" label="Sinopse"></v-textarea>
        <v-text-field v-model="diretor" label="Diretor"></v-text-field>
        <v-text-field v-model="capa" label="Capa"></v-text-field>
        <v-text-field v-model="protagonistas" label="Protagonistas"></v-text-field>
        <v-text-field v-model="genero" label="Gênero"></v-text-field>
        <v-btn color="primary" type="submit">Cadastrar</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        titulo: "",
        duracao: 0,
        faixaEtaria: 0,
        sinopse: "",
        diretor: "",
        capa: "",
        protagonistas: "",
        genero: "",
      };
    },
    methods: {
      cadastrarFilme() {
        // Chamar a API ou lógica de servidor para cadastrar o filme usando os dados do formulário
      },
    },
  };
  </script>
  
  <style>
    .test{
  background-color: #283593;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 1%;

}

  </style>
  