<script>
import axios from 'axios';
import { store } from "../store.js";
export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            let indirizzo= ` https://api.openbrewerydb.org/v1/breweries?by_country=austria&by_name=${this.store.AppSearch}&per_pag=10`
            // let indirizzo = `${this.store.url}&name=${this.store.searchBar}`
            
		    axios.get(indirizzo).then(r=>{
			  this.store.beers = r.data.name;				
		    });
            console.log("Cerca: ", this.store.searchBar);
            this.$emit("search")
        }
    },
}
</script>

<template>
    <div class="searchContainer">
        <input type="text" placeholder="search" v-model="store.searchBar"  @keyup.enter="$emit('search')">
        <button @click="search">search</button>
    </div>
</template>

<style scoped>
</style>