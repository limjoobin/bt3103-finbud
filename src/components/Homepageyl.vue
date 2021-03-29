<template>
  <div>
      <Welcome></Welcome>
      <Service></Service>
      <Reviews></Reviews>
      <Community></Community>

  </div>
</template>

<script>
import Welcome from './welcome.vue';
import Reviews from './reviews.vue';
import Community from './community.vue';
import Service from './Service.vue';

export default {
  components: {
    Service,
    Community,
    Welcome,
    Reviews,
  },
};
</script>

<style scoped>
</style>