//import 'expose-loader?$!expose-loader?jQuery!expose-loader?jquery!../static/jquery-ui/external/jquery/jquery.js'
import Vue from 'vue'
import router from './router'
// import vueI18n from 'vue-i18n'
// import pt from './pt'
// import en from './en'

// Vue.use(vueI18n)

// let locales = {pt, en}

// Vue.config.lang = 'pt'

// Object.keys(locales).forEach(function (lang) {
// 	Vue.locale(lang, locales[lang])
// })

new Vue({
  el: '#app',
  data: {
	  datum: 'testing!'
  },
  router
})
