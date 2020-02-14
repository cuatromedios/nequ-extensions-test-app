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
          route: 'layout'
        },
        {
          title: 'Fields',
          icon: 'code',
          children: [
            { title: 'Field', route: 'field' },
            { title: 'Input', route: 'input' },
            { title: 'Number', route: 'number' },
            { title: 'Currency', route: 'currency' },
            { title: 'Percentage', route: 'percentage' },
            { title: 'Select', route: 'select' }
          ]
        },
        {
          title: 'Forms',
          icon: 'code',
          route: 'form'
        },
        {
          title: 'Table',
          icon: 'code',
          route: 'table'
        }
      ]
    }
  }
}
</script>
