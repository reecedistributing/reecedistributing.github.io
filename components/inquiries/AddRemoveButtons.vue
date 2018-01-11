
<template lang="pug">
  div
    v-tooltip(
      top
      v-if="currentInquiry.products[product.slug]"
    )
      v-btn(
        icon
        @click="removeProduct({product})"
        slot="activator"
      )
        //- v-icon favorite
        v-icon(
          icon
        ) remove_shopping_cart
      span Remove product from inquiry
    v-tooltip(
      top
      v-else
    )
      v-btn(
        icon
        @click="add"
        slot="activator"
      )
        v-icon(
          icon
        ) add_shopping_cart
      span Add product to inquiry
</template>


<script>
  import {
    mapMutations,
    mapState,
    mapActions,
  } from 'vuex'
  
  export default {
    methods: {
      async add () {
        await this.addProduct({ product: this.product })
        this.notify({
          text: 'Product added to inquiry.'
        })
      },
      async remove () {
        await this.removeProduct({ product: this.product })
      },
      ...mapActions('notifications', [
        'notify'
      ]),
      ...mapActions('inquiries', [
        'addProduct',
        'removeProduct'
      ]),
    },
    computed: {
      ...mapState('inquiries', {
        currentInquiry: 'current'
      })
    },
    props: ['product']
  }

</script>


<style lang="scss">

</style>