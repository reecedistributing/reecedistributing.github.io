<template lang="pug">
  div
    h4 New Brand
    brand-form(@submit="onSubmit", :value="brand")
</template>


<script>
  import BrandForm from './Form'

  export default {
    data: _ => ({
      brand:{
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
      } = this.brand;

      let {
        name = _name, description = _description, parent = _parent
      } = this.template;

      this.brand = {
        name, description, parent
      }
    },
    methods: {
      async onSubmit () {
        let { name, description, parent } = this.brand;
        let parent_slug = parent ? parent.slug : null;
        let rtnBrand = await this.$store.dispatch('brands/create', { name, description, parent_slug })
        debugger
        this.onCreate(rtnBrand)
      },
      onCreate (...args) {
        this.$emit('create', ...args)
      }
    },
    components: {
      BrandForm
    }
  }

</script>


<style lang="scss">

</style>