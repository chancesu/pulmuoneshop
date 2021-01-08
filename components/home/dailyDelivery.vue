<template>
  <div class="daily-delivery container">
    <h3 class="h3-title">일일배달</h3>
    <template v-for="(item, index) in deliveryItems">
    <a
      class="daily-item"
      :key="index"
      :href="item.LINK_URL"
      :style="{
        background: `url('${item.FILE_PATH}') no-repeat 50% 50%`
      }"
    >
      {{item.DISP_DESC}}
    </a>
    </template>
  </div>
</template>

<script>
import { createNamespacedHelpers  } from 'vuex'

const dealsHelper = createNamespacedHelpers('deals')
export default {
  name: "dailyDelivery",
  computed : {
    ...dealsHelper.mapGetters(["deliveryItems"])
  }
}
</script>

<style lang="scss" scoped>
.daily-delivery{
  padding:54px 0;
  .daily-item{
    overflow: hidden;
    display: inline-block;
    width:330px;
    height:460px;
    text-indent: -1000em;
    &+.daily-item{
      margin-left:15px;
    }
  }
}
@media screen and (max-width: 1020px) {
  .daily-delivery{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .h3-title{
      width: 100%;
      flex:none;
    }
    .daily-item{
      display: block;
      margin:0 auto;
      &+.daily-item{
        margin:10px auto;
      }
    }
  }
}
</style>