<script>
export default{
    props: ["details"]    
}
</script>

<template>   
    <div class="card">
        <div>IMMAGINE</div>
        <h3>{{ details.name }}</h3>
        <p>{{ details.city }}</p> 
        <p>{{ details.country }}</p>
        <p>{{ details.phone }}</p>
        <p>{{ details.adress_1 }}</p>
        <p>{{ details.brewery_type }}</p>
        <p>{{ details.state }}</p>   
        <p>{{ details.state_province }}</p>     
        <p>{{ details.street }}</p>       
    </div>  
</template>

<style scoped>
   .card{
    width: calc((100% / 5) - 3rem);
    margin: 1.5rem;
    background-color: slategray;
    color: black;
   }
   img{
    width: 100%;
    height: 100%;
   }
</style>