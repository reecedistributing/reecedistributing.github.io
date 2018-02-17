<template>
  <div :id="AUTH0_COMPONENT_ID"/>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  layout: 'home',
  // middleware: 'anonymous',
  computed: {
    ...mapState('auth', [
      'AUTH0_COMPONENT_ID'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'showLock'
    ])
  },
  mounted () {
    this.showLock()
  }
}
</script>