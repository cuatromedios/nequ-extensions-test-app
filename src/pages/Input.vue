<template>
  <q-page class="">
    <h3>Input</h3>
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
