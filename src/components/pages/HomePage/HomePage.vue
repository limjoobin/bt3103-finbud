<template>
  <div>
      <Welcome></Welcome>
      <Service></Service>
      <Reviews></Reviews>
      <HomePageCommunity></HomePageCommunity>

  </div>
</template>

<script>
import Welcome from './Welcome.vue';
import Reviews from './Reviews.vue';
import HomePageCommunity from './HomePageCommunity.vue';
import Service from './Service.vue';

export default {
  components: {
    Service,
    HomePageCommunity,
    Welcome,
    Reviews,
  },
  created(){
    document.title="Home"
  }
};
</script>

<style scoped>
</style>