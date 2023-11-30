<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Content from './components/Content.vue'
import axios from "axios";
import { store } from "./components/store.js"

export default {
	components: {
		AppHeader,
    AppFooter,
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
 <AppFooter />
</template>

<style scoped>

</style>
