
<template lang="pug">
v-layout
  //- IMAGE PREVIEWS
  v-tabs(dark, grow, v-model="activeView", default="views[activeView]")
    v-toolbar(not-extended).primary
      v-toolbar-side-icon.white--text.text--darken-1
      v-toolbar-title.white--text Products
      v-spacer(v-if="!searchActive")

      //- SEARCH BAR
      transition(name="slide-x-reverse-transition").grey--text
        v-flex(
          v-if="searchActive"
          sm6
          offset-sm3
          justify-content="right"
        )
          form(@submit.prevent="searchProducts")
            v-text-field(
              :autofocus="true"
              @blur="tryDeactivate"
              transition="slide-x-reverse-transition"
              solo
              label="Search"
              append-icon="keyboard_voice"
              prepend-icon="search"
              color="black"
              text-color="black"
              v-model="search"
            )
      v-spacer
      //- MENU BUTTONS
      v-btn(
        @click="activateSearch"
        icon=""
        v-if="!searchActive"
      ).white--text.text--darken-1
        v-icon search
      v-btn(icon="").white--text.text--darken-1
        v-icon more_vert
      //- v-toolbar-title.display-2(slot="extension") Products

    //- TABLE/GRID SWITCHES
    v-tabs-bar
      v-tabs-slider(color="yellow")
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
      v-btn(:nuxt="true", :to="{ name:'products-new' }", :flat="true").white--text.text--darken-1
        | New Product

    //- TABLE OR GRID OF ITEMS
    v-tabs-items
      v-tabs-content(
        v-for="(val, key) in views"
        :key="key"
        :id="key"
      )
        v-flex(xs10, offset-xs1, )
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
      v-layout(justify-center="")
        v-flex(xs8="")
          v-card
            v-card-text
              v-pagination(:length="pageCount", v-model="pageNum")

</template>

<script>
  import ProductGrid from '~/components/products/Grid.vue'
  import ProductTable from '~/components/products/Table.vue'
  export default {
    data(){
      return {
        search: '',
        searchActive: false,
        loading: false,
        products: [],
        pageCount: 1,
        pageNum: 1,
        sortBy: {
          attribute:'',
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
        sort_ascending: ascending = "true",
        sort_attribute: attribute = 'updated_at'
      } = query;
      ascending = JSON.parse(ascending)
      let sortBy = {
        ascending,
        attribute
      }
      pageNum = parseInt(pageNum)
      let searchActive = !!search
      let size = 15
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
      activeComponent () {
        return this.views[this.activeView]
      }
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
      }
    },
    components: {
      ProductGrid,
      ProductTable
    }
  }
</script>

<style lang="scss">
 .idk{}
</style>