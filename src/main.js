import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Card from './components/Card.vue'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.component('Card', Card)
const store = new Vuex.Store({
  state: {
    isCopyrightHidden: true
  },
  mutations: {
    changeCH () {
      this.state.isCopyrightHidden = !(this.state.isCopyrightHidden)
    }
  }
})
Vue.prototype.changeCH = function () {
  this.$store.changeCH()
}
new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
