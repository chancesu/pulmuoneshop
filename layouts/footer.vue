<template>
  <div class="footer-wrap">
    <h2 class="a11y">풀무원 안내</h2>
    <div class="footer-link">
      <div class="container">
        <h3 class="a11y">풀무원 관련 링크</h3>
        <a href="#none">회사소개</a>
        <a href="#none">이용약관</a>
        <a href="#none" class="unique">개인정보처리방침</a>
        <a href="#none">고객기쁨센터</a>
        <a href="#none">제휴안내</a>
        <a href="#none">임직원로그인</a>
        <a href="#none">모바일버전</a>
        <a href="#none">제품스토리</a>
        <a href="#none">맛있는레시피</a>
        <a href="#none">풀무원스토리</a>
        Family site
      </div>
    </div>
    <footer class="container">
      <h3 class="a11y">풀무원 정보</h3>
      <strong class="footer-logo">
        풀무원
      </strong>
      <address>
        <strong>(주)풀무원</strong>
        대자 : 이효율 ｜주소 : 서울특별시 강남구 광평로 280 (수서동, 로즈데일빌딩)<br>
        사업자등록번호 : 315-81-01744 <a onclick="onopen()" class="info_confirm">사업자 정보확인</a><br>
        통신판매업신고 : 제2019-서울강남-02379호 ｜ 건강기능식품 신고 : 제2019-0106813호<br>
        호스팅 제공자 : ㈜ 풀무원｜고객센터 : 080-022-0086｜이메일 : pmocs_02@pulmuone.com
      </address>
    </footer>
  </div>
</template>

<script>
export default {
name: "footer"
}
</script>

<style lang="scss" scoped>
  .footer-wrap{
    .footer-link{
      height: 60px;
      padding:15px 0;
      border:1px solid #00400e;
      border-width: 1px 0;
      a{
        display: inline-block;
        font-size: 15px;
        line-height: 30px;
        margin-left:15px;
        &:first-child{
          margin:0;
        }
        &:hover{
          text-decoration: underline;
        }
        &.unique{
          color:#00400e;
          font-weight: bold;
        }
      }
    }
    footer{
      position: relative;
      padding:16px 0 14px 143px;
      .footer-logo{
        overflow: hidden;
        position: absolute;
        top:30px;
        left:34px;
        display: block;
        width: 80px;
        height:27px;
        background: url("~static/images/logo_pulmuone.gif") no-repeat 0 0;
        background-size: cover;
        text-indent: -1000em;
      }
      address{
        font-style: normal;
        font-size: 12px;
        color:#333;
        strong{
          display: block;
          font-size: 15px;
          margin-bottom:15px;
        }
      }
    }
  }
</style>