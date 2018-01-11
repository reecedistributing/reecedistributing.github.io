<template lang="pug">
v-layout(column)
  v-flex(xs12)
    v-layout(row)
      v-flex(xs10 md6 offset-md3 justify-space-around).mt-4
        //- SORT OPTIONS FORM
        //- transition(name="slide-x-reverse-transition").grey--text
        //-   v-layout(v-if="sortOptionsActive")
        //-     v-flex(xs5)
        //-       v-select(
        //-         v-model="sortAttribute"
        //-         label="Sort By"
        //-         :items="sortable"
        //-       )
        //-         //- :solo="true"
        //-     v-flex(xs7 justify-space-between)
        //-       v-radio-group(row, v-model="ascending").text-xs-center
        //-         v-radio(
        //-           label="ascending",
        //-           :value="true",
        //-         )
        //-         v-radio(
        //-           label="descending",
        //-           :value="false"
        //-         )
        //-           v-spacer
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
      v-flex(xs2 offset-md3).text-lg-right
        //- .text-lg-right
        
        //- SORT OPTIONS TOGGLE BUTTON
        .text-xs-center
          v-menu(
            offset-y, 
            scrollable, 
            left, 
            bottom,
            :close-on-content-click="false", 
            :nudge-width="400" 
            v-model="menu"
          )
            //- v-tooltip(
            //-   bottom
            //- )
            v-btn(
              flat,
              icon,
              large,
              slot="activator"
              @click="toggleSortOptions"
            )
                v-icon sort
                //- span Sort Options
            v-card
              v-card-title Sort Options
              v-card-text
                //- v-list
                //-   v-list-tile(avatar="")
                //-     v-list-tile-content
                //-       v-list-tile-title Sort Options
                      //- v-list-tile-sub-title Founder of Vuetify.js
                    //- v-list-tile-action
                    //-   v-btn(icon="" :class="fav ? 'red--text' : ''" @click="fav = !fav")
                    //-     v-icon favorite
                v-divider
                v-list 
                  v-list-tile
                    v-list-tile-content
                      v-select(
                        v-model="sortAttribute"
                        label="Sort By"
                        :items="sortable"
                      )
                      //- :solo="true"
                  v-list-tile
                    v-list-tile-content
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
  v-flex(xs12)
    v-container.lighten-4(fluid grid-list-md)
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
      menu: false,
      hints: false,
      message: false,
      sortAttribute: null,
      ascending: false,
      sortOptionsActive: false,
      sortable: [
          { text: 'name', value: 'name' },
          { text: 'description', value: 'description' },
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
      },
      initial_sort_attr: {
        type: String,
        required: true
      },
      initial_sort_ascending: {
        type: Boolean,
        required: true
      }
    },
    components: {
      ProductCard
    },

    watch: {
      ascending () {
        this.emitSort()
      },
      sortAttribute () {
        this.emitSort()
      }
    },

    methods: {
      emitSort () {
        this.$emit('sort', { ascending: this.ascending, attribute: this.sortAttribute })
      },
      activateSortOptions () {
        this.sortOptionsActive = true
      },
      deactivateSortOptions () {
        this.sortOptionsActive = false
      },
      toggleSortOptions () {
        this.sortOptionsActive = ! this.sortOptionsActive;
      }
    },

    mounted () {
      this.sortAttribute = this.initial_sort_attr;
      this.ascending = this.initial_sort_ascending
    }
  }

</script>


<style lang="scss">
</style>