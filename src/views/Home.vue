<template>
  <div class="homepage">
    <h1>ConnectMe!</h1>
    <h2>Find Photographers Near Me</h2>

    <Map :photographers="photographers" />

    <form class="searchForm" action="/">
      <p><strong>Filter:</strong></p>
      <label for="city">City:</label>
      <input type="text" id="city" name="city" />
      <label for="state" style="margin-left: 20px;">State:</label>
      <input type="text" id="state" name="state" />
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

.searchForm {
  display: flex;
  padding: 2%;
  padding-left: 0;
  align-content: center;
  height: 2rem;
}

label {
  color: #102285;
  align-self: center;
  margin: 0 8px;
}

input[type="text"] {
  border-radius: 8px;
  border: none;
  box-shadow: 0 1px 4px 0 lavender;
}

input[type="text"] {
  outline: none;
  color: #081144;
}

input[type="submit"] {
  color: white;
  background-color: #081144;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
}

p {
  align-self: center;
  margin-right: 8px;
}
</style>
