<template>
    <v-container class="container">
        <v-card
            class="card"
            type="success"
        >Compra realizada com sucesso!</v-card>

        <div class="link_box">
            <nuxt-link to="/usuario/compraringresso" class="link">Realizar uma nova compra</nuxt-link>
        </div>
    </v-container>
</template>

<style>
    .container {
        padding: 32px 24px 32px 24px;
        background-color: #283593;
    }

    .card {
        background-color: yellow;
        height: 100px;
        align-items: center;
        font-size: 40px;
        text-align: center;
    }

    .link_box {
        display: flex;
        text-align: center;
        justify-items: space-evenly;
        align-items: center;
        gap: 16px;
        margin-top: 24px;
    }

    .link {
        color: yellow;
        height: 30px;
        width: 250px;
        text-align: center;
    }

</style>