<template>
  <v-main class="teste">
    <v-container fluid class="login-container">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="elevation-12">
            <v-card-title class="headline">Login</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login" > 
                <v-text-field v-model="username" label="Usuário"></v-text-field>
                <v-text-field v-model="password" label="Senha" type="password"></v-text-field>
                <v-btn type="submit"  class="login-button"> <nuxt-link to= "/usuario">Entrar</nuxt-link></v-btn>
              </v-form>

              <div class="signup-link">
                <span>Não é cadastrado? </span>
                <nuxt-link to="/usuario/cadastrousuario" class="cadastro_button">Cadastre-se aqui</nuxt-link>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      // Here you can add your authentication logic
      console.log("Login attempt:", this.username, this.password);
    }
  }
};
</script>

<style scoped>

.teste{
}
.login-container {
   /* indigo-darken-4 */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

.elevation-12{
  background-color: #283593;
  color: white;
}

.headline {
  text-align: center;
  color: white;
}

.cadastro_button {
  color: yellow;
}

.login-button {
  color: "indigo-darken-4";
  background-color: yellow;
}

.signup-link {
  text-align: center;
  margin-top: 1rem;
  color: white;
}
</style>
