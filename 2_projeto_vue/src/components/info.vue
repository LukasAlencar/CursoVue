<template>
    <div>
        <p v-if="estaTrabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando</p>
        <p>Utilizo as seguintes tecnologias para backend:</p>
        <ul >
            <li v-for="(technology, index) in backendTechnologies" v-bind:key="index"> {{technology}} </li>
        </ul>
        <p>Utilizo as seguintes tecnologias para FrontEnd</p>
        <ul>
            <li v-for="technology in frontEndTechnologies" :key="technology.id">
                {{ technology.language }}
            </li>
        </ul>
        <div>
            <button id="textoBotao" @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p  v-show="mostrarEmail">Mande uma mensagem para: {{ email }}</p>
        <p class="teste">Para acessar meu portifólio <a target="_blanck" v-bind:href="meuLink">basta clicar aqui</a></p>
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
            mostrarEmail: true,
            email: "testeemail@asda.com",
            meuLink: "https://google.com.br",
            textoBotao: "Esconder E-mail",
            backendTechnologies: ['JavaScript', 'PHP', "Phyton"],
            frontEndTechnologies: [
                {id: 1, language: 'HTML'},
                {id: 2, language: 'CSS'},
                {id: 3, language: 'VUE'}
            ]
        };
    },
    components: { Picture },
    methods: {
        showEmail(){
            this.mostrarEmail = !this.mostrarEmail;
            if(!this.mostrarEmail){
                this.textoBotao = "Mostrar E-mail";
            }else{
                this.textoBotao = "Esconder E-mail";
            }
        }
       
    }

}
</script>

<style>
    .teste{
        background-color: black;
    }
</style>