<template lang="pug">
  .signed-in-container
    v-progress-circular(indeterminate v-bind:size="200" v-bind:width="2" color="#FAFAFA")
      | Loading...
</template>

<script>

export default {
  layout: 'home',
  mounted () {
    console.log(this.$route.query)
    this.$router.replace('/products')
  }
}
</script>

<style lang="scss" scoped>
  .signed-in-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:white;
  }
</style>
