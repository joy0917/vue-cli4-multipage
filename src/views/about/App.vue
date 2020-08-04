<template>
  <div id="app">
    <app-header></app-header>
    <p>关于我们</p>
    <router-link to="/ccc">C页</router-link>
    <router-link to="/ddd">D页</router-link>
    <router-view/>
  </div>
</template>

<script>
import appHeader from '@/components/app-header'
export default {
  data () {
    return {}
  },
  components: {
    appHeader
  }
}
</script>

<style lang="less" scoped>

</style>
