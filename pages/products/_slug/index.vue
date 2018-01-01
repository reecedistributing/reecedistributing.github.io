<template lang="pug">
v-container
  v-layout(column)
    v-flex(xs12 sm10 offset-sm1)
      route-bread-crumbs
      v-layout(row wrap)

        //- IMAGE CAROUSEL
        v-flex(xs12 lg7)
          v-carousel
            v-carousel-item(v-for="(item,i) in product.images", v-bind:key="'item'+i", v-bind:src="item.url", transition="fade", reverse-transition="fade")
            v-carousel-item(v-if="!product.images.length", style="background:black;", src="" transition="fade", reverse-transition="fade")
              h3.white--text No Image

        v-flex(xs12 lg5)
          v-card 
            v-card-text
              //- EDIT OR DELETE MENU 
              
              //- PRODUCT INFORMATION
              ._.ml-2.mt-2.mr-2
                v-layout
                  v-flex(xs11)
                    h3 {{product.name}} 
                  v-flex(xs1, justify-space-between, row).text-xs-right
                    v-spacer
                    v-menu(bottom, left)
                      v-btn(icon, slot="activator")
                        v-icon more_vert
                      v-list
                        v-list-tile(:nuxt="true", :to="{ name:'products-slug-edit', params: { slug: product.slug } }")
                          v-list-tile-title Edit
                        v-list-tile(@click="deleteProduct")
                          v-list-tile-title Delete
                blockquote {{product.description}} 
          
                //- v-card.grid(v-if="product.images && product.images.length", transition="scale-transition" origin="center center")
                //-   v-toolbar(color='white', flat='')
                //-     //- v-btn(icon='', light='')
                //-     v-toolbar-title.grey--text.text--darken-4 Images
                //-     v-spacer
                //-   v-container(fluid='', grid-list-sm)
                //-     v-layout(row='', wrap='')
                //-       v-flex(xs2='', v-for='(i, index) in product.images', :key="'key'+index")
                //-         img.image(v-bind:src='i.url', width='100%')
                v-divider.mt-2.mb-2
                p Brands
                v-chip(
                  label, 
                  color="light-blue", 
                  text-color="white",
                  v-for="c in product.brands",
                  :key="c.slug"
                )
                  v-icon(left) label 
                  span {{c.name}}
                v-chip(
                  label, 
                  color="grey lighten-2", 
                  text-color="black",
                  v-if="!product.brands.length"
                )
                  span None
                p Categories
                v-chip(
                  label, 
                  color="pink", 
                  text-color="white",
                  v-for="c in product.categories",
                  :key="c.slug"
                )
                  v-icon(left) label 
                  span {{c.name}}
                v-chip(
                  label, 
                  color="grey lighten-2", 
                  text-color="black",
                  v-if="!product.categories.length"
                )
                  span None
                component(v-if="product.price_low")
                  p Minimum Price
                  p ${{product.price_low.toFixed(2).toString() || '0.00'}}
                component(v-if="product.price_high")
                  p Maximum Price
                  p ${{product.price_high.toFixed(2).toString() || '0.00'}}
        v-layout(row wrap)

</template>

<script>
  import RouteBreadCrumbs from '~/components/global/RouteBreadCrumbs'
  import { Carousel, Slide } from 'vue-carousel';
  export default {
    data () {
      return {
        product:{},
        suggestedProducts: [],
        mounted: false
      }
    },
    
    async asyncData ({params, store}) {
      let product = await store.dispatch('products/getProduct', { slug: params.slug })
      let { products: suggestedProducts } = await store.dispatch('products/getProducts', { size: 10, num: 6, orderBy: {} })

      return {
        product,
        suggestedProducts
      }
    },

    methods: {
      async deleteProduct () {
        let status = await this.$store.dispatch('products/delete', {
          slug: this.$route.params.slug 
        })
        
        await this.$router.push(
          {name: 'products'}, 
          async event => {
            setTimeout( 
              async _ => await this.$store.dispatch('notifications/notify', {
                text: 'Product successfully deleted',
                color: 'grey darken-4',
                duration: 4000
              }
            ), 500)
          }
        )

      }
    },

    computed: {
      browser () {
        this.mounted
        return process.browser;
      }
    },

    mounted () {
      this.mounted = true
      window.$route = this.$route
    },

    components: {
      RouteBreadCrumbs,
      Carousel,
      Slide
    }
  }

</script>


<style lang="scss", scoped>
  .__menu-force-right {
    justify-content: flex-end;
    width: 100%;
  }
</style>