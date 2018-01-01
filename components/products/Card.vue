
<template lang="pug">
  nuxt-link.lowkey_link(:to="{ name:'products-slug', params: { slug: product.slug }}" tag="div")
    v-card
      v-card-media(:src="product.main_img_url" height="250px")
        v-container(fill-height fluid)
          v-layout(fill-height)
            v-flex(xs12 align-end flexbox)
      v-card-title
        div
          h3.headline.mb-0.black--text(v-text="product.name")
          div {{ product.description }}
      v-card-actions.white
        v-spacer
        v-btn(icon)
          //- v-icon favorite
          v-icon(icon) {{ Math.random() > 0.5? "add_shopping_cart" : "remove_shopping_cart"}}
        v-btn(icon)
          v-icon bookmark
        v-btn(icon)
          v-icon share
</template>


<script>

    export default {
      props: {
        product: {
          required: true,
          type: Object
        }
      }
    }

</script>


<style lang="scss">

</style>