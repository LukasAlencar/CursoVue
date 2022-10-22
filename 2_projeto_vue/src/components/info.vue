<template>
    <div>
        <p v-if="estaTrabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Vue</li>
        </ul>
        <div>
            <button @click="showEmail">Mostrar e-mail</button>
        </div>
        <p  v-show="mostrarEmail">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portifólio <a target="_blanck" v-bind:href="meuLink">basta clicar aqui</a></p>
        <Picture/>
    </div>
</template>

<script>
import Picture from './Picture.vue';
export default {
    name: "info",
    data() {
        return {
            estaTrabalhando: true,
            mostrarEmail: false,
            email: "testeemail@asda.com",
            meuLink: "https://google.com.br"
        };
    },
    components: { Picture },
    methods: {
        showEmail(){
            this.mostrarEmail = !this.mostrarEmail;
        }


    }

}
</script>

<style>

</style>