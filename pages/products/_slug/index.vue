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
              
              //- PRODUCT INFORMATION
              ._.ml-2.mt-2.mr-2
                v-layout
                  v-flex(xs11)
                    h3 {{product.name}} 
                  v-flex(xs1, justify-space-between, row).text-xs-right
                    v-spacer
                    //- EDIT OR DELETE MENU 
                    v-menu(bottom, left, v-if="isAuthenticated")
                      v-btn(icon, slot="activator")
                        v-icon more_vert
                      v-list
                        v-list-tile(:nuxt="true", :to="{ name:'products-slug-edit', params: { slug: product.slug } }")
                          v-list-tile-title Edit
                        v-list-tile(@click.stop="deleteConfirmDialog = true")
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
                v-divider
                p.mt-3 Contact Us for Pricing
                //- component(v-if="product.price_low")
                //-   p Minimum Price
                //-   p ${{product.price_low.toFixed(2).toString() || '0.00'}}
                //- component(v-if="product.price_high")
                //-   p Maximum Price
                //-   p ${{product.price_high.toFixed(2).toString() || '0.00'}}
        v-layout(row wrap)
        v-dialog(v-model="deleteConfirmDialog", :fullscreen="$vuetify.breakpoint.xsOnly")
          v-card
            v-card-title.headline Are you sure you want to delete this product?
            v-card-text
              | This action is irreversible.
              //- v-progress-circular(indeterminate="" v-bind:size="70" v-bind:width="7" color="primary")
            v-card-actions
              v-spacer
              v-btn(color="red darken-1" flat="flat" @click.native="deleteConfirmDialog = false") Nevermind
              v-btn(color="green darken-1" flat="flat" @click.native="deleteProduct") Yes, I'm sure.


</template>

<script>
  import RouteBreadCrumbs from '~/components/global/RouteBreadCrumbs'
  import { Carousel, Slide } from 'vue-carousel';
import { mapGetters } from 'vuex';
  export default {
    layout: 'default',
    data () {
      return {
        product:{},
        suggestedProducts: [],
        mounted: false,
        deleteConfirmDialog: false,
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
        this.deleteConfirmDialog = false;
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
        // this.mounted
        return process.browser;
      },
      ...mapGetters('auth', [
        'isAuthenticated'
      ])
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