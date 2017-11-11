<template lang="pug">
v-container
  v-layout
    v-flex(md6, offset-md3)
      ProductForm(
        label="New Product",
        :categories="categories"
      )

</template>


<script>
  import ProductForm from '~/components/products/Form.vue'

  export default {
    data: _ => ({
      categories: []
    }),
    async asyncData ({store}) {
      let categories = await store.dispatch('categories/getRootCategories')
      return {
        categories
      }
    },
    components: {
      ProductForm
    }
  }

</script>


<style lang="scss">

</style>