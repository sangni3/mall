<template>
  <div id="app">
    <router-view></router-view>
    <tabbarroot></tabbarroot>
  </div>
</template>

<script>
import tabbarroot from './components/contact/tabbarroot'
export default {
  name: 'App',
  components: {
    tabbarroot
  }
}
</script>

<style>

</style>
