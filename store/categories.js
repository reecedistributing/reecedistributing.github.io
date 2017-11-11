import { query } from './apollo-client'

export default {
  namespaced: true,
  state: _ => ({}),

  actions: {
    async getRootCategories () {
      let { data: { categories } } = await query`{
        categories: rootCategories {
          name
          description
          slug
          children {
            name 
            description
            slug
          }
        }
      }`
      return categories
    }
  }
}
