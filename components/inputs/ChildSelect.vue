
<template lang="pug">
  v-list
    v-list-tile-content(v-for="item in items", :key="item.slug")
      v-tooltip(open-on-hover, right, offset-y)
        template()
          v-list-tile-title(v-html="item.name")
          v-list-tile-sub-title(v-html="item.description")
          child-select(:items="item.children || []")

</template>


<script>

  export default {
    name: 'child-select',
    props:{
      items: {
        type:Array, // Array<Item> Item { name: String, description: String, children: Array<Item> }
        required: true
      }
    }
  }

</script>


<style lang="scss">

</style>