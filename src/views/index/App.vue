<template>
  <div id="app">
    <app-header></app-header>
    <p>首页</p>
    <router-link to="/aaa">A页</router-link>
    <router-link to="/bbb">B页</router-link>
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
