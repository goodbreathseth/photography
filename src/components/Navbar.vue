<template>
  <nav>
    <router-link to="/" style="display:flex;"><img src="../assets/Logo.svg"/><h3>ConnectMe</h3></router-link>
    <router-link to="/profile"><h3>Join as a Photographer</h3></router-link>
    <router-link to="/contact"><h3>About Us</h3></router-link>
  </nav>
</template>

<style scoped>
nav {
    background-color: white;
    box-shadow: 0 1px 4px 0 lavender;
    padding: .5rem;
    display: flex;
    justify-content: space-around;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 2;
}

h3 {
}

div {
  display: flex;
  justify-content: flex-start;
}

a:link {
  text-decoration: none;
  color: #000099;
}

a:visited {
  color: #102285;
}

img {
  width: 25%;
  height: auto;
  margin-right: .5rem;
}

</style>
