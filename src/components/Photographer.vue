<template>
    <div class="photographer">
        <h2>{{photographer.name}}</h2>
        <h3>{{photographer.city}}, {{photographer.state}}</h3>
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
        background-color:ghostwhite;
        margin-top: 1%;
        margin-bottom: 1%;
    }



</style>