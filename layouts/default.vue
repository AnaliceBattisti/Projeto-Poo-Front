<template>
  <v-layout>
    <v-app-bar app color="yellow darken-1">
      <v-container>
      <v-app-title class="text-decoration-underline">Drive-in</v-app-title>
      </v-container>
      <v-spacer></v-spacer>
      <v-btn>
        <NuxtLink to="/" class="home_text">Home</NuxtLink>
      </v-btn>
      <v-btn class="bg-indigo-darken-4" rounded="lg">
        <NuxtLink to="/login" class="login_name">Login</NuxtLink>
      </v-btn>
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
.login_name {
  color: #fdd835;
}
.home_text {
  color: #b71c1c;
}

</style>
