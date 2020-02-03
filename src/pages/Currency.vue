<template>
  <q-page class="">
    <h1>Currency</h1>
    <ul>
      <li>Auto $ prepend</li>
    </ul>
    <nq-input-currency symbol="MXN$" />
    <nq-input-currency symbol="€" />
  </q-page>
</template>

<script>
export default {
  name: 'Currency'
}
</script>
