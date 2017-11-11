<template lang="pug">
v-flex
  v-breadcrumbs(divider="/")
    v-breadcrumbs-item(
      :exact="true"
      :disabled="false"
      :nuxt="true", 
      :to="{ name:'products' }"
      key="1"
    )
      | Products
    v-breadcrumbs-item(
      :disabled="true"
      key="2"
    )
      | {{ label }}
  h3.grey--text.text--darken-1 {{label}}
  v-card
    v-card-text
      v-flex
        form
          //- :error-messages="nameErrors", 
          v-text-field(
            label="Name", 
            v-model="value.name", 
            :counter="10", 
            required=""
          )
          v-text-field(
            label="Description", 
            v-model="value.description", 
            required=""
            multi-line
          )
          v-select(
            v-model="value.brands", 
            label="Brands", 
            chips, 
            tags, 
            :items="brands"
          )
          deep-select(
            label="Categories", 
            v-model="value.categories", 
            :items="categories",
            @create="createCategory"
          )
          v-text-field(
            label="Minimum Price"
            v-model="value.price_low"
            prefix="$"
            type="number"
          )
          v-text-field(
            label="Maximum Price"
            v-model="value.price_high"
            prefix="$"
            type="number"
          )
          image-upload(
            :thumbs="thumbs"
            :cloudinary="cloudinary"
            @success="handleSuccessfulUpload"
          )
          
        v-dialog(v-model="categoryFormVisible")
          v-card 
            v-card-text
              new-category(:categories="categories")


</template>

<script>
  import ImageUpload from '~/components/inputs/ImageUpload.vue'
  import DeepSelect from '~/components/inputs/DeepSelect.vue'
  import NewCategory from '~/components/categories/New.vue'
  // setup to support v-model
  // enter initial product as v-model
  export default {

    data: _ => ({
        categoryFormVisible: false,
        options: {
          url: '/upload',
          paramName: 'file'
        },
        brands: [
          'Nike',
          'Underarmour',
          'Samsung',
          'Apple',
          'Cummins'
        ],
        thumbs: []
    }),

    props: {
      categories: {
        type: Array,
        required: true
      },
      value: {
        type: Object,
        required: false,
        default () {
          return {
            name: '',
            description: '',
            images: [],
            price_high: null,
            price_low: null,
            brands: [],
            categories: []
          }
        }
      },
      label: {
        type: String,
        required: true
      }
    },

    computed: {
      cloudinary () {
        let config = this.$store.state.images.cloudinary.config
        console.log(config)
        return config
      }
    },
    
    methods: {
      
      createCategory ({name}) {
        this.categoryFormVisible = true
      },

      handleSuccessfulUpload (cloudinary_res) {
        this.thumbs.push(cloudinary_res.secure_url)
        this.notify();
      },
      notify () {
        let text = `Image Uploaded!`;
        let color = `success`;
        let duration = 100000000;
        this.$store.dispatch('notifications/notify', { text, color, duration })
      }
    },

    watch: {
      value: {
        handler () {
          this.$emit('input', this.value)
        },
        deep: true
      }
    },

    mounted () {
      process.browser
    },
    components: {
      ImageUpload,
      DeepSelect,
      NewCategory
    }
  }

</script>


<style lang="scss">

</style>