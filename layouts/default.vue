<template lang="pug">
  v-app(:dark="$store.state.dark")
    div(
      v-for="(notif, index) in notifications",
    )
      v-snackbar(
        :timeout='notif.duration', 
        :color="notif.color",
        v-model="snackbar[notif.id]",
        :multi-line="notif.multiline", 
        :vertical="!$vuetify.breakpoint.md", 
        :key="notif.text + index"
        :top="true", 
        :bottom="false", 
        :absolute="false"
        :right="true", 
        :left="false", 
      )
        | {{ notif.text }}
        v-btn(
          dark 
          flat 
          @click.native="snackbar[notif.id] = false"
        ) Close

    //- NAVBAR

    v-toolbar(:dark="$store.state.dark").elevation-0
      nuxt-link.lowkey_link(:to="{ path:'/' }" tag="v-toolbar-title")
        //- .grey--text.text--darken-2
        v-layout(v-if="desktop")
          img(src="~/assets/logo.svg", style="height: 5rem;", alt="Reece Distributing")     
        v-avatar(v-else)
          img(src="~/assets/logo-sml.svg", style="filter:lighten(10%)", alt="Reece Distributing")
      v-spacer
      v-toolbar-items()
      

        v-btn(flat, :to="{ name:'products' }", :nuxt="true") Products
        
        v-layout.mt-2
          v-flex
            .text-xs-center
              v-menu(
                offset-y, 
                :close-on-content-click="false", 
                bottom 
                left 
                v-model="inquiryMenu"
                min-width="50%"
              )

                //- ACTIVATOR (IN NAV)
                v-badge(
                  overlap 
                  color="red" 
                  slot="activator"
                )
                  span(slot="badge", v-if="productsInCurrentInquiry") {{ productsInCurrentInquiry }}
                  v-avatar(flat="")
                    v-icon shopping_cart
                current
        //- ACCOUNT AREA (RIGHT SIDE)
        v-layout.mt-2
          v-flex
            v-btn(v-if="!user", :to="{ name:'auth-sign-in' }", :nuxt="true").accent.white--text.elevation-0 Sign In
        v-layout.mt-2
          v-flex
            .text-xs-center
              v-menu(
                v-if="user" 
                offset-y, 
                :close-on-content-click="false", 
                bottom 
                left 
                v-model="menu"
              )

                //- ACTIVATOR (IN NAV)
                v-btn(v-if="user" flat, icon, slot="activator")
                  v-avatar.grey.lighten-4(:tile="false", size="35px")
                    img(:src="user.picture" alt="avatar")
                //- v-btn(color="indigo" dark="" slot="activator") Menu as Popover

                //- POPOVER MENU 
                v-card
                  v-list
                    v-list-tile(avatar)
                      v-list-tile-content
                        v-avatar
                          img(:src="user.picture" alt="AVATAR")
                      v-list-tile-content
                        v-list-tile-title {{user.name}}
                        v-list-tile-sub-title {{user.email}}
                        //- v-list-tile-sub-title Founder of Vuetify.js
                      //- v-list-tile-action
                      //-   v-btn(icon="" :class="fav ? 'red--text' : ''" @click="fav = !fav")
                      //-     v-icon favorite
                  v-layout
                    v-flex(justify-space-between).text-xs-right
                      v-spacer
                      v-btn(@click="logOut", flat).primary--text
                        | Sign Out
                  v-divider
                  v-list
                    //- v-list-tile
                    //-   v-list-tile-action
                    //-     v-switch(v-model="message" color="blue")
                    //-   v-list-tile-title Enable messages
                    //- v-list-tile
                    //-   v-list-tile-action
                    //-     v-switch(v-model="hints" color="blue")
                    //-   v-list-tile-title Enable hints
                    v-list-tile
                      v-list-tile-action
                        v-switch(v-model="$store.state.dark" color="black")
                      v-list-tile-title Dark Mode
                  v-card-actions
                    v-spacer
                    v-btn(flat="" @click="menu = false") Cancel
                    v-btn(color="primary" flat="" @click="menu = false") Save
        //- v-layout.mt-2
        //-   v-flex
        //-     v-btn(icon)
        //-       v-icon settings
    nuxt
    custom-footer

</template>

<script>
import Vue from 'vue'
import { mapActions, mapState, mapGetters } from 'vuex'
import Current from '~/components/inquiries/Current.vue'
import CustomFooter from '~/components/global/Footer.vue'
export default {
  data: _ => {
    return {
      drawer: true,
      hints: false,
      message: true,
      menu: false,
      snackbar: {},
      inquiryMenu: false
    }
  },
  computed: {
    notifications () {
      let queue = this.$store.state.notifications.queue
      let snackbar = this.snackbar;
      queue.forEach(
        notif => {
          if (!notif.id) notif.id = notif.text + Date.now()
          if( !snackbar.hasOwnProperty(notif.id) ) {
            Vue.set(snackbar, notif.id, true)
          }
        }
      )
      return queue
    },
    desktop () {
      return this.$vuetify.breakpoint.mdAndUp
    },
    productsInCurrentInquiry () {
      return Object.values(this.currentInquiry.products).length
    },
    ...mapState('auth', [
      'user'
    ]),
    ...mapState('inquiries', {
      currentInquiry: 'current' 
    }),
    ...mapGetters('auth', [
      'accessToken'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'loadUserInfo',
      'logOut'
    ]),
  },
  mounted () {
    this.loadUserInfo()
    if(process.browser) window.THAT = this
  },
  components: {
    Current,
    CustomFooter
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
