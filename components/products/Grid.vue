<template lang="pug">
v-layout(column)
  v-flex(xs12)
    v-layout
      v-flex(xs11 md6 offset-md3 justify-space-around)
        //- SORT OPTIONS FORM
        transition(name="slide-x-reverse-transition").grey--text
          v-layout(v-if="sortOptionsActive")
            v-flex(xs5)
              v-select(
                v-model="sortAttribute"
                label="Sort By"
                :items="sortable"
              )
                //- :solo="true"
            v-flex(xs7 justify-space-between)
              v-radio-group(row, v-model="ascending").text-xs-center
                v-radio(
                  label="ascending",
                  :value="true",
                )
                v-radio(
                  label="descending",
                  :value="false"
                )
                  v-spacer
          //- //- MENU BUTTONS
          //- v-btn(
          //-   @click="activateSortOptions"
          //-   icon=""
          //-   v-if="!sortOptionsActive"
          //- ).white--text.text--darken-1
          //-   v-icon search
        v-progress-linear( transition="fade-transition" v-bind:indeterminate="true" color="info" v-if="loading" )
        //- v-toolbar.black--text(color="white" dark)
        //-   v-toolbar-side-icon
        //-   v-toolbar-title Discover
        //-   v-spacer
        //-   v-btn(icon)
        //-     v-icon search
      v-flex(xs1 offset-md3).text-lg-right
        //- .text-lg-right
        
        //- SORT OPTIONS TOGGLE BUTTON
        v-tooltip(
          bottom
        )
          v-btn(
            flat,
            icon,
            large,
            slot="activator"
            @click="toggleSortOptions"
          )
            v-icon sort
          span Sort Options
  v-flex(xs12)
    v-container.grey.lighten-4(fluid grid-list-md)
      v-layout(
          row wrap justify-start align-start
      )
        v-flex(
          v-for="product in products",
          :key="product.slug"
          v-bind="{ [`lg${product.flex}`]: true }"
        )
          ProductCard(:product="product")

</template>


<script>
  import ProductCard from './Card'
  export default {
    data: _ => ({
      sortAttribute: null,
      ascending: true,
      sortOptionsActive: false,
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
    },
    methods: {
      activateSortOptions () {
        this.sortOptionsActive = true
      },
      deactivateSortOptions () {
        this.sortOptionsActive = false
      },
      toggleSortOptions () {
        this.sortOptionsActive = ! this.sortOptionsActive;
      }
    }
  }

</script>


<style lang="scss">
</style>