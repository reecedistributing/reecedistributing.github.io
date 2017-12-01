
<template lang="pug">
  form(
    @submit.prevent="onSubmit"
  )
    v-text-field(
      label="Parent Brand",
      v-model="value.parent"
      disabled
      v-if="value.parent"
      @input="updateInput"
    )
    v-text-field(
      label="Name",
      v-model="value.name"
      @input="updateInput"
    )
    v-text-field(
      label="Description",
      v-model="value.description"
      @input="updateInput"
      multi-line
    )
    v-btn(
      type="submit"
      flat
    ).primary--text Submit
</template>

<script>
  import DeepSelect from '~/components/inputs/DeepSelect.vue'

  export default {

    props: {
      value: {
        type: Object,
        required: false,
        default: _ => ({
          name: '',
          description: '',
          parent: null, // Self 
        })
      }
    },

    methods: {
      onSubmit (...args) {
        args = args.length ? args : true
        this.$emit('submit', ...args)
      },
      updateInput () {
        this.$emit('input', this.value);
      }
    },

    components: {
      DeepSelect
    }
  }

</script>


<style lang="scss">

</style>