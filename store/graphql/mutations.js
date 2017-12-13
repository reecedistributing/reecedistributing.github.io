import gql from 'graphql-tag'

export const CREATE_BRAND = gql`mutation createNewBrand($brand:BrandCreateAttrs!) {
  brand: createBrand(brand:$brand) {
    name
    description
    slug
  }
}`

export const CREATE_CATEGORY = gql`mutation createNewCategory($category:CategoryCreateAttrs!) {
  category: createCategory(category:$category) {
    name
    description
    slug
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
    name
    description
    price_high
    price_low
    slug
    created_at
    updated_at
  }
}`
