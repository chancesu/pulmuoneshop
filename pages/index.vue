<template>
  <div class="main-container">
    <h2 class="a11y">메인 컨텐츠</h2>
    <mainSwiper/>
    <goodDeal/>
    <bestProduct/>
    <halfBanner/>
    <newProduct/>
    <dailyDelivery/>
    <mainEvent/>
    <layerNotice/>
  </div>
</template>

<script>
import mainSwiper from '@/home/mainSwiper';
import goodDeal from "@/home/goodDeal";
import bestProduct from "@/home/bestProduct";
import halfBanner from "@/home/halfBanner";
import newProduct from "@/home/newProduct";
import dailyDelivery from "@/home/dailyDelivery";
import mainEvent from "@/home/mainEvent";
import layerNotice from "@/layer"
import { createNamespacedHelpers  } from 'vuex'

const dealsHelper = createNamespacedHelpers('deals')
export default {
  components:{
    mainSwiper,
    goodDeal,
    bestProduct,
    halfBanner,
    newProduct,
    dailyDelivery,
    mainEvent,
    layerNotice
  },
  mounted() {
    this.fetchContent();
  },
  methods: {
    ...dealsHelper.mapActions(['fetchContent'])
  }
}
</script>

<style>
.main-container {
}
.container{

}
</style>
