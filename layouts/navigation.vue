<template>
  <nav id="navigation">
    <h2 class="a11y">카테고리 리스트</h2>
    <div class="container">
      <a href="#none">베스트</a>
      <a href="#none">지금세일</a>
      <a href="#none">녹즙/일일배달</a>
      <a href="#none">브랜드샵</a>
      <a href="#none">기획전/이벤트</a>
      <div id="main-category" :class="{'active':categoryActive}">
        <button
            type="button"
            class="btn-category"
            @click="() => toggleCategroy()"
        >모든 카테코리</button>
        <ul class="category-list">
          <li>
            <a href="#none">로하스</a>
            <ul>
              <li>
                <a href="#none">무농약·유기농농산</a>
                <ul>
                  <li>
                    <a href="#none">과일·야채</a>
                  </li>
                  <li>
                    <a href="#none">건견과·버섯</a>
                  </li>
                  <li>
                    <a href="#none">곡류·가공품</a>
                  </li>
                  <li>
                    <a href="#none">저탄소인증식품</a>
                  </li>
                  <li>
                    <a href="#none">선물세트</a>
                  </li>
                  <li>
                    <a href="#none">무항생제·유기축산</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">무항생제·유기축산</a>
                <ul>
                  <li>
                    <a href="#none">소고기</a>
                  </li>
                  <li>
                    <a href="#none">돼지고기</a>
                  </li>
                  <li>
                    <a href="#none">닭·오리</a>
                  </li>
                  <li>
                    <a href="#none">달걀</a>
                  </li>
                  <li>
                    <a href="#none">가공식품</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">지속가능수산</a>
                <ul>
                  <li>
                    <a href="#none">ASC·MSC</a>
                  </li>
                  <li>
                    <a href="#none">유기·무항생제수산</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">동물복지</a>
                <ul>
                  <li>
                    <a href="#none">달걀·기타란</a>
                  </li>
                  <li>
                    <a href="#none">정육·양념육</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "navigation",
  data (){
    return{
      categoryActive: false
    }
  },
  methods:{
    toggleCategroy() {
      this.categoryActive = !this.categoryActive
    }
  }
}
</script>


<style lang="scss" scoped>
@import "./assets/variables.scss";
  #navigation{
    border: 1px solid $light-gray;
    border-width: 1px 0;
    .container{
      display: flex;
      box-sizing: border-box;
      position: relative;
      height:40px;
      padding-left:160px;
      text-align: right;
      a{
        flex:1;
        display: inline-block;
        font-size:17px;
        line-height: 40px;
        text-align: center;
        white-space: nowrap;
        &:hover{
          color:$hover;
          font-weight: 400;
        }
      }
      #main-category{
        position: absolute;
        top:0;
        left:0;
        width: 140px;
        height:40px;
        .btn-category{
          position: relative;
          background:$main-color;
          width: 140px;
          height:40px;
          color:$white;
          padding-right:20px;
          font-size: 13px;
          font-weight: 500;
          line-height:40px;
          &:before{
            content:"";
            position: absolute;
            top:14px;
            right:17px;
            display: block;
            width:16px;
            height:12px;
            border: 2px solid $white;
            border-width: 2px 0;
          }
          &:after{
            content:"";
            position: absolute;
            top:19px;
            right:17px;
            display: block;
            width:16px;
            height:0;
            border-top: 2px solid $white;
          }
        }
        a{
          font-size: 12px;
        }
        .category-list{
          display: none;
          position: absolute;
          top:40px;
          left:0;
          border:2px solid $main-color;
          text-align: left;
          li{
            a{
              display: block;
              box-sizing: border-box;
              width: 202px;
              height:40px;
              background: $white;
              line-height: 40px;
              padding:0 10px;
            }
            ul{
              display: none;
            }
            &:hover,
            &.active{
              ul{
                position: absolute;
                left:204px;
                top:-2px;
                border:2px solid $main-color;
              }
              >ul{
                display: block;
                a{
                  background: $main-color;
                  color:$white;
                }
                li>ul{
                  a{
                    background: $white;
                    color:$basic;
                  }
                }
              }
            }
          }
        }
        &.active{
          .category-list{
            display: block;
          }
        }
      }
    }
  }

@media screen and (max-width: 769px){
  #navigation{
    .container a{
      font-size:2vw;
    }
    #main-category{
      .btn-category{
        font-size:2vw;
      }
    }
  }
}
</style>
