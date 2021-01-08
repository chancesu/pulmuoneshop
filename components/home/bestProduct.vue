<template>
  <div class="best-product">
    <div class="container">
      <h3 class="h3-title">베스트 TOP 10</h3>
      <div class="item-list">
        <template v-for="(item, index) in bestItems">
          <productItem
              :key="index"
              :good-icon="false"
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
              :thumbnail-size="194"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers  } from 'vuex'

const dealsHelper = createNamespacedHelpers('deals')
import productItem from "@/productItem"
export default {
  name: "bestProduct",
  components:{
    productItem
  },
  computed: {
    ...dealsHelper.mapGetters(['bestItems', 'pagination'])
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchBest({ page: 1, pageSize: 10 })
      }
    }
  },
  methods: {
    ...dealsHelper.mapActions(['fetchBest'])
  }
}
</script>

<style lang="scss" scoped>
  .best-product{
    background:#f1f3ed;
    padding:45px 0;
    .h3-title{
      font-weight: bold;
    }
    .item-list{
      .product-item{
        &:nth-child(1),
        &:nth-child(6){
          margin-left:0;
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5){
          margin-top:0;
        }
      }
    }
  }
  @media screen and (max-width: 1000px){
    .best-product{
      .item-list {
        justify-content: center;
        width: 90%;
        margin:0 auto;
        .product-item {
          &:nth-child(n) {
            margin: 10px;
          }
        }
      }
    }
  }
</style>