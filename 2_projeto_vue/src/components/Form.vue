<template>
  <div>
    <h2>Meu formulario: </h2>
    <form action="" @submit="enviarForm($event)">
        <div>
            <input type="text" name="name" id="name" v-model="name">
        </div>
        <div>
            <input type="email" name="email" id="email" v-model="email">
        </div>
        <div>
            <Submit />
        </div>
    </form>
  </div>
</template>

<script>
import InputText from './form/InputText.vue';
import Submit from './form/Submit.vue';
export default {
    name: 'Form',
    components: {
        InputText, 
        Submit
    },
    data() {
        return{
            name: "",
            email: ""
        }
    },
    methods: {
        enviarForm(e){
            e.preventDefault();
            const name = this.name;
            const email = this.email;


            console.log("O nome é: " + name);
            console.log("O email é: " + email);

            console.log("Formulário enviado!");
        }
    }

}
</script>

<style>

</style>