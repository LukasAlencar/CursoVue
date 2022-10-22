<template>
    <img :title="descricao" :src="avatar" :alt="descricao">
</template>

<script>
export default {
    name: 'Picture',
    data(){
        
        return{
            avatar: '/img/fotoMinha.jpg',
            descricao: 'Meu avatar'
        }
    }
}
</script>

<style>

</style>