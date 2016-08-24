<template>
  <div>
    RootContainer
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'store'

  export default {
    name: 'RootContainer',
    store
  }
</script>

<style lang="scss">
</style>
