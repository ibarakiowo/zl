<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="@/assets/css/base.css"></style>
<style lang="scss" scoped>
  #app {
    height: calc(100vh);
  }
</style>
