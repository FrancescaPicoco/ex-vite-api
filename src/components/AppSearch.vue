<script>
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