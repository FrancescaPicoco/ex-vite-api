<script>
import Card from './Card.vue'
import { store } from "../store.js"
export default{
    //props: ["details"], 
    nome:"Content",
    components:{
        Card
    },
    data(){
        return{  
            store,         
        }
    }
}
</script>

<template>
    <div id="wrapper">
        <Card v-for="beer in this.store.beers" :details="beer"/>
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
    background-color: rgb(45, 13, 76);
} 
</style> 