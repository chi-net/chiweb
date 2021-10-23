export default {
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
}
