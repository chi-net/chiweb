import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Card from './components/Card.vue'
// import Storage from './storage'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.component('Card', Card)
const store = new Vuex.Store({
  state: {
    isCopyrightHidden: true,
    gallerys: {
      arknights: {
        sm: ['1.png'],
        bg: ['1.jpg']
      },
      gensin: { // 哦不原神找不到什么沙雕图片......
        sm: ['paimon1.png'],
        bg: ['']
    }
  }
},
mutations: {
  changeCH () {
    this.state.isCopyrightHidden = !(this.state.isCopyrightHidden)
  }
}
})
new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
