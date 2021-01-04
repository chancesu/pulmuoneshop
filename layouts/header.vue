<template>
  <header id="header">
    <div class="container header-wrap">
      <h1 class="brand-bi">풀무원 샵</h1>
      <div class="util-menu">
        <strong>이수진</strong>님
        <a href="#none">로그아웃</a>
        <a href="#none">주문/배송</a>
        <a href="#none">MY풀무원</a>
        <a href="#none">장바구니</a>
      </div>
      <form action="" id="search-wrap">
        <input type="text" v-model="searchKeyword">
        <button
            class="btn-search"
            @click="() => onClickSearch(this.searchKeyword)"
         >검색</button>
      </form>
    </div>
    <navigation/>
  </header>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const homeModule = createNamespacedHelpers("main");

import navigation from "./navigation"
export default {
name: "header.vue",
  components: {
    navigation
  },
  data(){
    return{
      searchKeyword: ""
    }
  },
  mounted() {
    console.log(this.updateSearchKeyword())
  },
  methods:{
    ...homeModule.mapActions(["updateSearchKeyword"]),
    onClickSearch(keyword) {
      this.updateSearchKeyword(`${keyword}`);
      // nextTick is logic after step.
      this.$nextTick(() => {
        this.searchKeyword = "";
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/variables.scss";
  #header{
    padding:17px 0;
    box-sizing: border-box;
    .container{
      position: relative;
    }
    .header-wrap{
      height:83px;
    }
    h1.brand-bi{
      overflow: hidden;
      width:81px;
      height:49px;
      background:url("https://www.pulmuoneshop.co.kr/front/include/img/logo2.png") no-repeat center center;
      text-indent:-1000em;
      font-size:0;
      line-height:9;
    }
    .util-menu{
      position: absolute;
      top:0;
      right:0;
      font-size:12px;
      a{
        display: inline-block;
        padding-left:5px;
        color:$basic-light;
        font-family: 'Nanum Gothic', sans-serif;
        &:first-child{
          padding-left:0;
        }
        &:hover{
          text-decoration: underline;
        }
      }
    }
    #search-wrap{
      position: absolute;
      top:30px;
      left:50%;
      width:365px;
      height:36px;
      margin-left:-184px;
      border-bottom:2px solid $main-color;
      input[type="text"]{
        width:322px;
        height:31px;
        line-height: 31px;
        border-color:transparent;
        background:transparent;
        outline: 0;
      }
      .btn-search{
        overflow: hidden;
        width:29px;
        height:29px;
        background:url("#{$images}/btn_sch_58.png");
        background-size: cover;
        text-indent: -1000em;
      }
    }
  }
</style>