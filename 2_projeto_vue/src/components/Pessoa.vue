<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{name}}</h2>
        <Info />
        <Form />
    </div>
</template>

<script>
import Info from './info.vue';
import Form from './Form.vue';
export default {
    name: 'Pessoa',
    components:{
    Info,
    Form
},
    data(){
        return{
            name: 'Lucas',
        }
    }
}
</script>