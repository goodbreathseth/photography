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
        componentKey: 0,
    };
  },
  methods: {
      update() {
          this.componentKey++;
        //   this.$forceUpdate();
      }
  },
};
</script>

<style scoped>
</style>
