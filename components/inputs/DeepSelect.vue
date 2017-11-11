
<template lang="pug">
  v-select(
    @input="updateValue",
    label="Categories", 
    chips, 
    :items="items",
    item-text="name"
    :multiple="multiple",
    autocomplete
  )
    template(slot="selection", scope="data")
        v-menu(open-on-hover, top, right, offset-x)
          v-chip.chip--select-multi(
            slot="activator" 
            @input="data.parent.selectItem(data.item)", 
            :disabled="data.disabled", 
            :key="JSON.stringify(data.item)"
          )
            | {{ data.item.name }}
          //- v-btn(flat, icon, small, color="black", slot="activator")
          //-   v-icon arrow_drop_down
          //- v-list
          //-   v-list-tile
          v-tooltip(right)
            v-btn(flat, color="green", slot="activator").white--text
              v-icon playlist_add
            span add sub-category
    //- template(slot="item", scope="data")
    //-   v-list-tile-avatar
    //-     v-checkbox(v-model="data.item.selected")
    //-   v-list-tile-content
    //-     v-list-tile-title 
    //-       span {{data.item.name}}
    //-     v-list-tile-sub-title {{data.item.description}}
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
        // this.value.forEach(
        //   e => {
        //     e.selected = false;
        //   }
        // );

        let addedItem = null;

        value = value.filter(
          e => {
            if ( typeof e == "string" ) {
              addedItem = e;
              return false;
            }
            e.selected = true;
            return true;
          }
        );
        addedItem? this.$emit('create', { name: addedItem }) : this.$emit('input', value)
      }
    },
    components: {
      ChildSelect
    },
  }

</script>


<style lang="scss">

</style>