<template>
  <v-container class="container">
    <form @submit.prevent="submit">

      <v-container class="box-identificacao">
        <h1>Identificação</h1>
        <v-text-field :counter="10" label="Nome completo" class="input"></v-text-field>
        <v-text-field :counter="7" label="Telefone" class="input"></v-text-field>
        <v-text-field label="E-mail" class="input"></v-text-field>
        <v-text-field :counter="11" label="CPF" class="input"></v-text-field>
        <v-text-field :counter="9" label="RG" class="input"></v-text-field>
      </v-container>

      <v-container class="box-endereco">      
        <h1>Endereço</h1>
        <v-text-field label="Rua" class="input"></v-text-field>
        <v-text-field label="Bairro" class="input"></v-text-field>
        <v-text-field label="Número" class="input"></v-text-field>
        <v-text-field label="Complemento" class="input"></v-text-field>
        <v-text-field label="Cep" class="input"></v-text-field>
        <v-text-field label="Cidade" class="input"></v-text-field>
      </v-container>

      <v-container class="box-botoes">
        <v-btn class="me-4"> Voltar </v-btn>
        <v-btn class="me-4" type="submit"> Cadastrar </v-btn>
      </v-container>

    </form>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        nome: "",
        telefone: "",
        email: "",
        cpf: "",
        rg: "",
        endereco: {
          rua: "",
          bairro: "",
          numero: "",
          complemento: "",
          cep: "",
          cidade: "",
        },
      };
    },
    methods: {
      cadastrarUsuario() {
        //chamar a API
      },
    }
  };
</script>

<style>
  .container{
    background-color: #283593;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 1%;
    color: white;
  }

.box-botoes {
  display: flex;
  text-align: center;
  align-items: center;
  justify-items: space-evenly;
  gap: 16px;
}

.me-4 {
  background-color: yellow;
}

</style>
