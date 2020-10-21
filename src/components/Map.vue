<template>
  <GoogleMap
    style="height: 50vh; margin: 2rem 0;"
    :center="{ lat: 40.2338438, lng: -111.6585337 }"
    :zoom="8"
    :clickActive="true"
    :moveActive="false"
    :markers="markers"
  />
</template>

<script>
export default {
  props: {
    photographers: Array,
  },
  data() {
    return {
      markers: [],
      // markers: this.photographers,
      //   markers: this.photographers.map((photographer) => {
      //     let marker = {};
      //     marker[photographer.lat] = photographer.value;
      //     return marker;
      //   }),
    };
  },
  methods: {},
  mounted() {
    // this.photographers.map((photographer) => {
    //   console.log("photographer:", photographer);
    //   if (photographer.lat) {
    //     let marker = {};
    //     marker.lat = photographer.lat;
    //     marker.lng = photographer.lng;
    //     marker.title = photographer.title;
    //     return marker;
    //   } else {
    //     return null;
    //   }
    // });

    console.log("map component");
    console.log(this.photographers);
  },
};
</script>

<style scoped>
/* div {
    position: absolute;
    left: 0;
    top: 0;
} */
</style>
