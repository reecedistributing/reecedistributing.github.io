
<template lang="pug">
  v-layout
    v-flex(xs12)
      v-card
        v-card.lowkey_link(:to="{ name:'products-slug', params: { slug: product.slug }}", :nuxt="true").elevation-0
          v-card-media(:src="product.main_img_url" height="200px")
            v-container(fill-height fluid)
              v-layout(fill-height)
                v-flex(xs12 align-end flexbox)
          v-card-title
            div
              h3.headline.mb-0(v-text="product.name")
              //- .black--text
              div {{ product.description }}
        v-card.elevation-0
          v-card-actions
            v-spacer
            add-remove-buttons(:product="product")
            v-btn(icon)
              v-icon bookmark
            v-btn(icon)
              v-icon share
</template>


<script>
  import {
    mapMutations,
    mapState,
    mapActions,
  } from 'vuex'

  import AddRemoveButtons from '~/components/inquiries/AddRemoveButtons.vue'
  export default {
    props: {
      product: {
        required: true,
        type: Object
      }
    },
    components: {
      AddRemoveButtons
    }
  }

</script>


<style lang="scss">

</style>