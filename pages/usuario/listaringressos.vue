<template>
  <v-main>
    <v-container fluid>
      <h1 class="headline">Ingressos</h1>
      <lista-ingressos></lista-ingressos> 
    </v-container>
  </v-main>
</template>

<script>

definePageMeta({
  layout: 'usuario'
})
import listarIngressos from "@/components/ListarIngressos.vue";

export default {
  name: "Home",
  components: {
    ListarIngressos,
  },
};
</script>

<style scoped>
.headline {
  margin-top: 2rem;
  text-align: center;
}
</style>
