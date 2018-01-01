import { client } from './apollo-client'
import { CREATE_BRAND } from './graphql/mutations'
import { ALL_ROOT_BRANDS } from './graphql/queries'

export default {
  namespaced: true,
  apollo: {
    cool: true,
    idk: true,
    wat: true
  },
  state: _ => ({
    allRoot: []
  }),

  mutations: {

    updateAllRoot (state, { data }) {
      state.allRoot = data
    }

  },

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

    async getAllRoot ({ state, commit }) {
      let queryObj = {
        query: ALL_ROOT_BRANDS
      }
      let { data: { brands } } = await client.query(queryObj)
      await client.watchQuery(queryObj).subscribe({
        next: ({ data: { brands = [] } }) => commit('updateAllRoot', { data: brands })
      })
      state.allRoot = brands
      return brands
    }
  }
}
