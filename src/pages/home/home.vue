<template>
  <div>
    {{view}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      view: '主页面'
    }
  },
  created () {
    console.log('start')
    console.log(this.$axios)
  }
}
</script>

<style>
</style>
