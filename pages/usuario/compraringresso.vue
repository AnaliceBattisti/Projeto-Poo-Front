<template>
    <v-container class="container">
        <h1>Comprar Ingresso</h1>
        <v-form @submit.prevent="comprarIngresso" class="box_form">
        <v-select 
            title="Filme"
            v-model="ingresso.filme" 
            :items="filmes" 
            item-title="titulo" 
            item-value="id" 
            label="Escolha um Filme" 
            class="select_filme" >
        </v-select>

        <v-select
        title="Sessão"
        v-model="ingresso.sessao"
        :items="sessoesComDataEHora"
        label="Escolha uma sessão"
        class="select_sessao"
        @change="listarVagas($event)">
        </v-select>
   

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
            <div v-for="vaga in vagas" :key="vaga.id" >
                <input 
                type="checkbox" 
                v-model="ingresso.vaga" 
                :disabled="vaga.ocupado"
                :checked="vaga.ocupado"
                value="vaga.id"
                />
                <input 
                type="checkbox" 
                v-model="ingresso.vaga" 
                :disabled="vaga.ocupado"
                :checked="vaga.ocupado"
                value="vaga.id"
                />
                <input 
                type="checkbox" 
                v-model="ingresso.vaga" 
                :disabled="vaga.ocupado"
                :checked="vaga.ocupado"
                value="vaga.id"
                />
            </div>
            <!-- <input type="checkbox" v-model="vaga" value="id"/>
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
            <input type="checkbox" <v-mod></v-mod>
            <-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------2></-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------2>el="vaga" value="id"/>
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
            <input type="checkbox" v-model="vaga" value="id"/>-->
        </div> 

       
        <nuxt-link to="/usuario/confirmacaocompra"  class="button_comprar">
            <v-btn color="yellow" type="submit" class="button_comprar" block @click="ComprarIngresso">Realizar Compra</v-btn>
        </nuxt-link> 

      </v-form>
      
    </v-container>
    
  </template>

<script setup>
import FilmeService from "@/services/FilmeService";
import SessaoService from "@/services/SessaoService";
var filmes = ref([
]);

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


var sessoes = ref([

]);

function listarSessoes() {
     SessaoService.listByFilme(ingresso.filme.id)
         .then ((response) => {
             sessoes.value = response.data;
         })
         .catch((error) => {
             console.error("Erro ao listar sessoes;", error)
         })
 }


const sessoesComDataEHora = computed(() => {
  // Combina a data e o horário separados por um espaço
  return sessoes.value.map((sessao) => `${sessao.diaExibicao} ${sessao.horario}`);
});
 
import VagaService from "@/services/VagaService";
var vagas = ref([
]);

function listarVagas(event) {
     let id = event.target.value
     VagaService.getBySessao(id)
         .then ((response) => {
             vagas.value = response.data;
         })
         .catch((error) => {
             console.error("Erro ao listar vagas;", error)
         })
}

import IngressoService from "@/services/IngressoService";

var ingresso = reactive ({
    sessao: "",
    vaga: [],
    filme: ""
});

function ComprarIngresso() {
console.log(ingresso);
IngressoService.comprarIngresso(data)
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

    .container h1 {
        margin-bottom: 16px;
    }

    .box_form {

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
