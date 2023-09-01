<template>
  <v-container class="test">
    <v-form @submit.prevent="cadastrarSessao">
      <v-text-field v-model="data" label="Data" type="date" class="text-yellow"></v-text-field>
      <v-text-field v-model="horario" label="Horário" type="time" class="text-yellow"></v-text-field>
      <v-select
        v-model="filmeSelecionado"
        :items="filmes"
        item-text="titulo"
        item-value="id"
        label="Escolha um Filme"
        class="text-yellow"
      ></v-select>
     
      <v-btn color="primary" type="submit" class="text-yellow">Cadastrar Sessão</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      filmeSelecionado: "",
      data: "", 
      horario: "",
      filmes: [], 
    };
  },
  methods: {
    cadastrarSessao() {
      
    },
  },
};
</script>

<style>
.text-yellow {
  color: yellow;
}
  
.test {
  background-color: #283593;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 1%;
}
</style>
