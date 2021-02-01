<template>
  <main class="container">
    <app-header></app-header>
    <app-resturant-info :datasource="foodData"></app-resturant-info>
  </main>
</template>

<script>
import { mapState } from 'vuex';
import AppHeader from '../components/AppHeader.vue'
import AppResturantInfo from '../components/AppResturantInfo.vue'
export default {
  components: { AppHeader, AppResturantInfo },
  computed: {
    ...mapState([
      'foodData',
    ])
  },
}
</script>

<style>

</style>
