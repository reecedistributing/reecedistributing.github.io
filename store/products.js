import { client } from './apollo-client'
import { CREATE_PRODUCT } from './graphql/mutations'
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
      brands
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
            brands
          }
        }
      })
      return product
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
          p.flex = 4
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
