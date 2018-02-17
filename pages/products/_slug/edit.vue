<template lang="pug">
v-container
  v-layout
    v-flex(md6, offset-md3)
      ProductForm(
        :label="`Edit \"${product.name}\"`",
        :categories="categories",
        :brands="brands",
        @complete="update",
        v-model="product"
      )

</template>


<script>
  import {
    mapState
  } from 'vuex'
  
  import ProductForm from '~/components/products/Form.vue'

  export default {
    middleware: 'auth',
    data: _ => ({
      product: undefined
    }),
    async asyncData ({store, params}) {
      let categories = await store.dispatch('categories/getAllRoot')
      let brands = await store.dispatch('brands/getAllRoot')
      let product = await store.dispatch('products/getProduct', { slug: params.slug })
      return {
          product: { ...product }
      }
    },
    computed: {
      categories () {
        return this.$store.state.categories.allRoot
      },
      brands () {
        return this.$store.state.brands.allRoot
      }
    },
    methods: {
      async update () {
        let notification = {
          text: 'Product successfully updated!',
          color: 'success'
        }
        try {
          let product = await this.$store.dispatch('products/update', { product: this.product });
          this.$router.push({ name:'products-slug', params: { slug: product.slug }})
        } catch (e) {
          notification.text = 'There was an error while updating this product. Please try again.'
          notification.color = 'error'
        }
        this.$store.dispatch('notifications/notify', notification)
      }
    },
    components: {
      ProductForm
    }
  }

</script>


<style lang="scss">

</style>