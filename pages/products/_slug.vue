<template lang="pug">
v-container
  v-layout(column)
    v-flex(xs12 sm8 offset-sm2)
      v-breadcrumbs(divider="/")
        v-breadcrumbs-item(
          :exact="true"
          :disabled="false"
          :nuxt="true", 
          :to="{ name:'products' }"
          key="1"
        )
          | Products
        v-breadcrumbs-item(
          :disabled="true"
          key="2"
        )
          | {{ product.name }}

      v-card
        v-card-title(primary-title)
          ._
            h1 {{product.name}} 
            blockquote {{product.description}} 
</template>

<script>

  export default {
    data () {
      return {
        product:{}
      }
    },
    
    async asyncData ({params, store}) {
      let product = await store.dispatch('getProduct', { slug: params.slug })
      return {
        product
      }
    },
    mounted () {
      window.$route = this.$route
    }
  }

</script>


<style lang="scss">

</style>