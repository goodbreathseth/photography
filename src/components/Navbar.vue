<template>
  <nav>
    <router-link to="/"><h3>ConnectMe</h3></router-link>
    <router-link to="/profile"><h3>Join as a Photographer</h3></router-link>
  </nav>
</template>

<style scoped>
nav {
    background-color: ghostwhite;
    padding: .5rem;
    display: flex;
    justify-content: space-around;
}

a {
  text-decoration: none;
}
</style>
