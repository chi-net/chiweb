import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Card from './components/Card.vue'
import VueI18n from 'vue-i18n'
import messages from './messages'
// import Storage from './storage'
Vue.config.productionTip = false
Vue.component('Card', Card)
Vue.use(Vuex)
Vue.use(VueI18n)
console.log(messages)
const i18n = new VueI18n({
  locale: 'cn',
  messages
})
Vue.use(i18n)
const store = new Vuex.Store({
  state: {
    isCopyrightHidden: true,
    development: true,
    gallerys: {
      arknights: {
        sm: ['1.png'],
        bg: ['1.jpg']
      },
      genshin: { // 哦不原神找不到什么沙雕图片......
        sm: ['paimon1.png'],
        bg: ['']
      }
    },
  font: 'Noto Sans SC'
},
mutations: {
  changeCH () {
    this.state.isCopyrightHidden = !(this.state.isCopyrightHidden)
  }
}
})
new Vue({
  render: h => h(App),
  store: store,
  i18n: i18n
}).$mount('#app')
