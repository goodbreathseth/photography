<template>
    <div class="photographer">
        <h2>{{photographer.fName}} {{photographer.lName}}</h2>
        <h3>{{photographer.city}}, {{photographer.state}}</h3>
        <p>{{photographer.bio}}</p>
        <p>Email: <strong>{{photographer.email}}</strong></p>
        <p>Specialty: {{photographer.specialty}}</p>
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
        padding: .5rem 2rem;
        background-color:white;
        margin-top: 1%;
        margin-bottom: 2%;
        color: #102285
    }
</style>