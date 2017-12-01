import { client } from './apollo-client'
import { ALL_ROOT_CATEGORIES } from './graphql/queries'
import { CREATE_CATEGORY } from './graphql/mutations'

export default {
  namespaced: true,
  state: _ => ({
    allRoot: []
  }),

  actions: {

    async create ({ commit, dispatch, state }, { name, description, parent_slug: parentSlug }) {
      console.log(CREATE_CATEGORY)
      let { category } = await client.mutate({
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
      if (!parentSlug) await dispatch('getAllRoot')
      return category
    },
    async getAllRoot ({ state }) {
      let { data: { categories } } = await client.query({
        query: ALL_ROOT_CATEGORIES
      })
      state.allRoot = categories
      return categories
    }
  }
}
