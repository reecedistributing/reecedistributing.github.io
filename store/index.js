import Vuex from 'vuex'
import PRODUCTS from './products'
import NOTIFICATIONS from './notifications'
import IMAGES from './images'
import CATEGORIES from './categories'

let store = {
  modules: {
    products: PRODUCTS,
    notifications: NOTIFICATIONS,
    images: IMAGES,
    categories: CATEGORIES
  }
}

const createStore = () => {
  return new Vuex.Store(store)
}

export default createStore
