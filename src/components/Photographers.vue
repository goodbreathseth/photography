<template>
<div class="photographers">
    
    <div v-bind:key="photographer.id" v-for="photographer in photographers">
        <h2> {{photographer.name}} </h2>
    </div>
</div>
</template>

<script>
export default {
    name: "Photographers",
    props: ["photographers"]
    
}
</script>

<style scoped>

    .photographers {
        background-color: rgb(182, 176, 176);
        text-align: left;
    }

</style>