
<template lang="pug">
v-layout(row='')
  v-flex(xs12='', sm8, offset-sm2)
    v-card.grid(v-if="thumbs.length", transition="scale-transition" origin="center center")
      v-toolbar(color='white', flat='')
        //- v-btn(icon='', light='')
        v-toolbar-title.grey--text.text--darken-4 Images
        v-spacer
      v-container(fluid='', grid-list-sm)
        v-layout(row='', wrap='')
          v-flex(xs4='', v-for='(i, index) in thumbs', :key="'key'+index")
            img.image(v-bind:src='i', width='100%')

    v-card(transition="scale-transition", v-if="loading.active")
      v-card-media(
        height="200px"
        :src="loading.src"
      )
        v-layout(
          row justify-center
          align-center
        ).dark-overlay
          v-progress-circular(
            v-bind:size='120', 
            v-bind:width='15', 
            v-bind:rotate='-90', 
            v-bind:value='loading.percentage', 
            color='primary'
          )
            | {{ loading.percentage }}%
    image-input(
      label="Choose Image Files"
      dicon="image"
      @formData="handleFormData"
      formDataAppendAttr="file"
      :disabled="loading.active"
      :multiple="true"
    )
</template>


<script>
  import ImageInput from '~/components/inputs/ImageInput.vue'

  import axios from 'axios'

    // Code from https://cloudinary.com/blog/getting_started_with_vue_js_the_progressive_javascript_framework
  export default {
    data () {
      return {
        loading: {
          percentage: 0,
          src: '',
          active: false
        }
      }
    },
    
    props: {
      thumbs: {
        type: Array, // Array of image urls
        required: false,
        default: _ => []
      },
      cloudinary: {
        type: Object,
        required: true
      }
    },

    computed: {
      clUrl () {
        console.log(this.cloudinary.cloudName)
        return `https://api.cloudinary.com/v1_1/${this.cloudinary.cloudName}/upload`  
      }
    },

    watch: {
      loading: {
        handler () {
          if ( this.loading.percentage == 100 ) {
            this.handleSuccessfulUpload()
          }
        },
        deep: true
      }
    },

    methods: {
      handleSuccessfulUpload () {
        let timeout = window.setTimeout(
          _ => {
            this.loading.active = false
          },
          1000
        );
      },
      async handleFormData (formDataArray) {
        let l = formDataArray.length;
        let i = 0;
        while (i<l) {
          let formData = formDataArray[i]
          await this.uploadFormData(formData)
          i = i + 1
        }
      },
      async uploadFormData (formData) {
        formData.append('upload_preset', this.cloudinary.uploadPreset);
        formData.append('tags', 'gs-vue,gs-vue-uploaded');
        // For debug purpose only
        // Inspects the content of formData
        for(var pair of formData.entries()) {
          console.log(pair[0]+', '+pair[1]);
        }

        let config = {
          onUploadProgress: progressEvent => {
            let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
            this.loading.percentage = percentCompleted
          }
        }

        this.loading.percentage = 0;

        this.displayInputImageFromFile( formData.values().next().value );

        let res = await axios.post(this.clUrl, formData, config)

        if (res.data) {
          this.$emit('success', res.data)
        }
      },

      async displayInputImageFromFile (file) {
        this.loading.active = true
        let reader = new FileReader();
        reader.onload = e => {
          let src = e.target.result
          this.loading.src = src;
        }
        
        reader.readAsDataURL(file);
      }
    },

    components: {
      ImageInput
    }
  }

</script>


<style lang="scss" scoped>
  .dark-overlay {
    background-color: rgba(0,0,0,0.5);
  }
</style>