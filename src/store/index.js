import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
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
      },
      font: 'Noto Sans SC',
      currentGallery: {
        set: 'arknights',
        type: 'bg',
        no: '3.jpg'
      }
    }
  },
  mutations: {
    changeCH () {
      this.state.isCopyrightHidden = !(this.state.isCopyrightHidden)
    },
    setFont (state, ff) {
      state.font = ff
    },
    setGallery (state, gallerys) {
      state.currentGallery = gallerys
    }
  }
})
