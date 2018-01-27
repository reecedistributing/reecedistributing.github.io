
<template lang="pug">
  nuxt-link.lowkey_link(:to="{ path:'/' }" nottag="v-toolbar-title")
    //- .grey--text.text--darken-2
    //- v-layout()
    img(v-if="desktop && !small", :src="logo", :style="{ height: height }", alt="Reece Distributing")     
    v-avatar(v-else, tile)
      img(:src="logo_small", style="filter:lighten(10%)", alt="Reece Distributing")
</template>


<script>
  import logo from "~/assets/logo.svg"
  import logo_small from "~/assets/logo-sml.svg"
  export default {
    data: _ => ({ logo, logo_small }),
    props: {
      height: {
        default: _ => '5rem'
      },
      small: {
        default: _ => false
      }
    },
    computed: {
      desktop () {
        return this.$vuetify.breakpoint.mdAndUp
      }
    }
  }

</script>


<style lang="scss">

</style>