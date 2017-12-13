import { client } from './apollo-client'
import { CREATE_BRAND } from './graphql/mutations'
import { ALL_ROOT_BRANDS } from './graphql/queries'

export default {
  namespaced: true,

  state: _ => ({
    allRoot: []
  }),

  actions: {

    async create ({ commit, dispatch, state }, { name, description, parent_slug: parentSlug }) {
      let {
        data: { brand }
      } = await client.mutate({
        mutation: CREATE_BRAND,
        variables: {
          brand: {
            name,
            description,
            parent: parentSlug
          }
        },
        refetchQueries: [ { query: ALL_ROOT_BRANDS } ]
      })
      console.log(brand)
      if (!parentSlug) await dispatch('getAllRoot')
      return brand
    },

    async getAllRoot ({ state }) {
      let { data: { brands } } = await client.query({
        query: ALL_ROOT_BRANDS
      })
      state.allRoot = brands
      return brands
    }
  }
}
