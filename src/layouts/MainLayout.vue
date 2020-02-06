<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          NeQu Extension
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">Components</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-item-label header class="text-grey-8">Mixins</q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container class="q-ma-lg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Input',
          caption: 'Generic input',
          icon: 'code',
          link: 'input'
        },
        {
          title: 'Input Number',
          caption: 'Number input',
          icon: 'code',
          link: 'number'
        },
        {
          title: 'Input Currency',
          caption: 'Numeric input for money values',
          icon: 'code',
          link: 'currency'
        },
        {
          title: 'Input Percentage',
          caption: 'Percentage input',
          icon: 'code',
          link: 'percentage'
        },
        {
          title: 'Select',
          caption: 'Select',
          icon: 'code',
          link: 'select'
        }
      ]
    }
  }
}
</script>
