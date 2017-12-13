import { client } from './apollo-client'
import { ALL_ROOT_CATEGORIES } from './graphql/queries'
import { CREATE_CATEGORY } from './graphql/mutations'

export default {
  namespaced: true,
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
        data: { category }
      } = await client.mutate({
        mutation: CREATE_CATEGORY,
        variables: {
          category: {
            name,
            description,
            parent: parentSlug
          }
        },
        refetchQueries: [ { query: ALL_ROOT_CATEGORIES } ]
      })
      return category
    },

    async getAllRoot ({ commit, dispatch, state }) {
      console.log('getAllRoot running')
      let { data: { categories } } = await client.query({
        query: ALL_ROOT_CATEGORIES,
        update: (store, { data: { categories } }) => {
          console.log(categories)
          commit('updateAllRoot', {
            data: categories
          })
        }
      })
      commit('updateAllRoot', {
        data: categories
      })
      return categories
    }
  }
}
