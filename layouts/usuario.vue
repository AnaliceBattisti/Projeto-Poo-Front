<template>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <v-layout>
      <v-app-bar app color="yellow darken-1">
        <v-container>
          <v-app-title class="text-decoration-underline">Drive-in</v-app-title>
        </v-container>
        <v-spacer></v-spacer>
        <v-btn>
        <NuxtLink to="/usuario" class="home_text">Home</NuxtLink>
      </v-btn>
        <v-btn
      id="menu-activator"
      class="bg-indigo-darken-4" 
      color="yellow"
      
    >
      Meu Perfil
    </v-btn>

    <v-menu activator="#menu-activator">
      <v-list class="menu">
        <v-list-item
          
        >
         <nuxt-link to="/meusIngresso"> Meus Ingressos</nuxt-link>
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
    .menu{
      
    }
  </style>
  