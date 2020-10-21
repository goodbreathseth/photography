<template>
  <div class="homepage">
    <h1>ConnectMe!</h1>
    <h2>Find a Photographer Now!</h2>

    <Map :photographers="photographers" />

    <form class="searchForm" action="/">
      <label for="city">City:</label>
      <input type="text" id="city" name="city" /><br /><br />
      <label for="state" style="margin-left: 20px;">State:</label>
      <input type="text" id="state" name="state" /><br /><br />
      <input type="submit" style="margin-left: 20px;" value="Submit" />
    </form>

    <Photographers v-bind:photographers="photographers" />
  </div>
</template>

<script>
import firebase from "@/firebaseConfig";
import Photographers from "@/components/Photographers.vue";
import Map from "@/components/Map.vue";

export default {
  components: {
    Photographers,
    Map,
  },
  data() {
    return {
      db: firebase.firestore(),
      photographers: [],
    };
  },
  async created() {
    this.db
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const urlParams = new URLSearchParams(window.location.search);
          const stateParam = urlParams.get("state");
          const cityParam = urlParams.get("city");

          document.querySelector("#city").value = cityParam;
          document.querySelector("#state").value = stateParam;

          if (stateParam == null && cityParam == null) {
            this.photographers.push(doc.data());
          } else if (stateParam == "" && cityParam == "") {
            this.photographers.push(doc.data());
          } else if (stateParam != "" && cityParam == "") {
            if (
              doc.data().state != null &&
              stateParam.toLowerCase() == doc.data().state.toLowerCase()
            ) {
              this.photographers.push(doc.data());
            }
          } else if (stateParam == "" && cityParam != "") {
            if (
              doc.data().city != null &&
              cityParam.toLowerCase() == doc.data().city.toLowerCase()
            ) {
              this.photographers.push(doc.data());
            }
          } else if (stateParam != "" && cityParam != "") {
            if (
              doc.data().state != null &&
              stateParam.toLowerCase() == doc.data().state.toLowerCase() &&
              doc.data().city != null &&
              cityParam.toLowerCase() == doc.data().city.toLowerCase()
            ) {
              this.photographers.push(doc.data());
            }
          }
        });
      });
  },
};
</script>

<style scoped>
.homepage {
  margin: 5%;
  margin-top: 10%;
}

h1 {
  text-align: left;
  color: #102285
}

h2 {
  text-align: left;
  color: #102285
}

.searchForm {
  display: flex;
  flex-direction: row;
  padding: 2%;
  padding-left: 0;
}

label {
  font-size: 28px;
  font-weight: bold;
  color: #102285
}

input#city, input#state {
  font-size: 20px;
}

input[type="submit"] {
  color: white;
  background-color: #081144;
  font-size: 1.5em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
}
</style>
