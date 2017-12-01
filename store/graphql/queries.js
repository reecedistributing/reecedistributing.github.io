import gql from 'graphql-tag'

export const ALL_ROOT_BRANDS = gql`{
  brands: rootBrands {
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

export const ALL_ROOT_CATEGORIES = gql`{
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
