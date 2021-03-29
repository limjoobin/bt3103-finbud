<template>
  <div>
    <app-header></app-header>
    <body-1></body-1>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import budCalContent from './budCalContent.vue'
import Footer from './Footer.vue'

export default {
  components: {
    'app-header':Header,
    'body-1': budCalContent,
    'app-footer': Footer,
  }
}
</script>

<style>

br{
  background-color: A9D6FF;
}
</style>