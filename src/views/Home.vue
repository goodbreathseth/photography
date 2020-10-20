<template>
  <div class="homepage">
    <h1>Connect Me</h1>
    <h3>Find a Photographer Now!</h3>
    
    <form class="searchForm" action="/action_page.php">
        <label for="city">City:</label>
        <input type="text" id="city" name="city"><br><br>
        <label for="state">State:</label>
        <input type="text" id="state" name="state"><br><br>
        <input type="submit" value="Submit">
    </form>
    

    <Photographers v-bind:photographers="photographers" />
  </div>
</template>

<script>
import firebase from "@/firebaseConfig";
import Photographers from "@/components/Photographers.vue";

export default {
  components: {
    Photographers,
  },
  data() {
    return {
      db: firebase.firestore(),
      photographers: [],
    };
  },
  async created() {
      this.db.collection("users").get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.photographers.push(doc.data());
          });
        });
  },
};
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

.searchForm {
    display: flex;
    flex-direction: row;
}

input.searchForm {
    padding: 10%;
}
</style>
