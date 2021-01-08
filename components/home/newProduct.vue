<template>
  <div class="new-product">
    <div class="container">
      <h3 class="h3-title">새로 출시된 신상품</h3>
      <div
          class="product-view"
          :style="{
          backgroundImage: `url(${bgItem.FILE_PATH})`
        }"
      >
        <div class="item-list">
          <template v-for="(item, index) in newItemsList">
            <productItem
                :key="index"
                :good-icon="false"
                :goods-no="item.goodsNo"
                :name="item.GOODS_NM"
                :disp-name="item.DISP_GOODS_NM"
                :real-price="item.NORMAL_PRICE"
                :price="item.REAL_PRICE"
                :sale-rate="item.SALE_RATE"
                :dailly-ship-y-n="item.delvIconFastYn"
                :free-ship-y-n="item.delvIconFreeYn"
                :direct-ship-y-n="item.delvIconDirectYn"
                :thumbnail-url="item.M_IMG_FILE_NM"
                :thumbnail-size="240"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers  } from 'vuex'

const dealsHelper = createNamespacedHelpers('deals')
import productItem from "@/productItem"
export default {
  name: "newProduct",
  components:{
    productItem
  },
  computed : {
    ...dealsHelper.mapGetters(["newItems","newItemsList"]),
    bgItem (){
      return this.newItems && this.newItems.length ?  this.newItems[1] : {};
    },
    titleItem(){
      return this.newItems && this.newItems.length ?  this.newItems[0] : {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .new-product{
    background:#f1f3ed;
    padding:85px 0;
    .product-view{
      position: relative;
      min-height:915px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      .item-list{
        position: absolute;
        top:18px;
        right:18px;
        width: 510px;
        background: #fff;
        .product-item{
          padding:10px;
          &:nth-child(1),
          &:nth-child(3){
            margin-left:0;
          }
          &:nth-child(1),
          &:nth-child(2){
            margin-top:0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 850px) {
    .new-product {
      .product-view {
        background-position: 0 0;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .new-product{
      padding:10px;
      .product-view{
        width: 100%;
        background-repeat: repeat;
        background-size: 140%;
        background-position: 0 0;
        padding-top:100%;
        .item-list{
          justify-content: center;
          position: relative;
          left:0;
          width:100%;
          margin:0 auto;
        }
      }
    }
  }
</style>