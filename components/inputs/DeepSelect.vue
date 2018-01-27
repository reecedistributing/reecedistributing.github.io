
<template lang="pug">
v-list
  v-list-group(v-for="item in items", :value="item.active", v-bind:key="item.title")
    v-list-tile(slot="item", @click="")
      v-list-tile-action
        v-checkbox(
          v-model="selected[JSON.stringify(item)]"
          @update="updateValue"
        )
      v-list-tile-content
        v-list-tile-title 
          span(v-if="titleProp") {{item[titleProp]}}
          span(v-else) {{item}}
      v-list-tile-action(v-if="shouldShowNested(item)")
        v-icon keyboard_arrow_down
    deep-select(
      v-if="shouldShowNested(item)",
      :sub-item-prop="subItemProp",
      :title-prop="titleProp",
      :is-root="false",
      
      :item-tree="itemTree[JSON.stringify(item)].subTree"
      :items="itemTree[JSON.stringify(item)].items",
      v-model="itemTree[JSON.stringify(item)].value"
    )
    
    //- v-list-tile(v-if="item[subItemProp]" v-for="subItem in item[subItemProp]", v-bind:key="subItem.title", @click="")
    //-   v-list-tile-content
    //-     v-list-tile-title {{ subItem.title }}
    //-   v-list-tile-action
    //-     v-icon {{ subItem.action }}

</template>


<script>
  const NAME = 'deep-select'

  const DATA = {
    // a dictionary with stringified items as keys and whether they are selected as values.
    selected: 'selected',
    // a dictionary with stringified items as keys and arrays of their selected nested items as values.
    nested_values: 'nestedValues',
  }
  const EVENTS = {
    // emits new value for v-model attribute
    input: 'input',
    // informs root deep-select that a change has occurred in the item tree.
    deep_change: 'deep-change'
  }
  const PROPS = {
    // An `Array` of selectable items
    items: 'items',
    // An Array of items to add selected items to. Must not contain duplicate items.
    value: 'value',
    // A String or Number property to select sub-items from
    sub_item_prop: 'sub-item-prop',
    // allows user to customize an item's title
    title_prop: 'title-prop',
    // local prop to determine if is root instance of deep-select
    is_root: 'is-root',
    // a dictionary with keys of stringified items and values of items' values, their nested items and their own item tree
    item_tree: 'item-tree' 
  }
  
  const GET_ITEM_ID = (item) => {
    let str = JSON.stringify(item);
    return str.split('').map(
      (char, index) => String.fromCharCode( char.charCodeAt(0) + index )
    ).join('')
  }
  const BUILD_ITEM_TREE = (items, sub_item_prop) => {
    let container = {}
    items.forEach(
      item => {
        let nestedItems = item[sub_item_prop] || [];
        let value = [];
        let subTree = null;
        if (nestedItems.length) {
          subTree = BUILD_ITEM_TREE(nestedItems)
        }
        container[JSON.stringify(item)] = {
          items: nestedItems,
          value,
          subTree
        }
      }
    )
    return container
  }
  export default {
    name: NAME,
    data: _ => ({
      [DATA.selected]: {},
      [DATA.nested_values]: {},
    }),
    props: {
      [PROPS.items]: {
        type: Array,
        required: true
      },
      [PROPS.value]: {
        // type: Array,
        // default () {
        //   return []
        // }
      },
      [PROPS.sub_item_prop]: {
        type: String|Number,
        required: true
      },
      [PROPS.title_prop]: {
        type: String|Number,
        required: false
      },
      [PROPS.is_root]: {
        type: Boolean,
        required: false,
        default: _ => true
      },
      [PROPS.item_tree]: {
        type: Object,
        required: false,
        default () {
          let tree = BUILD_ITEM_TREE(this.items)
          console.log(tree)
          return tree
        }
      }
      
    },
    methods: {
      updateValue () {
        if (this[PROPS.is_root]) this.$emit(EVENTS.input, [])
        else this.$emit(EVENTS.deep_change)
      },
      // builds root value container for item tree 
      buildItemTree (items) {
        return BUILD_ITEM_TREE(items)
      },
      // returns Boolean based on whether item is selected and if item has nested items 
      shouldShowNested (item) {
        return this.selected[JSON.stringify(item)] && item[this.subItemProp].length
      },
      // handles nested input event. Sends events up the chain until it reaches the root deep-select.
      handleNestedInput () {
        let freshValue = [ ...this[PROPS.value], item ]
        this.$emit(EVENTS.input, freshValue)
      }
    },
    mounted () {
      this.$emit(EVENTS.input, [])
    }
  }

</script>


<style lang="scss">

</style>