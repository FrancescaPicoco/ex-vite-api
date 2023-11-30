<script>
import Card from './Card.vue'
export default{
    nome:"Content",
    components:{
        Card
    },
    data(){
        return{
            
        }
    }
}
</script>

<template>
    <div id="wrapper">
        <Card v-for="birra in store.birre" :details="birra" />
    </div>
</template>

<style scoped>
#wrapper{
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    margin-right: auto;
    margin-left: auto;
    padding: 3rem;
    background-color: blueviolet;
} 
</style> 