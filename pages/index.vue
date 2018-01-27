<template lang="pug">
  v-flex(column, xs10 offset-xs1, sm6 offset-sm3, justify-center align-center, style="height:100%")
    .center-items--custom
      h1.white--text.full-width--custom.ma-0.pa-0.h1--title--custom
        img(:src="white_logo", style="width:100%", alt="Reece Distributing")
      //- h1.title-txt
      //-   | Reece Distributing Co. 
      h2.subtitle
        span For those who just can't bare it.
      .links
        v-btn(:nuxt="true", :to="{ name:'products' }", large).cta-btn Explore Catalog

    //- map-visual

</template>

<script>

import white_logo from "~/assets/white-logo.svg"

export default {
  data: _ => ({ white_logo }),
  layout: 'home'
}

</script>

<style scoped lang="stylus">
@require '../assets/colorconfig.styl'

.h1--title--custom {
  font-size: inherit !important;
}

.full-width--custom {
  width: 100%;
}
.subtitle {
  font-family: 'Cutive Mono', Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 1.7em;
  color: #FAFAFA;
  word-spacing: 5px;
  padding-bottom: 15px;
}


.links {
  padding-top: 15px;
}

.cta-btn {
  border-bottom: 2px solid $red.darken-2;
  // border-bottom-color: #e45e30;
}

.center-items--custom {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>