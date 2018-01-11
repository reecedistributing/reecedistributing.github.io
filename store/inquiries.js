import Vue from 'vue'
const LOCAL_INQUIRY_KEY = 'local_inquiry'

const defaultCurrent = _ => ({ // Unsent inquiry object
  products: {}, // dictionary of Products
  note: '',
  title: ''
})
export default {
  namespaced: true,
  state: {
    current: defaultCurrent()
  },
  mutations: {
  },
  actions: {
    removeProduct ({state, dispatch}, {product}) {
      Vue.delete(state.current.products, product.slug)
    },
    addProduct ({state, dispatch}, { product }) {
      Vue.set(state.current.products, product.slug, product)
    },
    loadCurrent ({state}) {
      if (!process.browser) return
      let current = JSON.parse(localStorage.getItem(LOCAL_INQUIRY_KEY))
      state.current = current || defaultCurrent()
    },
    saveCurrent ({state}) {
      if (!process.browser) return
      console.log('saving current')
      localStorage.setItem(LOCAL_INQUIRY_KEY, JSON.stringify(state.current))
    }
  }
}
