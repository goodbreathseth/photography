<template>
  <div class="homepage">
    <h1>Connect Me</h1>
    <h3>Find a Photographer Now!</h3>
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
  mounted() {
      this.getData();
  },
  methods: {
    async getData() {
      this.db.collection("users").get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.photographers.push(doc.data());
          });
        });
    },
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
</style>
