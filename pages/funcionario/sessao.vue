<template>
  <v-form>
    <v-container class="test">
      <v-row>
        <v-col cols="6">
          <v-text-field class="text-white"
            type="date"
            v-model="sessao.diaExibicao"
            label="Data"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field class="text-white"
      
            v-model="sessao.horario"
            label="Horário"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select class="text-white"
            :items="filmes.map(item => item.titulo)"
            label="Escolha o Filme"
            required
            @change="filmeSelecionado"
            v-model="filme"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            color="yellow"
            class="mt-4 text-indigo-darken-4"
            @click="saveSessao"
          >
            Cadastrar Sessão
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SessaoService from "@/services/SessaoService";
import FilmeService from "@/services/FilmeService";

var filmes = ref([]);

function listarFilmes() {
  FilmeService.list()
    .then((response) => {
      filmes.value = response.data;
    })
    .catch((error) => {
      console.error("Erro ao listar filmes:", error);
    });
}

onMounted(() => {
  listarFilmes();
});
var filme = ref([]);

var sessao = reactive({
  horario: "",
  diaExibicao: " "
});

function filmeSelecionado() {
  console.log("Filme selecionado:", filme);
}

function saveSessao() {
  console.log("Valor de sessao.filme:", filme.value); 
  console.log("Dados de sessao:", sessao);

  SessaoService.create(sessao,filme.value)
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => {
      console.error("Erro ao cadastrar sessão:", error);
    });
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

