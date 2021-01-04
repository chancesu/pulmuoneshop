<template>
  <div class="main-container">
    <swiper ref="bannerSwiper">
      <swiper-slide v-for="(item, index) in items" :key="`banner-${index}`">
          <img :src="item.banner_img.url"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main-container {
}
.container{

}
</style>
