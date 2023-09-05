<template>
  <v-container class="test">
    <v-form @submit.prevent="cadastrarSessao">
      <v-text-field v-model="data" label="Data" type="date" class="text-white"></v-text-field>
      <v-text-field v-model="horario" label="Horário" type="time" class="text-white"></v-text-field>
      <v-select
        v-model="filmeSelecionado"
        :items="filmes"
        item-text="titulo"
        item-value="id"
        label="Escolha um Filme"
        class="text-white"
        
      ></v-select>
     
      <v-btn color="yellow" type="submit" class="text-indigo-darken-4" block @click="saveSessao">Cadastrar Sessão</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import FilmeService from "@/services/FilmeService";
import SessaoService from "@/services/SessaoService";

  var sessao = reactive ({
  horario: "",
  diaExibicao: "",
  
});
  var filme = ref([]);

function saveSessao(){
  console.log(sessao);
FilmeService.create(sessao);


}


</script>

<style>


.test {
  background-color: #283593;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 1%;
}
</style>
