<script>
export default{
    props:["menulinks"]
}
</script>

<template>
        <a href="menulinks.address"> {{ menulinks.label }}</a>     
</template>

<style scoped>
a{
    margin: 0.3rem;
}
</style>