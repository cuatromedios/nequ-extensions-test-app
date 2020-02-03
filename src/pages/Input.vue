<template>
  <q-page>
    <h1>Input</h1>
    <h2>Default</h2>
    Outlined by default
    <nq-input disabled readonly />
    <h2>Inherit scopes</h2>
    <nq-input>
      <template v-slot:append>
        <q-icon name="event" color="orange" />
      </template>
    </nq-input>
    <nq-input label="Label" hint="The hint" counter maxlength="12" >
      <template v-slot:before>
        <q-icon name="event" />
      </template>
      <template v-slot:append>
        <q-btn round dense flat icon="add" />
      </template>
    </nq-input>
  </q-page>
</template>

<script>
export default {
  name: 'Currency'
}
</script>
