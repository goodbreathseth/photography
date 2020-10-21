<template>
  <GoogleMap
    style="height: 50vh; margin: 2rem 0;"
    :center="{ lat: 40.2338438, lng: -111.6585337 }"
    :zoom="8"
    :clickActive="true"
    :moveActive="false"
    :markers="Object.values(photographers)"
  />
</template>

<script>
export default {
  props: {
    photographers: Array,
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
/* div {
    position: absolute;
    left: 0;
    top: 0;
} */
</style>
