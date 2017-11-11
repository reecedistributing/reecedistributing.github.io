
<template lang="pug">
  category-form(:categories="categories")
</template>


<script>
  import CategoryForm from './Form'

  export default {
    props: ['categories', 'template'],
    data: _ => {
      let model = this.template;
      return {
        model
      }
    },
    components: {
      CategoryForm
    }
  }

</script>


<style lang="scss">

</style>