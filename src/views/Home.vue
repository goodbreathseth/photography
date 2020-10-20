<template>
<div class="homepage">
    <h1>Connect Me</h1>
    <h3>Find a Photographer Now!</h3>
    <Photographers v-bind:photographers="photographers"/>
</div>
</template>

<script>
import Photographers from '@/components/Photographers.vue'


export default {
    components: {
        Photographers
    },
    data() {
        return {
            photographers: [
                {
                    id: 1,
                    name: "Andrew Jones",
                    location: "Salt Lake City, Utah",
                    bio: "...",
                    email: "fake1@gmail.com",
                    specialty: "Weddings"
                },
                {
                    id: 2,
                    name: "Sarah Hemsworth",
                    location: "Farmington, Utah",
                    bio: "...",
                    email: "fake2@gmail.com",
                    specialty: "Family"
                },
                {
                    id: 3,
                    name: "Josh Holland",
                    location: "San Clamente, California",
                    bio: "...",
                    email: "fake3@gmail.com",
                    specialty: "Weddings"
                },
            ]
        }

    }

}
</script>

<style scoped>

    .homepage {
        margin: 5%;
    }

    h1 {
        text-align: left;
    }

    h3 {
        text-align: left;
    }


</style>