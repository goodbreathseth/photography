<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

h1 {
  color: #102285;
  font-weight: 500;
}

h2 {
  color: #102285;
  font-weight: 400;
}

h3 {
  color: #102285;
  font-weight: 300;
}

button {
  cursor: pointer;
}

</style>
