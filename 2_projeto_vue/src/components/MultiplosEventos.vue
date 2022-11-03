<template>
  <div>
    <button @click="primeiroEvento(txt1, $event), segundoEvento(txt2, $event), terceiroEvento(txt3, $event)">Ativar Multiplos Eventos </button>
     <p>{{ multiplosEventos }}</p>
  </div>
</template>

<script>
export default {
    name: 'MultiplosEventos',
    data(){
        return {
            multiplosEventos: "",
            txt: "",
            txt1: "Primeiro Evento",
            txt2: "Segundo Evento",
            txt3: "Terceiro Evento"
            
        }
    },
    methods:{
        primeiroEvento(txt, e){
            this.multiplosEventos = txt;
        },
        segundoEvento(txt, e){
            setTimeout(() => 
                this.multiplosEventos = txt, 500
            );
        },
        terceiroEvento(txt, e){
            setTimeout(() => 
                this.multiplosEventos = "", 1500
            );
        }
    }
}
</script>

<style scoped>
    div {
        margin: 100px;
    }

</style>