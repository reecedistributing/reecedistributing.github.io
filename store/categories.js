import { client } from './apollo-client'
import { ALL_ROOT_CATEGORIES } from './graphql/queries'
import { CREATE_CATEGORY } from './graphql/mutations'

// if (process.browser) {
//   client.cache.watch({
//     callback (...args) {
//       console.log('change occured in cache')
//       console.log(...args)
//     }
//   })
// }

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
      let queryObj = {
        query: ALL_ROOT_CATEGORIES
      }
      let { data: { categories } } = await client.query(queryObj)

      await client.watchQuery(queryObj).subscribe({
        next: ({ data: { categories = [] } }) => commit('updateAllRoot', { data: categories })
      })
      return categories
    }
  }
}
