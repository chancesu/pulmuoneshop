<template>
  <div class="main-event container">
    <h3 class="h3-title">이벤트</h3>
    <template v-for="(item, index) in eventItems">
      <a
        class="event-item"
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
  name: "mainEvent",
  computed : {
    ...dealsHelper.mapGetters(["eventItems"])
  }
}
</script>

<style lang="scss" scoped>
.main-event{
  padding:54px 0;
  .event-item{
    overflow: hidden;
    display: inline-block;
    width:330px;
    height:336px;
    text-indent: -1000em;
    &+.event-item{
      margin-left:15px;
    }
    &:nth-child(5){
      margin-left:0;
    }
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6){
      margin-top:20px;
    }
  }
}
@media screen and (max-width: 1020px) {
  .main-event{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .h3-title{
      width: 100%;
      flex:none;
    }
    .event-item{
      display: block;
      &:nth-child(n){
        margin:10px;
      }
    }
  }
}
</style>