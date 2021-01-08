<template>
  <div class="good-deal container">
    <h3 class="h3-title">
      <img :src="require('@images/ani_txt1001.gif')" alt="심콩특가">
      놓칠까봐 심장이 콩콩! 심콩특가
    </h3>
    <div class="item-list">
      <template v-for="(item, index) in dealItems">
        <productItem
          :key="index"
          :good-icon="true"
          :goods-no="item.goodsNo"
          :name="item.goodsNm"
          :disp-name="item.dispGoodsNm"
          :real-price="item.normalPrice"
          :price="item.realSalePrice"
          :sale-rate="item.displayRealRate"
          :dailly-ship-y-n="item.delvIconFastYn"
          :free-ship-y-n="item.delvIconFreeYn"
          :direct-ship-y-n="item.delvIconDirectYn"
          :thumbnail-url="item.mediumImagePath"
          :thumbnail-size="240"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers  } from 'vuex'

const dealsHelper = createNamespacedHelpers('deals')
import productItem from "@/productItem"
export default {
name: "good-deal",
  components:{
    productItem
  },
  computed: {
    ...dealsHelper.mapGetters(['dealItems', 'pagination'])
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchDeals({ page: 1, pageSize: 10 })
      }
    }
  },
  methods: {
    ...dealsHelper.mapActions(['fetchDeals'])
  }
}
</script>

<style lang="scss" scoped>
  .good-deal{
    padding:45px 0;
    .item-list{
    .product-item{
    &:nth-child(1),
    &:nth-child(5){
       margin-left:0;
     }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4){
        margin-top:0;
      }
    }
  }
}

@media screen and (max-width: 990px){
  .item-list {
    width: 80%;
    margin:0 auto;
    .product-item {
      &:nth-child(n) {
        margin: 10px;
      }
    }
  }
}
</style>