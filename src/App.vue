<script>
import AppHeader from './components/AppHeader.vue'
import Content from './components/Content.vue'
import axios from "axios";
import { store } from "./store.js"

export default {
	components: {
		AppHeader,
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
      axios.get(this.store.url).then(r =>{
        console.log(r.data)
      });
    }
   }
}
</script>

<template>
 <AppHeader/>
 <Content />
</template>

<style scoped>

</style>
