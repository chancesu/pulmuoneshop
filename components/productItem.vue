<template>
  <div
    class="product-item"
    :style="{
      width: `${thumbnailSize}px`
    }"
  >
    <div class="product-image">
      <strong class="icon-good" v-if="goodIcon">심콩</strong>
      <img
          :src="thumbnailUrl"
          :alt="name"
          :style="{
            width: `${thumbnailSize}px`,
            height:`${thumbnailSize}px`
          }"
      >
      <button type="button" class="btn-cart">장바구니 바로 넣기</button>
    </div>
    <a href="#none" class="product-detail">
      <strong class="product-title">
        {{name}}
      </strong>
      <p class="product-price">
        <em class="sale-rate">{{saleRate}}%</em>
        <strong class="price"><span>{{priceText(price)}}</span>원</strong>
        <del>{{priceText(realPrice)}}</del>
      </p>
      <p class="product-description">
        {{dispName}}
      </p>
      <p class="product-label">
        <span v-if="freeShipText" class="label">{{freeShipText}}</span>
        <span v-if="daillyShipText" class="label">{{daillyShipText}}</span>
        <span v-if="directShipText" class="label">{{directShipText}}</span>
      </p>
    </a>

  </div>
</template>

<script>
export default {
  name: "productList",
  props: {
    goodIcon: {type: Boolean, default: false},
    goodsNo: { type: Number, default: -1 },
    name: { type: String, default: 'UNKNOWN NAME'},
    dispName: { type: String, default: 'UNKNOWN DISP NAME'},
    saleRate: { type: Number, default: 0},
    price: { type: Number, default: 9999999 },
    realPrice: { type: Number, default: 9999999},
    freeShipYN: { type: String, default: 'N'},
    daillyShipYN: { type: String, default: 'N'},
    directShipYN: { type: String, default: 'N'},
    thumbnailUrl: { type: String, default: ''},
    thumbnailSize: { type: Number, default: 240},
  },
  computed: {
    priceText() {
      return (value) => String(value).split('').reverse().map((c, index) => !(index % 3) && index > 0 ? `${c},` : c).reverse().join('')
    },
    freeShipText() {
      return this.freeShipYN === 'Y' ? '무료배송' : null
    },
    daillyShipText() {
      return this.daillyShipYN === 'Y' ? '일일배송' : null
    },
    directShipText() {
      return this.directShipYN === 'Y' ? '생산직송' : null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/variables.scss";
.product-item {
  min-height: 319px;
  margin-top:40px;
  &+.product-item {
    margin-left: 10px;
  }
  .product-image {
    position: relative;
    display: block;
    img{
      background: rgba(0,0,0,.4);
    }
    .icon-good{
      overflow: hidden;
      position: absolute;
      top:10px;
      left:10px;
      width:64px;
      height:64px;
      background:url("#{$images}/ico_heart191128.png") no-repeat 0 0;
      background-size: cover;
      text-indent: -1000em;
    }
    .btn-cart{
      overflow: hidden;
      position: absolute;
      bottom:17px;
      right:0;
      width:32px;
      height:32px;
      background:url("#{$images}/btn_prod_cart02.png") no-repeat 0 0;
      background-size: cover;
      text-indent: -1000em;
    }
  }
  a.product-detail {
    margin-top: 20px;
    .product-title {
      display: block;
      margin-top: 20px;
      padding-bottom: 5px;
      min-height: 47px;
      font-size: 15px;
      font-weight: 400;
      word-break: keep-all;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .sale-rate {
      margin-right: 5px;
      font-size: 14px;
      font-weight: 700;
      font-style: normal;
      color: #4ac912;
    }
    .price {
      font-weight: 500;
    }
    del {
      margin-left: 10px;
      color: #999;
      font-size: 12px;
    }
    .product-description {
      overflow: hidden;
      margin: 15px 0 5px 0;
      padding: 5px 0;
      border-top: rgb(235, 235, 235) 1px solid;
      font-size: 12px;
      color: #898989;
      text-overflow: ellipsis;
      white-space:nowrap;
      word-wrap:normal;
    }
    .product-label {
      .label {
        display: inline-block;
        min-width: 55px;
        border: 1px solid #4ac912;
        text-align: center;
        color: #4ac912;
        font-size: 13px;
      }
    }
  }
}
</style>