<template>
    <div class="photographer">
        <h2>{{photographer.name}}</h2>
    </div>
</template>

<script>


export default {
    name: "Photographer",
    props: ["photographer"]
}
</script>

<style scoped>
    .photographer {
        padding: 5%;
        background-color: gray;
        margin: 1%;
    }



</style>