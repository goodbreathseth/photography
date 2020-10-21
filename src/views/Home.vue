<template>
  <div class="homepage">
    <h1>ConnectMe!</h1>
    <h2>Find a Photographer Now!</h2>

    <form class="searchForm" action="/">
        <label for="city">City:</label>
        <input type="text" id="city" name="city"><br><br>
        <label for="state" style="margin-left: 20px;">State:</label>
        <input type="text" id="state" name="state"><br><br>
        <input type="submit" style="margin-left: 20px;" value="Submit">
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

            const urlParams = new URLSearchParams(window.location.search);
            const stateParam = urlParams.get('state');
            const cityParam = urlParams.get('city');

            document.querySelector("#city").value = cityParam;
            document.querySelector("#state").value = stateParam;


            if (stateParam == null && cityParam == null) {
                this.photographers.push(doc.data());
            }
            else if (stateParam == "" && cityParam == "") {
                this.photographers.push(doc.data());
            }
            else if (stateParam != "" && cityParam == "") {
                if (doc.data().state != null && stateParam.toLowerCase() == doc.data().state.toLowerCase()){
                    this.photographers.push(doc.data());
                }
            }
            else if (stateParam == "" && cityParam != "") {
                if (doc.data().city != null && cityParam.toLowerCase() == doc.data().city.toLowerCase()){
                    this.photographers.push(doc.data());
                }
            }
            else if (stateParam != "" && cityParam != "") {
                if (doc.data().state != null && stateParam.toLowerCase() == doc.data().state.toLowerCase() &&
                    doc.data().city != null && cityParam.toLowerCase() == doc.data().city.toLowerCase()) {
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
}

h1 {
  text-align: left;
}

h2 {
  text-align: left;
}

.searchForm {
    display: flex;
    flex-direction: row;
    height: 24px;
}

input.searchForm {
    padding: 10%;
}
</style>
