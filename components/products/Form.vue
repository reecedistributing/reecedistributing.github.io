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
            required
          )
          v-text-field(
            label="Description", 
            v-model="value.description", 
            required
            multi-line
          )
          v-layout.elevation-0.transparent
            v-tooltip(top, right)
              v-btn(center, dark, fab, flat, small, color="accent", slot="activator"
                @click="createBrand({})"
              )
                v-icon add
              span Create New Brand
            deep-select(
              label="Brands", 
              v-model="value.brands", 
              :items="brands",
            )
          v-layout.elevation-0.transparent
            v-tooltip(top, right)
              v-btn(
                center, dark, fab, flat, small, color="accent", slot="activator"
                @click="createCategory({})"
              )
                v-icon add
              span Create New Category
            deep-select(
              label="Categories", 
              v-model="value.categories", 
              :items="categories",
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
          
        v-dialog(v-model="categoryFormVisible", max-width="50%")
          v-card 
            v-card-text
              new-category(v-model="newCategory")
        v-dialog(v-model="brandFormVisible", max-width="50%")
          v-card 
            v-card-text
              new-brand(v-model="newBrand")

</template>

<script>
  import ImageUpload from '~/components/inputs/ImageUpload.vue'
  import DeepSelect from '~/components/inputs/DeepSelect.vue'
  import NewCategory from '~/components/categories/New.vue'
  import NewBrand from '~/components/brands/New.vue'

  // setup to support v-model
  // enter initial product as v-model
  export default {

    data: _ => ({
        categoryFormVisible: false,
        brandFormVisible: false,
        options: {
          url: '/upload',
          paramName: 'file'
        },
        thumbs: [],
        newCategory: {
          name: '',
          description: '',
          parent: null
        },
        newBrand: {
          name: '',
          description: '',
          parent: null
        }
    }),

    props: {
      brands: {
        type: Array,
        required: true
      },
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
      addBrand ({ name, description, parent }) {

      },
      createCategory ({name = '', description = '', parent = null}) {
        this.newCategory = { name, description, parent };
        this.categoryFormVisible = true
      },

      createBrand ({name = '', description = '', parent = null}) {
        this.newBrand = { name, description, parent };
        this.brandFormVisible = true
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
      NewCategory,
      NewBrand
    }
  }

</script>


<style lang="scss">
  .relative {
    position: relative;
  }
</style>