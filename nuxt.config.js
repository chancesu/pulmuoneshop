const path = require('path');
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  mode: 'spa',
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '풀무원 공식 쇼핑몰 풀무원샵',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '풀무원의 다양한 제품들을 가장 편리하게 만날수 있는 곳, 선착순 최대 반값 특가, 매일 1-DAY특가' },
      { hid: 'Keywords', name: 'Keywords', content: '풀무원샵, 풀무원, 바른먹거리, 간편한끼식사, 간편삭식, 간편반찬, 반찬, 반찬재료, 신선식품, 가공식품, 건강식품, 음료, 일일배달, 선물세트, 건강밥상, 나또, 토이쿠키, 올바른핫도그, 아임리얼, 두부, 뮤즐리, 샐러드, 자연은맛있다, 풀무원샘물, 풀무원녹즙, 생가득, 찬마루, 생라면' },
      { property: 'og:title', content: '풀무원 공식 쇼핑몰 풀무원샵' },
      { property: 'og:description', content: '풀무원의 다양한 제품들을 가장 편리하게 만날수 있는 곳, 선착순 최대 반값 특가, 매일 1-DAY특가' },
      { property: 'og:image', content: 'http://www.pulmuoneshop.co.kr/front/include/img/footer_logo.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/notosanskr.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  // styleResources: {
  //   scss: [
  //     'assets/variables.scss'
  //   ]
  // },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev, isClient }) {
      const alias = config.resolve.alias = config.resolve.alias || {};
      alias['@'] = path.join(__dirname,'components');
      alias['@images'] = path.join(__dirname,'static/images');
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
