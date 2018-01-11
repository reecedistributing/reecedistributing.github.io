<template lang="pug">
v-card
  v-stepper(v-model="e1")
    v-stepper-header
      div(@click="e1 = 1",)
        v-stepper-step(step="1", :complete="e1 > 1") Select Products
      v-divider
      v-stepper-step(step="2", :complete="e1 > 2") Add Title
      v-divider
      v-stepper-step(step="3") Notes and Questions
    v-stepper-items
      v-stepper-content(step="1")
        mb-5(color="grey lighten-1")


          v-list(three-line="" subheader="")
            v-subheader Products
            .body-2(v-if="!productCount").pa-3.grey--text.text--darken-2
              span No products have been added to this inquiry. 
            div(v-for="product in current.products")
              v-list-tile(
                href="javascript:;"
              )
                v-list-tile-action
                  add-remove-buttons(:product="product")
                v-list-tile-avatar
                  img(:src="product.main_img_url")
                v-list-tile-content(@click="")
                  v-list-tile-title {{product.name}}
                  v-list-tile-sub-title {{product.description}}
              v-divider(:inset="true")
            .body-2.text-xds-right.ml-3.mt-2.grey--text.text--darken-2
              span Click the 
              v-icon add_shopping_cart
              span  icon on a product to add it to this inquiry.


        v-btn(color="primary" @click.native="e1 = 2") Continue
        //- v-btn(flat="", @click="e1 = 1") Back


      v-stepper-content(step="2")
        v-text-field(
          label="Title" 
          v-model="current.title" 
          autofocus
          max="120" 
          counter
          full-width
          single-line
          @keydown.enter="e1 = 3"
        ).title-input
        v-btn(color="primary" @click.native="e1 = 3") Continue
        v-btn(flat="", @click="e1 = 1") Back


      v-stepper-content(step="3")
        v-text-field(
          label="Inquiry notes..." 
          v-model="current.note" 
          autofocus
          hint="Use this area to write any additional information or questions you may have."
          max="120" 
          counter
          full-width
          multi-line
        ) 
        v-btn(color="primary" @click.native="e1 = 1") Submit
        v-btn(flat="", @click="e1 = 2") Back

  v-toolbar(color="primary" dark="").elevation-0
    //- v-toolbar-side-icon
    v-toolbar-title New Inquiry
    v-spacer
    //- v-btn(icon="")
    //-   v-icon search
      


</template>

<script>
  import {
    mapState,
    mapActions,
  } from 'vuex'

  import AddRemoveButtons from '~/components/inquiries/AddRemoveButtons.vue'

  export default {
    data: _ => ({
      cool: true,
      e1: 1
    }),
    methods: {
      ...mapActions('inquiries', ['saveCurrent', 'loadCurrent'])
    },
    computed: {
      productCount () {
        return Object.values(this.current.products).length
      },
      ...mapState('inquiries', ['current'])
    },
    watch: {
      current: {
        deep: true,
        handler () {
          this.saveCurrent()
        }
      }
    },
    mounted () {
      this.loadCurrent()
    },
    components: {
      AddRemoveButtons
    }
  }

</script>

<style lang="scss">
  @mixin inputHeight {
      height: auto;
      font-size: 4rem !important;
      line-height: 4rem;
  }
  .title-input.input-group {
      @include inputHeight();
      input, label {
        @include inputHeight();
      }
  
  }
</style>