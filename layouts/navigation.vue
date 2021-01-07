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
            @mouseover="() => toggleCategroy()"
        >모든 카테코리</button>
        <ul class="category-list"
            @mouseleave="() => toggleCategroy()">
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
              <li>
                <a href="#none">비건(Vegan)</a>
                <ul>
                  <li>
                    <a href="#none">비건(Vegan)</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">식물성 단백질</a>
                <ul>
                  <li>
                    <a href="#none">두부</a>
                  </li>
                  <li>
                    <a href="#none">가공식품</a>
                  </li>
                  <li>
                    <a href="#none">음료</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">친환경 식품</a>
                <ul>
                  <li>
                    <a href="#none">음료</a>
                  </li>
                  <li>
                    <a href="#none">간식</a>
                  </li>
                  <li>
                    <a href="#none">반찬·간편식</a>
                  </li>
                  <li>
                    <a href="#none">가공식품</a>
                  </li>
                  <li>
                    <a href="#none">건강식품</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">두부·콩나물·달걀</a>
            <ul>
              <li>
                <a href="#none">두부</a>
                <ul>
                  <li>
                    <a href="#none">두부</a>
                  </li>
                  <li>
                    <a href="#none">반찬</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">콩나물</a>
                <ul>
                  <li>
                    <a href="#none">콩나물</a>
                  </li>
                  <li>
                    <a href="#none">숙주나물</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">달걀</a>
                <ul>
                  <li>
                    <a href="#none">달걀</a>
                  </li>
                  <li>
                    <a href="#none">기타란</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">나또</a>
                <ul>
                  <li>
                    <a href="#none">나또</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">만두·핫도그·떡볶이</a>
            <ul>
              <li>
                <a href="#none">만두</a>
                <ul>
                  <li>
                    <a href="#none">만두</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">핫도그</a>
                <ul>
                  <li>
                    <a href="#none">핫도그</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">떡볶이</a>
                <ul>
                  <li>
                    <a href="#none">떡볶이</a>
                  </li>
                  <li>
                    <a href="#none">떡볶이떡·양념</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">피자</a>
                <ul>
                  <li>
                    <a href="#none">피자</a>
                  </li>
                  <li>
                    <a href="#none">브리또</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">과일·채소·쌀</a>
            <ul>
              <li>
                <a href="#none">테스트1</a>
                <ul>
                  <li>
                    <a href="#none">테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">테스트2</a>
                <ul>
                  <li>
                    <a href="#none">테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">테스트3</a>
                <ul>
                  <li>
                    <a href="#none">테스트3</a>
                  </li>
                  <li>
                    <a href="#none">테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">테스트4</a>
                <ul>
                  <li>
                    <a href="#none">테스트4</a>
                  </li>
                  <li>
                    <a href="#none">테스트4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">정육·달걀·수산</a>
            <ul>
              <li>
                <a href="#none">정육·달걀·수산 테스트1</a>
                <ul>
                  <li>
                    <a href="#none">정육·달걀·수산 테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">정육·달걀·수산 테스트2</a>
                <ul>
                  <li>
                    <a href="#none">정육·달걀·수산 테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">정육·달걀·수산 테스트3</a>
                <ul>
                  <li>
                    <a href="#none">정육·달걀·수산 테스트3</a>
                  </li>
                  <li>
                    <a href="#none">정육·달걀·수산 테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">정육·달걀·수산 테스트4</a>
                <ul>
                  <li>
                    <a href="#none">정육·달걀·수산 테스트4</a>
                  </li>
                  <li>
                    <a href="#none">정육·달걀·수산 테스트4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">밥·면·간편식</a>
            <ul>
              <li>
                <a href="#none">밥·면·간편식 테스트1</a>
                <ul>
                  <li>
                    <a href="#none">밥·면·간편식 테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">밥·면·간편식 테스트2</a>
                <ul>
                  <li>
                    <a href="#none">밥·면·간편식 테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">밥·면·간편식 테스트3</a>
                <ul>
                  <li>
                    <a href="#none">밥·면·간편식 테스트3</a>
                  </li>
                  <li>
                    <a href="#none">밥·면·간편식 테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">밥·면·간편식 테스트4</a>
                <ul>
                  <li>
                    <a href="#none">밥·면·간편식 테스트4</a>
                  </li>
                  <li>
                    <a href="#none">밥·면·간편식 테스트4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">김치·반찬·국탕</a>
            <ul>
              <li>
                <a href="#none">김치·반찬·국탕 테스트1</a>
                <ul>
                  <li>
                    <a href="#none">김치·반찬·국탕 테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">김치·반찬·국탕 테스트2</a>
                <ul>
                  <li>
                    <a href="#none">김치·반찬·국탕 테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">김치·반찬·국탕 테스트3</a>
                <ul>
                  <li>
                    <a href="#none">김치·반찬·국탕 테스트3</a>
                  </li>
                  <li>
                    <a href="#none">김치·반찬·국탕 테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">김치·반찬·국탕 테스트4</a>
                <ul>
                  <li>
                    <a href="#none">김치·반찬·국탕 테스트4</a>
                  </li>
                  <li>
                    <a href="#none">김치·반찬·국탕 테스트4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">간식·차·음료</a>
            <ul>
              <li>
                <a href="#none">간식·차·음료1</a>
                <ul>
                  <li>
                    <a href="#none">간식·차·음료1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">간식·차·음료2</a>
                <ul>
                  <li>
                    <a href="#none">간식·차·음료2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">간식·차·음료3</a>
                <ul>
                  <li>
                    <a href="#none">간식·차·음료3</a>
                  </li>
                  <li>
                    <a href="#none">간식·차·음료3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">간식·차·음료4</a>
                <ul>
                  <li>
                    <a href="#none">간식·차·음료4</a>
                  </li>
                  <li>
                    <a href="#none">간식·차·음료4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">양념·소스·유지</a>
            <ul>
              <li>
                <a href="#none">양념·소스·유지 테스트1</a>
                <ul>
                  <li>
                    <a href="#none">양념·소스·유지 테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">양념·소스·유지 테스트2</a>
                <ul>
                  <li>
                    <a href="#none">양념·소스·유지 테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">양념·소스·유지 테스트3</a>
                <ul>
                  <li>
                    <a href="#none">양념·소스·유지 테스트3</a>
                  </li>
                  <li>
                    <a href="#none">양념·소스·유지 테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">양념·소스·유지 테스트4</a>
                <ul>
                  <li>
                    <a href="#none">양념·소스·유지 테스트4</a>
                  </li>
                  <li>
                    <a href="#none">양념·소스·유지 테스트4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">건강식품</a>
            <ul>
              <li>
                <a href="#none">건강식품 테스트1</a>
                <ul>
                  <li>
                    <a href="#none">건강식품 테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">건강식품 테스트2</a>
                <ul>
                  <li>
                    <a href="#none">건강식품 테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">건강식품 테스트3</a>
                <ul>
                  <li>
                    <a href="#none">건강식품 테스트3</a>
                  </li>
                  <li>
                    <a href="#none">건강식품 테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">건강식품 테스트4</a>
                <ul>
                  <li>
                    <a href="#none">건강식품 테스트4</a>
                  </li>
                  <li>
                    <a href="#none">건강식품 테스트4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">일일배달녹즙·음료</a>
            <ul>
              <li>
                <a href="#none">일일배달녹즙·음료 테스트1</a>
                <ul>
                  <li>
                    <a href="#none">일일배달녹즙·음료 테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">일일배달녹즙·음료 테스트2</a>
                <ul>
                  <li>
                    <a href="#none">일일배달녹즙·음료 테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">일일배달녹즙·음료 테스트3</a>
                <ul>
                  <li>
                    <a href="#none">일일배달녹즙·음료 테스트3</a>
                  </li>
                  <li>
                    <a href="#none">일일배달녹즙·음료 테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">일일배달녹즙·음료 테스트4</a>
                <ul>
                  <li>
                    <a href="#none">일일배달녹즙·음료 테스트4</a>
                  </li>
                  <li>
                    <a href="#none">일일배달녹즙·음료 테스트4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">이유식·유아식</a>
            <ul>
              <li>
                <a href="#none">이유식·유아식 테스트1</a>
                <ul>
                  <li>
                    <a href="#none">이유식·유아식 테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">이유식·유아식 테스트2</a>
                <ul>
                  <li>
                    <a href="#none">이유식·유아식 테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">이유식·유아식 테스트3</a>
                <ul>
                  <li>
                    <a href="#none">이유식·유아식 테스트3</a>
                  </li>
                  <li>
                    <a href="#none">이유식·유아식 테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">이유식·유아식 테스트4</a>
                <ul>
                  <li>
                    <a href="#none">이유식·유아식 테스트4</a>
                  </li>
                  <li>
                    <a href="#none">이유식·유아식 테스트4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">잇슬림도시락</a>
            <ul>
              <li>
                <a href="#none">잇슬림도시락 테스트1</a>
                <ul>
                  <li>
                    <a href="#none">잇슬림도시락 테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">잇슬림도시락 테스트2</a>
                <ul>
                  <li>
                    <a href="#none">잇슬림도시락 테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">잇슬림도시락 테스트3</a>
                <ul>
                  <li>
                    <a href="#none">잇슬림도시락 테스트3</a>
                  </li>
                  <li>
                    <a href="#none">잇슬림도시락 테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">잇슬림도시락 테스트4</a>
                <ul>
                  <li>
                    <a href="#none">잇슬림도시락 테스트4</a>
                  </li>
                  <li>
                    <a href="#none">잇슬림도시락 테스트4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">생활·주방·반려용품</a>
            <ul>
              <li>
                <a href="#none">생활·주방·반려용품 테스트1</a>
                <ul>
                  <li>
                    <a href="#none">생활·주방·반려용품 테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">생활·주방·반려용품 테스트2</a>
                <ul>
                  <li>
                    <a href="#none">생활·주방·반려용품 테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">생활·주방·반려용품 테스트3</a>
                <ul>
                  <li>
                    <a href="#none">생활·주방·반려용품 테스트3</a>
                  </li>
                  <li>
                    <a href="#none">생활·주방·반려용품 테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">생활·주방·반려용품 테스트4</a>
                <ul>
                  <li>
                    <a href="#none">생활·주방·반려용품 테스트4</a>
                  </li>
                  <li>
                    <a href="#none">생활·주방·반려용품 테스트4_2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#none">뷰티용품</a>
            <ul>
              <li>
                <a href="#none">뷰티용품 테스트1</a>
                <ul>
                  <li>
                    <a href="#none">뷰티용품 테스트1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">뷰티용품 테스트2</a>
                <ul>
                  <li>
                    <a href="#none">뷰티용품 테스트2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">뷰티용품 테스트3</a>
                <ul>
                  <li>
                    <a href="#none">뷰티용품 테스트3</a>
                  </li>
                  <li>
                    <a href="#none">뷰티용품 테스트3_2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#none">뷰티용품 테스트4</a>
                <ul>
                  <li>
                    <a href="#none">뷰티용품 테스트4</a>
                  </li>
                  <li>
                    <a href="#none">뷰티용품 테스트4_2</a>
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
      z-index: 100;
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
        z-index: 2;
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
            ul{
              display: none;
            }
            a{
              display: block;
              box-sizing: border-box;
              width: 202px;
              height:40px;
              background: $white;
              line-height: 40px;
              padding:0 10px;
              font-size: 14px;
              font-weight: 400;
              text-align: left;
              vertical-align: middle;
            }

            &:hover,
            &.active{
              >a{
                font-weight: bold;
                color:inherit;
                &:hover{
                  background-color:$category-light;
                }
              }
              ul{
                border:2px solid $main-color;
                border-width: 2px 2px 2px 0;
                position: absolute;
                left:202px;
                top:-2px;
                bottom:-2px;
                background: $white;
                a{
                  background: $white;
                  color:$basic;
                  font-weight: normal;
                  &:hover{
                    background: $category-light;
                  }
                }
              }
              >ul{
                display: block;
              }
            }
          }
          >li{
            &:hover> ul,
            &.active> ul{
              //border-width: 2px 0;
              background: $category-light;
              >li >a{
                background: $category-light;
                color:$basic;
                font-weight: normal;
                &:hover{
                  background: $white;
                }
              }
            }
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3){
              >ul{
                border-width: 2px 0;
                background: $main-color;
                >li >a{
                  background: $main-color;
                  color:$white;
                  font-weight: bold;
                  &:hover{
                    background-color:$white;
                    color:$basic;
                  }
                }
              }
            }
          }
          >li{
            > a{
              &:before{
                content: "";
                display: inline-block;
                width:24px;
                height:24px;
                margin-right:17px;
                background: url("#{$images}/sp_category.png") no-repeat 0 0;
                vertical-align: -8px;
              }
            }
            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3){
              >a{
                color:$category;
                font-weight: bold;
                &:hover{
                  background-color:$main-color;
                  color:$white;
                }
              }
            }
            &:nth-child(2){
              >a{}
              > a:before{
                background-position: -26px 0;
              }
            }
            &:nth-child(3){
              > a:before{
                background-position: -52px 0;
              }
            }
            &:nth-child(4){
              > a:before{
                background-position: -78px 0;
              }
            }
            &:nth-child(5){
              > a:before{
                background-position: 0 -26px;
              }
            }
            &:nth-child(6){
              >a:before{
                background-position: -26px -26px;
              }
            }
            &:nth-child(7){
              >a:before{
                background-position: -52px -26px;
              }
            }
            &:nth-child(8){
              >a:before{
                background-position: -78px -26px;
              }
            }
            &:nth-child(9){
              >a:before{
                background-position: 0 -52px;
              }
            }
            &:nth-child(10){
              >a:before{
                background-position: -26px -52px;
              }
            }
            &:nth-child(11){
              >a:before{
                background-position: -52px -52px;
              }
            }
            &:nth-child(12){
              >a:before{
                background-position: -78px -52px;
              }
            }
            &:nth-child(13){
              >a:before{
                background-position: 0 -78px;
              }
            }
            &:nth-child(14){
              >a:before{
                background-position: -26px -78px;
              }
            }
            &:nth-child(15){
              >a:before{
                background-position: -52px -78px;
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
