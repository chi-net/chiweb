import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import Card from './components/Card.vue'

var Vue = createApp(App)
Vue
  .use(i18n)
  .use(store)
  .use(router)
  .component('Card', Card)
  .mount('#app')
