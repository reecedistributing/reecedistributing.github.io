
<template lang="pug">
  info-page(name="Contact Us")
      v-flex(xs10 offset-xs1, sm6 offset-xs3)
        div.text-xs-left.ml-sm-4.headline
          p Call us at 
            a(href="tel:+01-208-452-5785", target="_blank") (208)452-5785
          p Email us at 
            a(href="mailto:info@reecedistributing.com", target="_blank") info@reecedistributing.com
          address
            span 7370 Custer Rd
            br
            span Fruitland, ID 
            br
            span 83619
</template>


<script>
  import InfoPage from '~/components/global/InfoPage.vue'
  export default {
    layout: 'home',
    components: { InfoPage }
  }

</script>


<style lang="stylus" scoped>
@require '../assets/colorconfig.styl'

a {
  color: $light-blue.base !important
}

</style>