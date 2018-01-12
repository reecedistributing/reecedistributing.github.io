<template lang="pug">
v-layout
  v-flex(xs12)
    span(style="display:none;") Photo by Samuel Ferrara on Unsplash
    v-layout.bg
      v-flex(xs12).overlay-bg
        div.overlay-contents
          // <logo/>
          img(src="~/assets/white-logo.svg", style="width:100%", alt="Reece Distributing")
          //- h1.title-txt
          //-   | Reece Distributing Co.
          h2.subtitle
            span For those who just can't bare it.
          .links
            v-btn(:nuxt="true", :to="{ name:'products' }", large).cta-btn Explore Catalog
    .top-right-nav
      div ––––
      div ––––
      div ––––
    //- map-visual

</template>

<script>
import Logo from '~/components/Logo.vue'
// import MapVisual from '~/components/visual/Map.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  layout: 'home',
  components: {
    Logo,
    // MapVisual
  },
  computed: {
    ...mapGetters('auth', [
      'isAuthenticated',
    ]),
    ...mapState('auth', [
      'user'
    ])
  },
  mounted(){
  }
}
</script>

<style scoped lang="stylus">
@require '../assets/colorconfig.styl'

.bg {
  position: relative;
  background-image: url('https://source.unsplash.com/uOi3lg8fGl4');
  background-size: cover;
}
.overlay-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
}

.title-txt {
  font-family: 'Great Vibes', cursive;
  display: block;
  /* font-weight: bold; */
  color:#FAFAFA;
  letter-spacing: 0px !important;
}

.subtitle {
  font-family: 'Cutive Mono', Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 1.7em;
  color: #FAFAFA;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.top-right-nav {
  display: block;
  position: fixed;
  top: 0px;
  right: 0px;
  padding: 10px 10px 0px 0px;
}

.links {
  padding-top: 15px;
}

.cta-btn {
  border-bottom: 2px solid $main.darken-2;
}
</style>