<template>
  <q-page>
    <h1>Input</h1>
    <h2>Default</h2>
    Outlined by default
    <nq-input></nq-input>
    <h2>Inherit scopes</h2>
    <nq-input>
      <template v-slot:append>
        <q-icon name="event" color="orange" />
      </template>
    </nq-input>
  </q-page>
</template>

<script>
export default {
  name: 'Currency'
}
</script>
