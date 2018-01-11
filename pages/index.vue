<template lang="pug">

  v-layout.bg
    v-flex(xs12).overlay-bg
      div.overlay-contents
        // <logo/>
        h1.title-txt
          | Reece Distributing Co.
        h2.subtitle
          span For those who just can't bare it.
        .links
          v-btn(:nuxt="true", :to="{ name:'products' }", large) View Catalog

</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    Logo
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

<style scoped>

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

.links {
  padding-top: 15px;
}
</style>