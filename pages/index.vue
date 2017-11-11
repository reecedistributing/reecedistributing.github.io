<template lang="pug">
section.container
  div
    // <logo/>
    h1.title
      | Reece Distributing Co.
    h2.subtitle
      span For those who just can't bare it.
    .links
      nuxt-link.button--grey(:to="{ name:'products' }") View Catalog

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1.title {
  font-family: 'Great Vibes', cursive;
  font-size: 7rem !important;
  display: block;
  font-weight: bold;
  /* letter-spacing: -2px; */
}

.subtitle {
  font-family: 'Cutive Mono', Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 1.7em;
  color: grey;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>