<template>
    <div class="photographer">
        <div v-html="photographer.infoWindow"></div>
        <div>
            <h2>{{photographer.fName}} {{photographer.lName}}</h2>
            <h3>{{photographer.city}}, {{photographer.state}}</h3>
            <p>{{photographer.bio}}</p>
            <p>Email: <strong>{{photographer.email}}</strong></p>
            <p>Specialty: {{photographer.specialty}}</p>
        </div>
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
        padding: 1rem 2rem;
        background-color:white;
        margin-top: 1%;
        margin-bottom: 2%;
        color: #102285;
        box-shadow: 0 1px 4px 0 lavender;
        border-radius: 8px;
        display: flex;
        gap: 2rem;
    }

    .photographer > :first-child > :first-child {
        border-radius: 8px;
    }

    .photographer > :first-child > :not(:first-child) {
        display: none;
    }
</style>