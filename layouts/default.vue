<template lang="pug">
  v-app
    v-snackbar(
      v-for="(notif, index) in notifications",
      :timeout='notif.duration', 
      :color="notif.color",
      v-model="snackbar[notif.id]",
      :multi-line="notif.multiline", 
      :vertical="!$vuetify.breakpoint.md", 
      :key="notif.text + index"
      :top="true", 
      :bottom="false", 
      :absolute="true"
      :right="true", 
      :left="false", 
    )
      | {{ notif.text }}
      v-btn(
        dark 
        flat 
        @click.native="snackbar[notif.id] = false"
      ) Close
    v-toolbar.elevation-0
      nuxt-link.lowkey_link(:to="{ path:'/' }" tag="v-toolbar-title").grey--text.text--darken-2
        v-avatar
          img(src="~/assets/flame_logo.svg", style="filter:lighten(10%)")
        span Reece Distributing Company
      v-spacer
      v-toolbar-side-icon.hidden-md-and-up
      v-toolbar-items.hidden-sm-and-down
        v-btn(flat, :to="{ name:'products' }", :nuxt="true") Products
        v-btn(flat="") Inquiries
        v-btn(flat="")
          v-icon account_circle
    nuxt
</template>

<script>
import Vue from 'vue'

export default {
  data: _ => ({
    snackbar: {}
  }),
  computed: {
    notifications () {
      let queue = this.$store.state.notifications.queue
      let snackbar = this.snackbar;
      queue.forEach(
        notif => {
          if( !snackbar.hasOwnProperty(notif.id) ) {
            Vue.set(snackbar, notif.id, true)
          }
        }
      )
      return queue
    }
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
