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
            v-model="sessao.filmes"
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
          <v-snackbar v-model="successMessage" :timeout="5000" color="success">
      {{ successMessage }}
    </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
definePageMeta({
    layout: 'funcionario'
})
import { onMounted, ref } from "vue";
import SessaoService from "@/services/SessaoService";
import FilmeService from "@/services/FilmeService";

var filmes = ref([]);
var successMessage = ref("");

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

var sessao = reactive({
  horario: "",
  diaExibicao: " "
});



function saveSessao() {
  FilmeService.getid(sessao.filmes)
    .then((FilmeId) => {
      
      
      SessaoService.create(sessao, FilmeId)
        .then((response) => {
          if (response.status === 200) {
        // Define a mensagem de sucesso
        successMessage.value = "Filme cadastrado com sucesso!";
      }
        })
        .catch((error) => {
          console.error("Erro ao cadastrar sessão:", error);
        });
        
    })
    .catch((error) => {
      console.error("Erro ao obter ID do filme:", error);
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

