<template>
  <div>
    <app-header></app-header>
    <body-1></body-1>
  </div>
</template>

<script>
import Header from './Header.vue'
import budCalContent from './BudgetPlanning.vue'


export default {
  components: {
    'app-header':Header,
    'body-1': budCalContent,
  }
}
</script>

<style>

br{
  background-color: A9D6FF;
}
</style>