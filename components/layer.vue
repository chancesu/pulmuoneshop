<template>
  <div class="layer-notice" v-if="layerStaus">
    <a
        href="https://www.pulmuoneshop.co.kr/index.do"
        target="_blank"
        class="pulmuone-link"
    >풀무원샵</a>을
    Nuxt.js(vue 프레임워크)를 사용하여 클론 코딩한 사이트입니다.
    메인과 검색 페이지를 구현하였으며 프론트엔드 영역만 구현되어있습니다.
    <a
        class="btn-site"
        href="https://chancesu-84e31.web.app"
        target="_blank"
    >포트폴리오 보러가기</a>
    <button
        class="layer-close"
        type="button"
        @click="toggleLayer"
    >X</button>
  </div>
</template>

<script>
export default {
name: "layer.vue",
  data (){
    return{
      layerStaus : true
    }
  },
  methods :{
    toggleLayer (){
      this.layerStaus = !this.layerStaus;
    }
  }
}
</script>

<style lang="scss" scoped>
  .layer-notice{
    position:fixed;
    top:50px;
    right:10px;
    z-index: 101;
    max-width: 300px;
    padding:30px 20px 10px;
    background: #fff;
    border:2px solid #619f10;
    font-size:14px;
    .pulmuone-link{
      color:#619f10;
      text-decoration: underline;
    }
    .btn-site{
      display: block;
      width:100px;
      border-radius:5px;
      margin:10px auto;
      padding:10px;
      background: #619f10;
      color:#fff;
      text-align: center;
      font-size:10px;
    }
    .layer-close{
      position: absolute;
      top:0;
      right:0;
      display: block;
      width:30px;
      height: 30px;
      background: white;
    }
  }
  @media screen and (max-width: 850px) {

    .layer-notice{
      top:auto;
      bottom:10px;
    }
  }
</style>