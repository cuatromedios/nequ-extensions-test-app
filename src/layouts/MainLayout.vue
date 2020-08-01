<template>
  <nq-layout :tabs="tabs" indicator-color="warning">
    <template slot="title">
      <q-btn :to="{ name: 'layout' }" flat label="NeQu Components"/>
    </template>
    <router-view />
  </nq-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  data () {
    return {
      tabs: [
        {
          title: 'Layouts',
          icon: 'code',
          children: [
            { title: 'Layout', to: { name: 'layout'}, icon: 'code' },
            { title: 'Page', to: 'page', icon: 'code' }
          ]
        },
        {
          title: 'Fields',
          icon: 'code',
          children: [
            { title: 'Field', to: 'field',  icon: 'code' },
            { title: 'Input', to: 'input',  icon: 'code' },
            { title: 'Number', to: 'number', icon: 'code' },
            { title: 'Currency', to: 'currency', icon: 'code' },
            { title: 'Percentage', to: 'percentage', icon: 'code' },
            { title: 'Select', to: 'select', icon: 'code' },
            { title: 'DateTme', to: 'datetime', icon: 'code' }
          ]
        },
        {
          title: 'Forms',
          icon: 'code',
          to: 'form'
        },
        {
          title: 'Table',
          icon: 'code',
          to: 'table'
        },
        {
          title: 'Filters',
          icon: 'flip',
          to: 'filters'
        }
      ]
    }
  }
}
</script>
