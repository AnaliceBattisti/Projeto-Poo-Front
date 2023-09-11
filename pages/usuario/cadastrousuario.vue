<template>
  <v-container class="container">
    <form @submit.prevent="submit">

      <v-container class="box-identificacao">
        <h1>Identificação</h1>
        <v-text-field v-model="usuario.nome" :counter="10" label="Nome completo" class="input"></v-text-field>
        <div class="input_box">
          <v-text-field v-model="usuario.telefone" :counter="7" label="Telefone" class="input"></v-text-field>
          <v-text-field v-model="usuario.email" label="E-mail" class="input"></v-text-field>
        </div>
        <div class="input_box">
          <v-text-field v-model="usuario.cpf" :counter="11" label="CPF" class="input"></v-text-field>
          <v-text-field v-model="usuario.senha" :counter="9" label="Senha" class="input"></v-text-field>
        </div>
      </v-container>

      <v-container class="box-endereco">      
        <h1>Endereço</h1>
        <v-text-field v-model="usuario.endereco.logradouro" label="Rua" class="input"></v-text-field>
        <v-text-field v-model="usuario.endereco.bairro" label="Bairro" class="input"></v-text-field>
        <v-text-field v-model="usuario.endereco.numero" label="Número" class="input"></v-text-field>
        <v-text-field v-model="usuario.endereco.complemento" label="Complemento" class="input"></v-text-field>
        <v-text-field v-model="usuario.endereco.cep" label="Cep" class="input"></v-text-field>
        <v-text-field v-model="usuario.endereco.uf" label="Estado" class="input"></v-text-field>
      </v-container>

      <v-container class="box-botoes">
        <v-btn class="me-4"> <nuxt-link to="/" class="voltar_button">Voltar</nuxt-link> </v-btn>
        <v-btn class="cadastroButton" type="submit" block> Cadastrar </v-btn>
      </v-container>
      <v-snackbar v-model="successMessage" :timeout="5000" color="success">
        {{ successMessage }}
      </v-snackbar>

    </form>
  </v-container>
</template>

<script>
import UsuarioService from "@/services/UsuarioService";
import { reactive, ref } from "vue";

export default {
  setup() {
    const usuario = reactive({
      nome: "",
      telefone: "",
      email: "",
      cpf: "",
      senha: "",
      endereco: {
        logradouro: "",
        bairro: "",
        numero: "",
        complemento: "",
        cep: "",
        uf: "",
      },
    });

    const successMessage = ref("");

    const submit = async () => {
      try {
        console.log(usuario);
        const response = await UsuarioService.create(usuario);
        if (response.status === 200) {
          // Define a mensagem de sucesso
          successMessage.value = "Usuário cadastrado com sucesso!";
        }
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        // Manipule o erro aqui, você pode mostrar uma mensagem de erro para o usuário
      }
    };

    return { usuario, successMessage, submit };
  },
};
</script>

<style>
.container {
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

.cadastroButton{
  background-color: yellow;
  padding: 5px;
  
}


.input_box {
  display: flex;
  justify-items: space-evenly;
  gap: 16px;
}

.voltar_button {
  text-decoration: none;
  color: black;
}
</style>
