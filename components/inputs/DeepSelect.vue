
<template lang="pug">
  v-select(
    @input="updateValue",
    :label="label",
    :value="value"
    chips,
    :items="items",
    item-text="name"
    :multiple="multiple",
    autocomplete
    ref="deepselect"
  )
    //- template(slot="item", scope="data")
    //-   v-list-tile-avatar
    //-     v-checkbox(v-model="data.item.selected")
    //-   v-list-tile-content
    //-     v-list-tile-title 
    //-       span {{data.item.name}}
    //-     v-list-tile-sub-title {{data.item.description}}
    template(slot="selection", scope="data").elevation-0
      v-chip.chip--select-multi(close="", @input="data.parent.selectItem(data.item)", :selected="data.selected", :key="JSON.stringify(data.item)")
        |                   {{ data.item.name }}

        //- v-menu(open-on-hover, top, right, offset-y).elevation-0
        //-   v-chip.chip--select-multi(
        //-     slot="activator" 
        //-     @input="data.parent.selectItem(data.item)", 
        //-     :disabled="data.disabled", 
        //-     :key="JSON.stringify(data.item)"
        //-   )
        //-     | {{ data.item.name }}
          //- v-btn(flat, icon, small, color="black", slot="activator")
          //-   v-icon arrow_drop_down
          //- v-list
          //-   v-list-tile
          //- template
          //-   v-tooltip(right)
          //-     v-btn(color="green", slot="activator").white--text
          //-       v-icon playlist_add
          //-     span add sub-{{label.toLowerCase()}}
</template>


<script>
  import ChildSelect from './ChildSelect'
  
  export default {
    name:'deep-select',
    data: _ => ({
      localValue: null
    }),
    props: {
      label: String,
      items: {
        type: Array,
        required: true
      },
      value: {
        type: Array, // Array<{ name: String, description: String, children: Self }
      },
      multiple: {
        type: Boolean,
        required: false,
        default: _ => true
      }
    },
    methods: {
      log: _ => console.log(_),
      
      updateValue (value) {
        window.__REFS = this.$refs
        this.$emit('input', value)
      },
      
    },

    computed: {

      vSelect () {
        return this.$refs.deepselect
      }

    },
    
    components: {
      ChildSelect
    },
  }

</script>


<style lang="scss">

</style>