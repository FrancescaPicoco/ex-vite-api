<script>
import Card from './Card.vue'
import { store } from "../store.js"
export default{
    nome:"Content",
    components:{
        Card
    },
    data(){
        return{  
            store         
        }
    }
}
</script>

<template>
    <div id="wrapper">
        <Card />
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