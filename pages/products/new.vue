<template lang="pug">
v-container
  v-layout
    v-flex(md6, offset-md3)
      ProductForm(
        label="New Product",
        :categories="categories",
        :brands="brands"
      )

</template>


<script>
  import {
    mapState
  } from 'vuex'
  
  import ProductForm from '~/components/products/Form.vue'

  export default {
    data: _ => ({
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
    components: {
      ProductForm
    }
  }

</script>


<style lang="scss">

</style>