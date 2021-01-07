import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper, {
  pagination: {
    el: '.swiper-pagination'
  },
  loop: false,
  autoplay: {
    delay: 350000,
    disableOnInteraction: false,
  },
  initialSlide: 0,
});