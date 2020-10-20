<template>
<div class="photographers">
    
    <div v-bind:key="photographer.id" v-for="photographer in photographers">
        <Photographer v-bind:photographer="photographer"/>
    </div>
</div>
</template>

<script>
import Photographer from '@/components/Photographer.vue';

export default {
    name: "Photographers",
    props: ["photographers"],
    components: {
        Photographer
    }
    
}
</script>

<style scoped>

    .photographers {
        text-align: left;
    }

</style>