<template lang="pug">
v-flex
  route-bread-crumbs
  h3.grey--text.text--darken-1 {{label}}
  v-card
    v-card-text
      v-flex
        form(@submit.prevent="onSubmit")
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
                @click="createBrand"
              )
                v-icon add
              span Create New Brand
            //- deep-select(
            //-   label="Brands", 
            //-   v-model="value.brands", 
            //-   :items="brands",
            //-   ref="brandSelect"
            //- )
          v-layout.elevation-0.transparent 
            deep-select(
              label="Categories", 
              :value="value.categories", 
              :items="displayCategories",
              ref="categorySelect",
              sub-item-prop="children"
              title-prop="name"
            )

          //- v-text-field(
          //-   label="Minimum Price"
          //-   v-model="value.price_low"
          //-   prefix="$"
          //-   type="number"
          //-   min="0"
          //-   step="0.01"
          //-   :required="value.price_high != null"
          //-   :error-messages="priceErrors.minPrice"
          //-   @input="priceValidator"
          //-   @blur="priceValidator"
          //- )
          //-   //- :max="value.price_high == null? 0 : value.price_high"
          //- v-text-field(
          //-   label="Maximum Price"
          //-   v-model="value.price_high"
          //-   prefix="$"
          //-   type="number"
          //-   step="0.01"
          //-   :required="value.price_low != null"
          //-   :error-messages="priceErrors.maxPrice"
          //-   @input="priceValidator"
          //-   @blur="priceValidator"
          //- )
            //- :min="value.price_low == null? 0 : value.price_low"
          image-upload(
            :thumbs="thumbs"
            :cloudinary="cloudinary"
            @success="handleSuccessfulUpload"
          )
          v-btn(
            type="submit"
          ).primary Submit          
        v-dialog(v-model="categoryFormVisible", max-width="50%")
          v-card 
            v-card-text
              new-category(@create="handleCategorySubmit", v-if="categoryFormVisible", :template="newCategory")
        v-dialog(v-model="brandFormVisible", max-width="50%")
          v-card 
            v-card-text
              new-brand(@create="handleBrandSubmit", v-if="brandFormVisible")

</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minValue, maxValue, numeric, requiredIf } from 'vuelidate/lib/validators'
  import ImageUpload from '~/components/inputs/ImageUpload.vue'
  import DeepSelect from '~/components/inputs/DeepSelect.vue'
  import NewCategory from '~/components/categories/New.vue'
  import NewBrand from '~/components/brands/New.vue'
  import RouteBreadCrumbs from '~/components/global/RouteBreadCrumbs'

  // setup to support v-model
  // enter initial product as v-model
  export default {

    mixins: [validationMixin],

    validations: {
      // minPrice: {
      //   required: requiredIf(
      //     nestedModel => {
      //       return this.minOrMaxPriceEntered;
      //     }
      //   ),
      //   maxValue: maxValue(
      //     nestedModel => {
      //       return this.value.price_high
      //     }
      //   )
      // },
      // maxPrice: { 
      //   required: requiredIf(
      //     nestedModel => {
      //       return this.minOrMaxPriceEntered;
      //     }
      //   ),
      //   minValue: minValue(
      //     nestedModel => {
      //       return this.value.price_low
      //     }
      //   )
      // },
    },

    data: _ => ({
        brandRefTag: 'brandDialog',
        categoryRefTag: 'categoryDialog',
        // priceErrors: {
        //   minPrice: [],
        //   maxPrice: []
        // },
        childCategories: [],
        categoryFormVisible: false,
        brandFormVisible: false,
        options: {
          url: '/upload',
          paramName: 'file'
        },
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
            // price_high: null,
            // price_low: null,
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
      displayCategories () {
        return this.categories.map(
          c => {
            let cCopy = {...c}
            cCopy.parent_slug = cCopy.parent ? cCopy.parent.slug : null
            return cCopy
          }
        )
      },

      thumbs () {
        return this.value.images.map(
          img => img.url
        )
      },
      cloudinary () {
        let config = this.$store.state.images.cloudinary.config
        return config
      },
      // minOrMaxPriceEntered () {
      //   if (window) {
      //     window.STORE = this.$store
      //   }
      //   let price_low = this.value.price_low;
      //   let price_high = this.value.price_high;
      //   let areEqual = price_high == price_low;
      //   let bothZero = areEqual && ( price_high == 0 );
      //   let bothNull = areEqual && ( price_high == null );
      //   let bothFalsey = (!!price_high && !!price_low) && (!!price_high == false);
      //   let oneFalsey = (!!price_high) != (!!price_low)
      //   if (bothFalsey) {
      //     this.value.price_high = null;
      //     this.value.price_low = null;
      //   }
      //   if (oneFalsey) {
      //     switch (false) {
      //       case !!price_high :
      //         this.value.price_high = 0;
      //         break;
      //       case !!price_low :
      //         this.value.price_low = 0;
      //         break;
      //     }
      //   }
      //   return !bothZero && !bothNull
      // },

    },
    
    methods: {
      loadChildCategories () {

      },

      // priceValidator () {
      //   this.$v.minPrice.$touch();
      //   this.$v.maxPrice.$touch();
      //   this.setPriceErrors();
      // },
      // setPriceErrors () {
      //   console.log('priceErrors')
      //   const errors = {
      //     minPrice: [],
      //     maxPrice: []
      //   }
      //   if (!this.$v.maxPrice.$dirty && !this.$v.minPrice.$dirty) return errors

      //   if ( this.minOrMaxPriceEntered && !(this.value.price_high > this.value.price_low) ) {
      //     console.log(this.value.price_high, this.value.price_low)
      //   if (this.$v.maxPrice.$dirty) errors.maxPrice.push('Maximum Price must be greater than Minimum Price!')
      //   if (this.$v.minPrice.$dirty) errors.minPrice.push('Minimum Price must be less than Maximum Price!')
      //   }
      //   this.priceErrors = errors
      // },

      onSubmit (event) {
        this.$emit('complete', { event, product: this.value })
      },
      
      addBrand ({ name, description, parent }) {

      },

      createCategory (parent) {
        console.log(parent)
        this.newCategory = { name: '', description: '', parent };
        this.categoryFormVisible = true;
      },

      handleCategorySubmit (category) {
        // __REFS.deepselect.selectItem(__REFS.deepselect.items[10])
        let select = this.$refs.categorySelect.vSelect;
        let item = select.items.filter( i => (i.slug == category.slug) )
        select.selectItem(item)
        this.categoryFormVisible = false;
      },

      createBrand () {
        this.newBrand = { name: '', description: '', parent: null };
        this.brandFormVisible = true;
      },

      handleBrandSubmit () {
        this.brandFormVisible = false;
      },

      async handleSuccessfulUpload (cloudinary_res) {
        let cl_secure_url = cloudinary_res.secure_url;
        let cl_public_id = cloudinary_res.public_id;

        let savedImage = await this.$store.dispatch('images/create', { cl_secure_url, cl_public_id, res_width: 100, res_height: 100 })
        this.value.images = [ ...this.value.images, savedImage ];
        this.$emit('input', this.value)
        this.notify();
      },

      notify () {
        let text = `Image Uploaded!`;
        let color = `success`;
        let duration = 100000000;
        this.$store.dispatch('notifications/notify', { text, color, duration })
      },

      leaveConfirm (event) {
        if(!e) e = window.event;
        //e.cancelBubble is supported by IE - this will kill the bubbling process.
        e.cancelBubble = true;
        e.returnValue = 'You sure you want to leave?'; //This is displayed on the dialog
      
        //e.stopPropagation works in Firefox.
        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
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
    
    mounted () {
      this.$emit('input', this.value);
      ["onbeforeunload", "beforeunload", "onunload"].forEach(
        eventString => window[eventString] = (...args) => this.leaveConfirm(...args)
      )
    },

    beforeDestroy () {
      ["onbeforeunload", "beforeunload", "onunload"].forEach(
        eventString => window.removeEventListener("onunload", this.leaveConfirm)
      )
    },

    components: {
      ImageUpload,
      DeepSelect,
      NewCategory,
      NewBrand,
      RouteBreadCrumbs
    }
  }

</script>


<style lang="scss">
  .relative {
    position: relative;
  }
</style>  