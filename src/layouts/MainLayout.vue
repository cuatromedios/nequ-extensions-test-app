<template>
  <nq-layout toolbarClass="" :tabs="tabs">
    <template slot="title">
      <q-btn flat label="Header"/>
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
            { title: 'Layout', to: { name: 'layout'} },
            { title: 'Page', to: 'page' }
          ]
        },
        {
          title: 'Fields',
          icon: 'code',
          children: [
            { title: 'Field', to: 'field' },
            { title: 'Input', to: 'input' },
            { title: 'Number', to: 'number' },
            { title: 'Currency', to: 'currency' },
            { title: 'Percentage', to: 'percentage' },
            { title: 'Select', to: 'select' }
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
        }
      ]
    }
  }
}
</script>
