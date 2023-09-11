<template>
    <v-table fixed-header height="300px">
      <thead>
        <tr>
          <th class="text-left">
            Filme
          </th>
          <th class="text-left">
            Sessão
          </th>
          <th class="text-left">
            Vaga
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ingresso in ingressos" :key="ingresso.id" >
          <td>{{ ingresso.filme }}</td>
          <td>{{ ingresso.sessao }}</td>
          <td>{{ ingresso.vagas }}</td>
        </tr>
      </tbody>
    </v-table>
    <RouterLink to="compraringresso">Comprar Novo</RouterLink>
</template>
<script setup>
    import IngressoService from '@/service/IngressoService';
    var ingressos = ref([
        {
            "filme": "barbie",
            "vagas":[8],
	        "sessao": "27/09"
        }
    ]);

    function listarIngressos () {
        IngressoService.list().then(
            response => {
                ingressos.value = response.data;
            }
        )
    }

    onMounted(
        () => {listarIngressos();} 
    )
</script>