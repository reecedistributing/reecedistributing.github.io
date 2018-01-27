<template lang="pug">
  v-app
    //- v-layout
    //-   v-flex(xs12)
    //-     v-layout.bg
    //-       v-flex(xs12).overlay-bg
    //-         div.overlay-contents
              //- nuxt
    //-     transition(name="scale-transition")
    //-       .top-left-nav(v-if="/(contact|about)/ig.test($route.name)")
    //-         reece-logo.pl-4
    //-     .top-right-nav
    //-       nuxt-link.lowkey_link(:to="{ name: 'about' }").white--text Our Story
    //-       nuxt-link.lowkey_link(:to="{ name: 'contact' }").white--text.ml-4 Contact Us
    //-       v-btn(lg icon, @click="drawer = true").ml-3
    //-         v-icon.white--text menu
    //-     v-navigation-drawer(temporary="", v-model="drawer", absolute="")
    //-       v-flex(space-between)
    //-         v-list.pa-1
    //-           v-list-tile(tag="div")
    //-             v-flex()
    //-               reece-logo(height="4rem")
    //-               v-btn(icon, @click="drawer = false").btn-right--custom
    //-                 v-icon close
    //-         v-list.pt-0(dense)
    //-           v-divider(light="")
    //-           v-list-tile
    //-             v-list-tile-action
    //-               v-btn.lowkey_link(:to="{ name: 'about' }", nuxt, flat) Our Story
    //-           v-list-tile
    //-             v-list-tile-action
    //-               v-btn.lowkey_link(:to="{ name: 'contact' }", nuxt, flat) Contact Us
    //-           v-list-tile
    //-             v-list-tile-action
    //-               v-btn.lowkey_link(:to="{ name: 'products' }", nuxt, flat) Explore Catalog
    //-           v-list-tile(v-if="user")
    //-             v-list-tile-action
    //-               v-btn(flat, @click="logOut") Sign Out
    //-           v-list-tile(v-else)
    //-             v-list-tile-action
    //-               v-btn(flat, :nuxt="true", :to="{name:'auth-sign-in'}").blue-grey--text.text--darken-2 Sign In
    //- span(style="display:none;") Photo by Samuel Ferrara on Unsplash
    //- custom-footer
</template>

<script>
// import CustomFooter from '~/components/global/Footer.vue'
  // import Logo from '~/components/Logo.vue'
// import ReeceLogo from '~/components/global/ReeceLogo.vue'

// import MapVisual from '~/components/visual/Map.vue'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  data: _ => ({ drawer: false }),
  // components: {
  //   ReeceLogo,
  //   CustomFooter
  //   // Logo,
  //   // MapVisual
  // },
  // methods: {
  //   ...mapActions('auth', [
  //     'logOut'
  //   ])
  // },
  computed: {
    // ...mapGetters('auth', [
    //   'isAuthenticated',
    // ]),
    // ...mapState('auth', [
    //   'user'
    // ])
  },
  mounted(){
  }
}

</script>

<style lang="scss">

.bg {
  position: relative;
  background-image: url('../assets/samuel-ferrara-136526.jpg');
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

.overlay-contents {
  height: 100%;
  width: 100%;
}

.btn-right--custom {
  float: right;
}

.title-txt {
  font-family: 'Great Vibes', cursive;
  display: block;
  /* font-weight: bold; */
  color:#FAFAFA;
  letter-spacing: 0px !important;
}
.top-right-nav {
  display: block;
  position: fixed;
  top: 0px;
  right: 0px;
}
.top-left-nav {
  display: block;
  position: fixed;
  top: 0px;
  left: 0px;
}
</style>