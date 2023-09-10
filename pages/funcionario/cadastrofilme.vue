<template>
  <v-form >
    <v-container class="test">
      <v-row >
        <v-col cols="6" class="FundoForm">
          <v-text-field class="text-white"
            v-model="filme.titulo"
            label="Título"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field class="text-white"
            v-model="filme.duracao"
            label="Duração"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field class="text-white"
            v-model="filme.faixaEtaria"
            label="Faixa Etária"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field class="text-white"
            v-model="filme.genero"
            label="Gênero"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea class="text-white"
            v-model="filme.sinopse"
            label="Sinopse"
            required
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field class="text-white"
            v-model="filme.diretor"
            label="Diretor"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field class="text-white"
            v-model="filme.protagonistas"
            label="Protagonistas"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field class="text-white"
            v-model="filme.capa"
            label="Capa"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            color="yellow"
            class="mt-4 text-indigo-darken-4"
            block @click="saveFilme"
         
          >
            Cadastrar Filme
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
definePageMeta({
    layout: 'funcionario'
})
import FilmeService from "@/services/FilmeService";

var filme = reactive ({
  titulo: "",
  duracao: "",
  faixaEtaria:"" ,
  genero: "",
  sinopse: "",
  diretor: "",
  protagonistas: "",
  capa: ""
});

function saveFilme (){
console.log(filme);
FilmeService.create(filme)
  .then((response) => {
    console.log(response.status);
   
  })
  .catch((error) => {
    console.error("Erro ao cadastrar filme:", error);
  });
};
</script>

  <styles>
  
  
  </styles>
  <style>
    .test{
  background-color: #283593;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 1%;

}

  </style>
  