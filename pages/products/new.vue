<template lang="pug">
v-container
  v-layout
    v-flex(md6, offset-md3)
      ProductForm(
        label="New Product",
        :categories="categories",
        :brands="brands",
        @complete="create",
        v-model="product"
      )

</template>


<script>
  import {
    mapState
  } from 'vuex'
  
  import ProductForm from '~/components/products/Form.vue'

  export default {
    data: _ => ({
      product: undefined
    }),
    async asyncData ({store}) {
      let categories = await store.dispatch('categories/getAllRoot')
      let brands = await store.dispatch('brands/getAllRoot')
      return {
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
      async create () {
        let notification = {
          text: 'Product successfully created!',
          color: 'success'
        }
        try {
          let product = await this.$store.dispatch('products/create', { product: this.product });
          this.$router.push({ name:'products-slug', params: { slug: product.slug }})
        } catch (e) {
          notification.text = 'There was an error while posting this product. Please try again.'
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