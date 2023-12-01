<script>

import AppNavbar from './AppNavbar.vue';
export default{
    components:{
    AppNavbar,
},
    nome :"Header",
    data(){
        return{
            links : [
                {
                    label: "POLONIA",
                    address: "#"
                },
                {
                    label: "AUSTRIA",
                    address: "#"
                },
                {
                    label: "SCOZIA",
                    address: "#"
                },
                {
                    label: "NORVEGIA",
                    address: "#"
                },
                {
                    label: "LONDRA",
                    address: "#"
                },
            ],
            logo : "LOGO" 

        }
    },
}
</script>

<template>
    <header>
        <div id="header-cont">
            <section>
               <img :src="this.logo" alt="logo">
               <div class="navbar-cont">
                  <AppNavbar v-for="link in links" href="link.address" :menulinks="link"/>
               </div>          
            </section>
        </div>   
    </header>    
</template>

<style scoped>
header{
    background-color: burlywood;
}
#header-cont{
    width: 80vw;
    margin-right: auto;
    margin-left: auto;
}
.navbar-cont{
    display: flex;
}
section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
}
img{
    width: 60px;
    height: 60px;
}
</style>