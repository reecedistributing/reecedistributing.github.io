<template lang="pug">
v-container
  v-layout(column)
    v-flex(xs12 sm10 offset-sm1)
      v-breadcrumbs(divider="/")
        v-breadcrumbs-item(
          :exact="true"
          :disabled="false"
          :nuxt="true", 
          :to="{ name:'products' }"
          key="1"
        )
          | Products
        v-breadcrumbs-item(
          :disabled="true"
          key="2"
        )
          | {{ product.name }}
      v-layout(row wrap)
        v-flex(sm12 md7)
          v-carousel
            v-carousel-item(v-for="(item,i) in product.images", v-bind:key="'item'+i", v-bind:src="item.url", transition="fade", reverse-transition="fade")
            v-carousel-item(v-if="!product.images.length", style="background:black;", src="" transition="fade", reverse-transition="fade")
              h3.white--text No Image
        v-flex(sm12 md5 :height="400")
          ._.ml-2.mt-2.mr-2
            h3 {{product.name}} 
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
</template>

<script>

  export default {
    data () {
      return {
        product:{}
      }
    },
    
    async asyncData ({params, store}) {
      let product = await store.dispatch('products/getProduct', { slug: params.slug })
      return {
        product
      }
    },
    mounted () {
      window.$route = this.$route
    }
  }

</script>


<style lang="scss">

</style>