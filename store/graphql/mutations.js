import gql from 'graphql-tag'
import {
  // BRAND_QUERY_PARAMS,
  CATEGORY_QUERY_PARAMS,
  PRODUCT_QUERY_PARAMS
} from './queries'

export const CREATE_BRAND = gql`mutation createNewBrand($brand:BrandCreateAttrs!) {
  brand: createBrand(brand:$brand) {
    name
    description
    slug
  }
}`

export const CREATE_CATEGORY = gql`mutation createNewCategory($category:CategoryCreateAttrs!) {
  category: createCategory(category:$category) {
    ${CATEGORY_QUERY_PARAMS}
  }
}`

export const CREATE_IMAGE = gql`mutation createNewImage($cloudinary:CloudinaryImageAttrs!, $transform:CloudinaryTransformAttrs!) {
  image: createImage(cloudinary:$cloudinary) {
    slug
    url(transform:$transform)
  }
}`

export const CREATE_PRODUCT = gql`mutation createNewProduct($product:ProductCreateAttrs!) {
  product: createProduct(product:$product) {
    ${PRODUCT_QUERY_PARAMS}
    images {
      slug
      url
    }
  }
}`

export const UPDATE_PRODUCT = gql`mutation updateNewProduct($product:ProductUpdateAttrs!) {
  product: updateProduct(product:$product) {
    ${PRODUCT_QUERY_PARAMS}
  }
}`

export const DELETE_PRODUCT = gql`mutation destroyProduct($slug:String!) {
  status: deleteProduct(slug:$slug) {
    success
  }
}`
