<script>
export default{
    props: {
        details: Object
    }
}
</script>

<template>   
    <div class="card">
        <div>IMMAGINE</div>
        <h3>{{ details.name }}</h3>
        <p>{{ details.phone }}</p>      
    </div>  
</template>

<style scoped>
   .card{
    width: calc((100% / 6) - 2rem);
    height: 200px;
    margin: 1rem;
    background-color: slategray;
    color: brown;
   }
   img{
    width: 100%;
    height: 100%;
   }
</style>