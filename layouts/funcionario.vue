<template>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <v-layout>
      <v-app-bar app color="yellow darken-1">
        <v-container>
          <v-app-title class="text-decoration-underline">Drive-in</v-app-title>
        </v-container>
        <v-spacer></v-spacer>
        <v-btn>
        <NuxtLink to="/funcionario" class="home_text">Home</NuxtLink>
      </v-btn>
         <v-btn
      id="menu-activator"
      class="bg-indigo-darken-4" 
      color="yellow"
      
    >
      Gerenciar
    </v-btn>

    <v-menu activator="#menu-activator">
      <v-list class="menu">
        <v-list-item>
         <nuxt-link to="/funcionario/Sessao"> Cadastrar Sessao</nuxt-link>
        </v-list-item>
        <v-list-item>
        <nuxt-link to="/funcionario/cadastrofilme"> Cadastrar Filme</nuxt-link>     
        </v-list-item>
      </v-list>
    </v-menu>
      </v-app-bar>
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </template>
  
  
  <script>
  export default {
    name: "AppLayout",
  };
  </script>
  
  <style scoped>
    .home-text{
      color: indigo-darken-4;
      
    }
  </style>
  