<template lang="pug">
v-layout(column)
  v-flex(xs12 sm12 offset-sm0).text-lg-right
    v-menu(
      bottom
      full-width
      min-width="300"
    )
      v-tooltip(
        slot="activator"
        bottom
      )
        v-btn(
          flat,
          icon,
          large,
          slot="activator"
        )
          v-icon sort
        span Sort Options
      v-card
        v-card-text
          v-select(
            label="Sort By"
            :items="['ikd', 'iklj', 'slkjf']"
            :solo="true"
          )
          v-radio-group(row)
            v-radio(
              label="ascending",
              :value="true",
            )
            v-radio(
              label="descending",
              :value="false"
            )
    v-progress-linear( transition="fade-transition" v-bind:indeterminate="true" color="info" v-if="loading" )
    //- v-toolbar.black--text(color="white" dark)
    //-   v-toolbar-side-icon
    //-   v-toolbar-title Discover
    //-   v-spacer
    //-   v-btn(icon)
    //-     v-icon search
    v-container.grey.lighten-4(fluid grid-list-md)
      v-layout(
          row wrap justify-start align-start
      )
        ProductCard(v-for="product in products", :product="product", :key="product.slug", :flex="product.flex")

</template>


<script>
  import ProductCard from './Card'
  export default {
    data: _ => ({
      sortable: [
          { text: 'name', value: 'name' },
          { text: 'description', value: 'description'},
          { text: 'Min Price', value: 'price_low', render: v => v ? '$' + v : "None" },
          { text: 'Max Price', value: 'price_high', render: v => v ? '$' + v : "None" },
          { text: 'Created (Date)', value: 'created_at', render: v => new Date(parseInt(v)).toLocaleDateString() },
          { text: 'Updated (Date)', value: 'updated_at', render: v => new Date(parseInt(v)).toLocaleDateString() }
        ]
    }),
    props: {
      products:{
        type: Array,
        required: true
      },
      loading:{
        type: Boolean,
        required: false,
        default: false
      }
    },
    components: {
      ProductCard
    }
  }

</script>


<style lang="scss">
</style>