<template>
  <div class="search-wrap container">
    <p class="search-result">
      <strong>'{{searchKeyword}}'</strong> 검색결과
    </p>

    <p class="hello">
      채용공고를 보고 <span>Vue로 풀무원 사이트를 클론 코딩</span> 해보았습니다.<br>
      짧은 시간이라 많은 걸 구현하지 못하였지만 작업을 할 수 있는 가능성을 보여드리기 위해 제작하였습니다.<br>
      잘 부탁 드립니다.<br>
      <a
          class="btn-site"
          href="https://chancesu-84e31.web.app"
          target="_blank"
      >포트폴리오 보러가기</a>
    </p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const homeModule = createNamespacedHelpers("main");
export default {
name: "search",
  computed : {
    ...homeModule.mapGetters(["searchKeyword"])
  },
}
</script>

<style lang="scss" scoped>
@import "./assets/variables.scss";
  .search-wrap{
    padding:50px 0;
    .search-result{
      margin-bottom: 40px;
      font-size:40px;
      text-align: center;
      strong{
        color:$main-color;
      }
    }
    .hello{
      max-width:600px;
      font-size: 20px;
      margin:0 auto;
      span{
        color:$hover;
        font-weight: bold;
      }
      a.btn-site{
        display: block;
        width:200px;
        border-radius:5px;
        margin:10px auto;
        padding:10px;
        background: $category;
        color:$white;
        text-align: center;
      }
    }
  }
</style>