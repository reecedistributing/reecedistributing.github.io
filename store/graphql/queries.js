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

export const PRODUCT_BY_SLUG = gql`query getSpecificProduct($slug:String!, $transform:CloudinaryTransformAttrs!) {
  product: productBySlug(slug:$slug) {
    name
    description
    slug
    images {
      slug
      url(transform:$transform)
    }
    categories {
      name
      slug
    }
    brands {
      name
      slug
    }
  }
}`

export const PRODUCT_BY_PAGE = gql`query getProductPage($size:Int!, $num:Int!, $orderBy:OrderBy!, $search:String) {
  productPage(size:$size, num:$num, search:$search, orderBy:$orderBy) {
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
