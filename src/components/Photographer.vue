<template>
    <div class="photographer">
        <h2>{{photographer.fName}} {{photographer.lName}}</h2>
        <h3>{{photographer.city}}, {{photographer.state}}</h3>
        <p>{{photographer.bio}}</p>
        <h3>Email: {{photographer.email}}</h3>
        <h3>Specialty: {{photographer.specialty}}</h3>
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
        background-color:white;
        margin-top: 1%;
        margin-bottom: 2%;
        color: #102285
    }
</style>