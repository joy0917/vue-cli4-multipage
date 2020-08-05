<template>
  <div>
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '@/components/app-header'
import appFooter from '@/components/app-footer'
export default {
  data () {
    return {}
  },
  components: {
    appHeader,
    appFooter
  }
}
</script>

<style lang="less" scoped>

</style>
