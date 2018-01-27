<template lang="pug">
  div
    h4
      span(v-if="!category.parent") New Category
      span(v-else) New Sub-Category for 
        span.accent--text {{ category.parent.name }}
    category-form(@submit="onSubmit", :value="category")
</template>


<script>
  import CategoryForm from './Form'

  export default {
    data: _ => ({
      category:{
        name:'',
        description:'',
        parent:null
      }
    }),
    props: {
      template: {
        type: Object,
        required: false,
        default: _ => ({
          name:'',
          description:'',
          parent:null
        })
      }
    },
    mounted () {

      // Filters out each property and resorts to default value if not provided
      let {
        name: _name, description: _description, parent: _parent
      } = this.category;

      let {
        name = _name, description = _description, parent = _parent
      } = this.template;

      this.category = {
        name, description, parent
      }
    },
    methods: {
      async onSubmit () {
        let { name, description, parent } = this.category;
        let parent_slug = parent ? parent.slug : null;
        let rtnCategory = await this.$store.dispatch('categories/create', { name, description, parent_slug })
        this.onCreate(rtnCategory)
      },
      onCreate (...args) {
        this.$emit('create', ...args)
      }
    },
    components: {
      CategoryForm
    }
  }

</script>


<style lang="scss">

</style>