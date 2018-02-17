
<template lang="pug">
  //- v-layout
  v-flex
    //- IMAGE PREVIEWS
    v-tabs(dark, grow, v-model="activeView", default="views[activeView]")
      v-toolbar(not-extended)
        //- .primary
        //- v-toolbar-side-icon
          //- .white--text.text--darken-1
        v-toolbar-title(v-if="desktopBreakpoint")
          //- .white--text 
          | Products
        //- v-spacer

        //- SEARCH BAR
        //- transition(name="slide-x-reverse-transition")
          //- .grey--text
          //- v-if="true || searchActive"
        v-layout
          v-flex(
            sm8
            offset-sm2
            justify-content="space-around"
          )
            form(@submit.prevent="searchProducts")
              //- :ref="searchRef"
                transition="slide-x-reverse-transition"
              v-text-field(
                @blur.prevent="deactivateSearch"
                @focus.prevent="activateSearch"
                :autofocus="false"
                solo
                label="Search"
                append-icon="keyboard_voice"
                prepend-icon="search"
                v-model="search"
                :class="searchClasses"
                text-color="black"
              )
                //- color="black"
        //- v-spacer
        //- v-spacer
        //- MENU BUTTONS
        //- v-btn(
        //-   @click="activateSearch"
        //-   icon=""
        //-   v-if="!searchActive"
        //- )
        //-   //-.white--text.text--darken-1
        //-   v-icon search
        //- v-btn(icon="")
        //-   //-.white--text.text--darken-1
        //-   v-icon more_vert
        v-btn(v-if="user", :nuxt="true", :to="{ name:'products-new' }", :icon="!desktopBreakpoint", :flat="false").elevation-1.primary.white--text.mr-3
          //- .white--text.text--darken-1
          span(v-if="desktopBreakpoint") New Product
          v-icon(v-if="!desktopBreakpoint") add
        //- v-toolbar-title.display-2(slot="extension") Products

      //- TABLE/GRID SWITCHES
      v-tabs-bar
        v-tabs-slider(color="accent")
        v-tabs-item(
          :nuxt="true"
          v-for="(val, key) in views"
          @click="switchView(key)"
          :key="key"
          :target="key"
          :href="'#' + key"
          ripple
        )
          | {{key}}

      //- TABLE OR GRID OF ITEMS
      v-tabs-items
        v-tabs-content(
          v-for="(val, key) in views"
          :key="key"
          :id="key"
        )
          v-layout
            //- FILTER OPTIONS
            v-flex(
              v-if="$vuetify.breakpoint.smAndUp"
              xs3
            ).mt-4
              v-card(flat).secondary.pl-0.mt-4
                v-card-text
                  v-card.floating-card-custom.mb-1.pa-3
                    v-card-text
                      v-toolbar(flat)
                        v-list
                          v-list-tile
                            v-list-tile-content
                              v-list-tile-title Filters
                      v-divider
                      v-list(three-line="" subheader="")
                        v-subheader User Controls
                        v-list-tile
                          //- v-list-tile-content
                          //-   v-list-tile-title Price
                          //-   v-list-tile-sub-title Set the content filtering level to only include products in your price range
                        v-list-tile
                          v-list-tile-content
                            v-list-tile-title Category
                            v-list-tile-sub-title Filter by category
                    
            v-flex(sm9, xs12)
              keep-alive
                component(
                  :is="val", 
                  :products="products", 
                  :loading="loading", 
                  :initial_sort_attr="sortBy.attribute",
                  :initial_sort_ascending="sortBy.ascending"
                  @sort="updateRouteWithSortParams"
                )

      //- PAGINATION
      v-container
        v-layout(justify-center)
          //- v-flex(xs8, justify-center)
            //- v-card.transparent.elevation-0
              //- v-card-text
          v-pagination(:length="pageCount", v-model="pageNum", total-visible="7")

</template>

<script>
  import ProductGrid from '~/components/products/Grid.vue'
  import ProductTable from '~/components/products/Table.vue'
  import { mapState } from 'vuex'

  export default {
    data(){
      return {
        mini: true,
        searchRef: 'searlalskf;lajls;',
        search: '',
        searchActive: true,
        loading: false,
        products: [],
        pageCount: 1,
        pageNum: 1,
        sortBy: {
          attribute:'updated_at',
          ascending: true
        },
        views: {
          // name: ComponentName
          grid: 'ProductGrid',
          table: 'ProductTable'
        },
        activeView: 'grid'
      }
    },
    async asyncData({store, query}){
      
      let { 
        page: pageNum = 1, 
        view: activeView = 'grid', 
        search = '',
        sort_ascending: ascending = 'false',
        sort_attribute: attribute = 'updated_at'
      } = query;
      ascending = JSON.parse(ascending)
      let sortBy = {
        ascending,
        attribute
      }
      pageNum = parseInt(pageNum);
      let searchActive = !!search;
      let size = 15;
      let { products, pagination: { pageCount } } = await store.dispatch('products/getProducts', { num: pageNum, size, search, orderBy: sortBy })
      
      return {
        products,
        pageCount,
        pageNum,
        activeView,
        search,
        searchActive,
        sortBy
      }
    },
    computed: {
      desktopBreakpoint () {
        return this.$vuetify.breakpoint.mdAndUp
      },
      activeComponent () {
        return this.views[this.activeView]
      },
      searchClasses () {
        let classes = [] 
        if (process.browser) {
          let elev = this.searchActive ? 'elevation-1' : 'elevation-0'
          let bg = this.searchActive ? '' : 'faded'
          classes.push(elev, bg)
        }
        if(this.$store.state.dark) classes.push('black')
        return classes
      },
      ...mapState('auth', [
        'user'
      ])
    },
    methods: {
      async searchProducts () {
        this.loading = true
        let search = this.search;
        this.$router.push({ query:{ ...this.$route.query, page: 1, search } })
        this.loading = false
      },
      tryDeactivate () {
        !this.search.length ? this.deactivateSearch() : null
      },
      activateSearch () {
        this.searchActive = true
      },
      deactivateSearch () {
        this.searchActive = false
      },
      updateRouteWithPageNumber () {
        let page = this.pageNum;
        this.$router.push({ query:{ ...this.$route.query, page } })
      },
      updateRouteWithSortParams ({ ascending: sort_ascending, attribute: sort_attribute }) {
        this.$router.push({ query:{ ...this.$route.query, sort_ascending, sort_attribute } })
      },
      switchView (viewName /* "grid" or "_table" */) {
        this.$router.push({ query:{ ...this.$route.query, view: viewName } })
      }
    },
    watch: {
      pageNum () {
        console.log('updated')
        this.updateRouteWithPageNumber()
      },
      sortBy: {
        deep: true,
      }
    },
    components: {
      ProductGrid,
      ProductTable
    }
  }
</script>

<style lang="scss" scoped>
 .faded {
   opacity: 0.9;
 }
 .floating-card-custom {
   margin-bottom: 34px;
   bottom: 34px;
 }
</style>