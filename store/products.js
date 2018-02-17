import { client } from './apollo-client'
import { CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './graphql/mutations'
import { PRODUCT_BY_SLUG, PRODUCT_BY_PAGE } from './graphql/queries'

export default {
  namespaced: true,
  state () {
    return {
      info: 'INFO HERE'
    }
  },

  mutations: {

  },

  actions: {

    async create ({ commit, dispatch, state }, { product: {
      name,
      description,
      categories,
      images,
      brands,
      price_low,
      price_high
    } }) {
      categories = categories.map(
        c => c.slug
      )
      images = images.map(
        i => i.slug
      )
      brands = brands.map(
        b => b.slug
      )
      let {
        data: { product }
      } = await client.mutate({
        mutation: CREATE_PRODUCT,
        variables: {
          product: {
            name,
            description,
            categories,
            images,
            brands,
            price_low,
            price_high
          }
        }
      })
      return product
    },

    async update ({ commit, dispatch, state }, { product: {
      slug,
      name,
      description,
      categories,
      images,
      brands,
      price_low,
      price_high
    } }) {
      let priceLow = parseFloat(price_low)
      let priceHigh = parseFloat(price_high)

      categories = categories.map(
        c => c.slug
      )
      images = images.map(
        i => i.slug
      )
      brands = brands.map(
        b => b.slug
      )
      let {
        data: { product }
      } = await client.mutate({
        mutation: UPDATE_PRODUCT,
        variables: {
          product: {
            slug,
            name,
            description,
            categories,
            images,
            brands,
            price_low: priceLow,
            price_high: priceHigh
          }
        }
      })
      return product
    },

    async delete ({ commit, dispatch, state }, { slug }) {
      let { status } = await client.mutate({
        mutation: DELETE_PRODUCT,
        variables: {
          slug
        }
      })

      return status
    },

    async getProducts (state, { size, num, search, orderBy: { ascending = false, attribute = 'updated_at' } }) {
      size = parseInt(size)
      let { data: { productPage: { products, pagination } } } = await client.query({
        query: PRODUCT_BY_PAGE,
        variables: {
          size,
          num,
          orderBy: {
            ascending,
            attribute
          },
          search
        }
      })
      products = products.map(
        (p, i) => {
          p = {...p}
          p.flex = 3
          p.main_img_url = 'https://source.unsplash.com/1600x900?tools?' + i
          return p
        }
      )
      return {
        products,
        pagination
      }
    },

    async getProduct (state, {slug, height = 900, width = 1080}) {
      let { data: { product } } = await client.query({
        query: PRODUCT_BY_SLUG,
        variables: {
          slug,
          transform: {
            width,
            height
          }
        }
      })
      return product
    }
  }
}
