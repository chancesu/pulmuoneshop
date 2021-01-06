<template>
  <div
      class="half-banner"
      :style="{
        backgroundImage: `url(${halfBanner.FILE_PATH})`
      }"
  >
    <h3 class="a11y">중간배너</h3>
    <a
        :href="halfBanner.LINK_URL"
        class="container"
        traget="_blank"
    >{{halfBanner.TAB_NM}}</a>
  </div>
</template>

<script>
import { createNamespacedHelpers  } from 'vuex'

const dealsHelper = createNamespacedHelpers('deals')
export default {
name: "halfBanner",
  computed : {
    ...dealsHelper.mapGetters(["halfBanner"])
  },
}
</script>

<style lang="scss" scoped>
  .half-banner{
    min-height:110px;
    background-color: #6FC500;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    a{
      overflow: hidden;
      display: block;
      min-height:110px;
      text-indent: -1000em;
    }
  }
</style>