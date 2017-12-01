import gql from 'graphql-tag'

export const CREATE_BRAND = gql`mutation createNewBrand($brand:BrandCreateAttrs!) {
  brand: createBrand(brand:$brand) {
    name
    description
    slug
  }
}`

export const CREATE_CATEGORY = gql`mutation createNewCategory($category:CategoryCreateAttrs!) {
  createCategory(category:$category) {
    name
    description
    slug
  }
}`

export const CREATE_IMAGE = gql`mutation createNewImage($cloudinary: CloudinaryImageAttrs!, $transform: CloudinaryTransformAttrs!) {
  createImage(cloudinary: $cloudinary) {
    slug
    url(transform: $transform)
  }
}`
