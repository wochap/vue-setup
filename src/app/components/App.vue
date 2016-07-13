<template>
  <div>
    App
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'store'

  export default {
    name: 'App',
    store
  }
</script>

<style lang="scss">

</style>
