import Vuex from 'vuex'
import PRODUCTS from './products'
import NOTIFICATIONS from './notifications'
import IMAGES from './images'
import CATEGORIES from './categories'
import BRANDS from './brands'
import AUTH from './auth'
import INQUIRIES from './inquiries'

let store = {
  state: {
    dark: false
  },
  modules: {
    products: PRODUCTS,
    notifications: NOTIFICATIONS,
    images: IMAGES,
    categories: CATEGORIES,
    brands: BRANDS,
    auth: AUTH,
    inquiries: INQUIRIES
  }
}

const createStore = (...args) => {
  let vStore = new Vuex.Store(store)
  if (process.browser) vStore.dispatch('auth/loadUserInfo')
  return vStore
}

export default createStore
