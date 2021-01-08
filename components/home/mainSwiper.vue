<template>
  <div class="main-banner">
    <h3 class="a11y">메인배너</h3>
    <swiper ref="bannerSwiper">
      <swiper-slide v-for="(item, index) in mainGallery" :key="`banner-${index}`">
        <a
            :href="item.LINK_URL"
            :style="{
              background: `url('/images/display/${item.FILE_PATH_BG}') no-repeat 50% 50%`,
              backgroundSize:'cover'
            }"
            target="_blank"
        >
          <img :src="require('@images/display/w_big_banner_default.png')" :alt="item.DISP_DESC"/>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { createNamespacedHelpers  } from 'vuex'

const dealsHelper = createNamespacedHelpers('deals')
export default {
  name: "mainSwiper",
  computed : {
    ...dealsHelper.mapGetters(["mainGallery"])
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchMainGallery()
      }
    }
  },
  methods: {
    ...dealsHelper.mapActions(['fetchMainGallery'])
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/variables.scss";
.main-banner{
  min-height:300px;
.swiper-container{
  padding-bottom:25px;
  a{
    display: block;
  }
}
.swiper-pagination-bullets{
  bottom:0px;
}
.swiper-pagination-bullet{
  background-color: $basic;
  opacity: 0.3;
}
}
@media screen and (max-width: 920px) {
  .main-banner {
    min-height: 150px;
    .swiper-container {
      a img {
        width: 100%;
      }
    }
  }
}
</style>