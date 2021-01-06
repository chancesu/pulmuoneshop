<template>
  <div class="new-product container">
    <h3 class="h3-title">새로 출시된 신상품</h3>
    {{newItems}}
    <div
        class="product-view"
        :style="{
        backgroundImage: `url(${newItems[1].FILE_PATH})`
      }"
    >
dsfd
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers  } from 'vuex'

const dealsHelper = createNamespacedHelpers('deals')
export default {
  name: "newProduct",
  computed : {
    ...dealsHelper.mapGetters(["newItems"])
  }
}
</script>

<style lang="scss" scoped>
  .new-product{
    background:#f1f3ed;
    padding:85px 54px;
    .product-view{
      min-height:915px;
    }
  }
</style>