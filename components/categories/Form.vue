
<template lang="pug">
  form
    deep-select(
      label="Categories", 
      v-model="value.parent", 
      :items="categories",
      :multiple="false"
      create="createCategory"
    )
    v-text-field(
      label="name",
      v-model="value.name"
    )
    v-text-field(
      label="description",
      v-model="value.description"
    )
</template>

<script>
  import DeepSelect from '~/components/inputs/DeepSelect.vue'

  export default {
    props: {
      categories: {
        type: Array,
        required: false,
        default: _ => []
      },
      value: {
        type: Object,
        required: false,
        default: _ => ({
          name: '',
          description: '',
          parent: null,
        })
      }
    },

    watch: {
      value: {
        handler () {
          this.$emit('input', this.value);
        },
        deep: true
      }
    },

    components: {
      DeepSelect
    }
  }

</script>


<style lang="scss">

</style>