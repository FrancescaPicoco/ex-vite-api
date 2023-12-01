<script>
import AppHeader from './components/AppHeader.vue'
import AppSearch from './components/AppSearch.vue';
import Content from './components/Content.vue'
import axios from 'axios';
import { store } from "./store.js"

export default {
	components: {
		AppHeader,
		AppSearch,
		Content,
	},
	data() {
		return {
			store,
		}
	},
    mounted() {
		this.getBeers();
	},
    methods: {
		getBeers(){
			axios.get(this.store.url).then(r=>{
				console.log(r.data)
		        this.store.beers = r.data
			});
		},	
		getSearch(){
		    let indirizzo = `${this.store.url}&name=${this.store.searchBar}`
		    axios.get(indirizzo).then(r=>{
			  this.store.beers = r.data.name;				
		    });
		       console.log("Richiama: ", indirizzo);
		}		
	}
}
</script>

<template>
 <AppHeader/>
 <AppSearch @search="getSearch()"/>
 <Content />
</template>

<style scoped>

</style>
