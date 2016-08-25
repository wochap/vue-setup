<template>
  <header>
    AppHeader
    <nav>
      <ul>
        <li>
          <a v-link="{name: 'Home', exact: true}">Home</a>
        </li>
        <li>
          <a v-link="{name: 'NotFound'}">NotFound</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="scss">
</style>
