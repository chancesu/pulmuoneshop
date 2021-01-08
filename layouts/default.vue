<template>
  <div>
    <LayoutHeader/>
    <Nuxt />
    <LayoutFooter/>
  </div>
</template>

<script>
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>
<style lang="scss">
@import "./assets/variables.scss";
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
// common css
   html{
     font-size:14px;
   }

body,
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
dl,
dt,
dd,
table,
th,
td,
form,
fieldset,
legend,
input,
textarea,
button,
select {
  margin: 0;
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
input,
button,
table,
select,
textarea {
  font-family: $default-font;
  letter-spacing: -0.05em;
  word-spacing: normal;
}
input,button{
  border:0;
}
caption,
hr,
legend {
  display: none;
}

li {
  list-style: none;
}

a{
  text-decoration: none;
  color: $basic;
&:hover,
&.active{
   text-decoration: none;
 }
}

.a11y {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: -1000em;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 9;
}
.container{
  position: relative;
  max-width:1020px;
  min-width: 400px;
  margin:0 auto;
}
.item-list{
  display: flex;
  flex-wrap: wrap;
}
.h3-title{
  margin-bottom:40px;
  font-size:24px;
  font-weight: 300;
  img{
    vertical-align: middle;
  }
}
.main-banner .swiper-pagination-bullet-active{
  background-color: $hover;
  width:20px;
  border-radius: 20px;
}

@media screen and (max-width: 500px){
  .container{
    min-width: 100%;
  }
  .h3-title{
    padding-left:10px;
    font-size:5vw;
    img{
      max-height:50px;
    }
  }
}
</style>
