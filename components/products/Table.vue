<template lang="pug">
v-layout(justify-center="")
  v-flex(xs12)
    v-card-title
      //- v-bind:pagination.sync="pagination"
      v-data-table.elevation-1(
        v-bind:headers="headers",
        v-bind:items="items", 
        v-bind:search="search",
        :loading="loading"
        hide-actions
      )
        template(slot="headerCell", scope="props")
          v-tooltip(bottom="")
            span(slot="activator")
              | {{ props.header.text }}
            span
              | {{ props.header.text }}
            v-divider
        template(slot="items", scope="props")
          td.text-xs-right(v-for="header in headers") 
            nuxt-link.lowkey_link(:to="{ name:'products-slug', params: { slug: props.item.slug }}" tag="div") 
              | {{ header.render ? header.render(props.item[header.value]) : props.item[header.value] }}
</template>


<script>

  export default {
    data () {
      return {
        search: '',
        pagination: {},
        totalItems:0,
        selected: [],
        headers: [
          { text: 'name', value: 'name' },
          { text: 'description', value: 'description'},
          { text: 'Min Price', value: 'price_low', render: v => v ? '$' + v : "None" },
          { text: 'Max Price', value: 'price_high', render: v => v ? '$' + v : "None" },
          { text: 'Created (Date)', value: 'created_at', render: v => new Date(parseInt(v)).toLocaleDateString() },
          { text: 'Updated (Date)', value: 'updated_at', render: v => new Date(parseInt(v)).toLocaleDateString() }
        ]
      }
    },
    watch: {
      pagination: {
        handler () {
          this.$emit('sort', this.pagination)
        },
        deep: true
      }
    },
    computed: {
      items () {
        this.products.forEach(
          p => {
            let s = ( p.name + ' ' + p.description + ' ' + p.created_at)
            let formattedString = s.toLowerCase().replace(/(\s)/g, '-')
            console.log(formattedString)
          }
        )
        return this.products
      }
    },
    props: {
      products:{
        type: Array,
        required: true
      },
      loading:{
        type: Boolean,
        required: true
      }
    }
  }

</script>


<style lang="scss">

</style>