import gql from 'graphql-tag'

export const CATEGORY_QUERY_PARAMS = `
  name
  description
  slug
  children {
    name
    description
    slug
    children {
      name
      description
      slug
      children {
        name
        description
        slug
        children {
          name
          description
          slug
        }
      }
    }
  }
  parent {
    name
    description
    slug
  }
`

export const BRAND_QUERY_PARAMS = `
  name
  description
  slug
`
export const PRODUCT_QUERY_PARAMS = `
  name
  description
  slug
  created_at
  updated_at
  brands {
    ${BRAND_QUERY_PARAMS}
  }
  categories {
    ${CATEGORY_QUERY_PARAMS}
  }
`

export const ALL_ROOT_BRANDS = gql`{
  brands: rootBrands {
    ${BRAND_QUERY_PARAMS}
  }
}`

export const ALL_ROOT_CATEGORIES = gql`{
  categories: rootCategories {
    ${CATEGORY_QUERY_PARAMS}
  }
}`

export const PRODUCT_BY_SLUG = gql`query getSpecificProduct($slug:String!, $transform:CloudinaryTransformAttrs!) {
  product: productBySlug(slug:$slug) {
    ${PRODUCT_QUERY_PARAMS}
    images {
      slug
      url(transform:$transform)
    }
  }
}`

export const PRODUCT_BY_PAGE = gql`query getProductPage($size:Int!, $num:Int!, $orderBy:OrderBy!, $search:String) {
  productPage(size:$size, num:$num, search:$search, orderBy:$orderBy) {
    products {
      name
      description
      slug
      brands {
        ${BRAND_QUERY_PARAMS}
      }
      categories {
        ${CATEGORY_QUERY_PARAMS}        
      }
      created_at
      updated_at
    }
    pagination {
      pageCount
    }
  }
}`
