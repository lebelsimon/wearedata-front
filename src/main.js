import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './backend/vue-axios/axios'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

// import translations from "./resources/translations";

// Vue.use(VueI18n);
// Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.prototype.$http = axios

// Vue.config.formApiUrl = process.env.FORM_API_URL;
// Vue.config.productionTip = false
// const i18n = new VueI18n({
//   locale: 'en',
//   fallbackLocale: 'en',
//   messages: translations
// })

new Vue({
  el: '#app',
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
