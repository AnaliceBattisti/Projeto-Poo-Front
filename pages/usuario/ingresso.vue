<template>
    <v-container class="container">
      <v-row>
        <v-col cols="12" sm="6">
          <v-select
            v-model="selectedFilme"
            :items="filmes"
            label="Escolha o Filme"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="selectedSessao"
            :items="sessoes"
            label="Escolha a Sessão"
            required
            @change="atualizarSessaoIngresso"
          ></v-select>
        </v-col>
      </v-row>

      
      <h3>Escolha uma vaga:</h3>

<div class="vagas_box_number">
    <h5>1</h5>
    <h5>2</h5>
    <h5>3</h5>
    <h5>4</h5>
    <h5>5</h5>
    <h5>6</h5>
    <h5>7</h5>
    <h5>8</h5>
</div>

<div class="vagas_boxA">
    <h5>A</h5>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
</div>

<div class="vagas_boxB">
    <h5>B</h5>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
</div>

<div class="vagas_boxC">
    <h5>C</h5>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
</div>

<div class="vagas_boxD">
    <h5>D</h5>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
</div>

<div class="vagas_boxE">
    <h5>E</h5>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
    <input type="checkbox" v-model="vaga" value="id"/>
</div>

    <v-btn
      color="yellow"
      type="submit"
      class="button_comprar"
      block
      @click="ComprarIngresso"
    >
      Realizar Compra
 
    </v-btn> 
    </v-container>
  </template>
  
  <script setup>
definePageMeta({
    layout: 'usuario'
})

  import { ref, onMounted, watch } from "vue";
  import IngressoService from "~/services/IngressoService";
  import FilmeService from "@/services/FilmeService";
  import SessaoService from "@/services/SessaoService";
import VagaService from "~/services/VagaService";
  
  var filmes = ref([]);
  var sessoes = ref([]);
  var selectedFilme = ref(null);
  var selectedSessao = ref(null);
  var selectedVaga = ref("front");

  async function listarFilmes() {
    try {
      const response = await FilmeService.list();
      filmes.value = response.data.map((filme) => filme.titulo);
    } catch (error) {
      console.error("Erro ao listar filmes:", error);
    }
  }
  
  async function listarSessoes(idFilme) {
    try {
      const filmeId = await FilmeService.getid(idFilme);
      const response = await SessaoService.listByFilme(filmeId);
      sessoes.value = response.data.map((sessao) => `${sessao.diaExibicao} ${sessao.horario}`)
    } catch (error) {
      console.error("Erro ao listar sessões:", error);
    }
  }

  onMounted(() => {
    listarFilmes();
  });
  

  watch(selectedFilme, (newSelectedFilme) => {
    if (newSelectedFilme) {
      listarSessoes(newSelectedFilme);
    }
  });

  async function atualizarSessaoIngresso() {
    ingresso.sessao = selectedSessao;
  }

  
  var ingresso = reactive ({
    sessao: "",
    vaga:{
			"coluna": "A",
			"linha": 1,
			"ocupado": false,
			"valor": 32.0
        }
});



  function ComprarIngresso() {
console.log(ingresso);
IngressoService.comprarIngresso(ingresso)
    .then((response) => {
        console.log(response.status);
    })
    .catch((error) => {
        console.error("Compra não autorizada", error);
    });
};

  </script>
  
<style>
 .container {
        background-color: #283593;
        align-items: center;
        margin-top: 28px;
        color: white;
    }

    .button_comprar {
        text-decoration: none;
        color: black;
    }

    .vagas_box_number {
        display: flex;
        gap: 21.6px;
        margin-left: 28px;
        margin-top: 5px;
    }

    .vagas_boxA {
        display: flex;
        gap: 16px;
        margin-top: 7px;
    }

    .vagas_boxB {
        display: flex;
        gap: 16px;
        margin-top: 16px;
    }

    .vagas_boxC {
        display: flex;
        gap: 16px;
        margin-top: 16px;  
    }

    .vagas_boxD {
        display: flex;
        gap: 16px;
        margin-top: 16px;
    }

    .vagas_boxE {
        display: flex;
        gap: 16px;
        margin-top: 16px;
        margin-bottom: 20px;
    }



</style>