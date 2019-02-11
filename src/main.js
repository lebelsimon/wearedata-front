import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import router from './router'
import translations from "./resources/translations";
import axios from 'axios';

Vue.use(VueI18n);
Vue.use(Vuelidate);
Vue.prototype.$http = axios

Vue.config.formApiUrl = process.env.FORM_API_URL;
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: translations
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
