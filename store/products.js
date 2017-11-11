import { query } from './apollo-client'

export default {
  // namespace: true,
  state () {
    return {
      info: 'INFO HERE'
    }
  },

  mutations: {

  },

  actions: {

    async getProducts (state, {size, num, search}) {
      let searchArg = search ? `search: "${search}"` : ''
      let { data: { productPage: { products, pagination } } } = await query`{
          productPage(size: ${size}, num: ${num}, ${searchArg}) {
            products {
              name
              description
              price_high
              price_low
              slug
              created_at
              updated_at
            }
            pagination {
              pageCount
            }
          }
        }`

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

    async getProduct (state, {slug}) {
      let { data: { product } } = await query`{
        product: productBySlug(slug: "${slug}") {
          name
          description
          slug
        }
      }`
      return product
    }
  }
}
