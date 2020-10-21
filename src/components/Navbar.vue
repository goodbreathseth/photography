<template>
  <nav>
    <div>
      <img src="../assets/Logo.svg"/>
      <router-link to="/"><h3>ConnectMe</h3></router-link>
    </div>
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
  color: #000099;
}

img {
  width: 25%;
  height: auto;
  margin-right: .5rem;
}

</style>
