
<template lang="pug">
  v-flex(xs12).white--text.text-section--custom.mt-4
    v-layout
      v-flex(xs6, offset-xs3)
        h1.mt-4.mb-4 {{name}}
        v-divider.white.mt-4.mb-4
    .spacer--custom
    slot
</template>


<script>

  export default {
    props: ['name']
  }

</script>


<style lang="scss">
.text-section--custom {
  padding-top: 5%;
  height:100%;
  overflow: scroll;
}
.spacer--custom {
  margin-bottom:5rem;
}
</style>