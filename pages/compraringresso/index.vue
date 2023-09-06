<template>
    <v-sheet width="300" class="mx-auto">
  
      <v-form ref="form">
        
        <p>Filme <v-select v-model="ingresso.filme" :items="fimes.map(item => item.titulo)" label="Escolha o Filme:" required></v-select></p>
        <p>Sessão <v-select v-model="ingresso.sessao.filme" :items="sessoes.map(item => item.data)" label="Escolha a Sessão:" required></v-select></p>
        <div>
            <h1>Vaga</h1>>
            <div>
                <h2>Front</h2>

            </div>

        </div>

    <v-container>
        <v-row>
            <v-col v-for="assento in assentos" :key="assento.id" cols="8">
                <v-btn :disabled="!assento.disponivel" @click="selecionarAssento(assento)"> 
                    {{ assento.nome }}
                </v-btn>
                <span v-if="!assento.disponivel">(Indisponível)</span>
            </v-col>
        </v-row>
        <v-btn @click="ComprarIngresso">Comprar Ingresso</v-btn>
    </v-container>

      </v-form>
    </v-sheet>
  </template>

<script setup>

import FilmeService from "@/services/FilmeService";
var filmes = ref([]);

function listarFilmes() {
    FilmeService.list()
        .then ((response) => {
            filmes.value = response.data;
        })
        .catch((error) => {
            console.error("Erro ao listar filmes;", error)
        })
}
onMounted(
    () => {listarFilmes();}
)

import SessaoService from "@/services/SessaoService";
var sessoes = ref([]);

function listarSessoes() {
    SessaoService.list()
        .then ((response) => {
            sessoes.value = response.data;
        })
        .catch((error) => {
            console.error("Erro ao listar sessoes;", error)
        })
}
onMounted(
    () => {listarSessoes();}
)

import VagaService from "@/services/VagaService";
var vagas = ref([]);

function listarVagas() {
    SessaoService.list()
        .then ((response) => {
            vagas.value = response.data;
        })
        .catch((error) => {
            console.error("Erro ao listar vagas;", error)
        })
}
onMounted(
    () => {listarVagas();}
)

import IngressoService from "@/services/IngressoService";

var ingresso = reactive ({
    filme: "",
    sessao: "",
    vaga: "[]",
    placa: "",
});

methods: {
    function selecionarAssento(assento) {
        if (assento.disponivel) {
            assento.disponivel = false;
            this.assentosSelecionados.push(assento);
        } else {
            alert('Este assento já está indisponível.');
        }
    };

    function ComprarIngresso() {
    console.log(ingresso);
    IngressoService.create(ingresso)
        .then((response) => {
            console.log(response.status);
        })
        .catch((error) => {
            console.error("Compra não autorizada", error);
        });
        ingressoSelecionado.disponivel = false;
    };
}

</script>