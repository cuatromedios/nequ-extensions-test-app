<template>
  <q-page class="">
    <h1>&lt;nq-number&gt;</h1>
    <h2>Features</h2>
    <ul>
      <li>Auto right aligned</li>
    </ul>
    <h2>Attributes</h2>
    <ul>
      <li><code>pattern</code> Any pattern of NumeralJS: http://numeraljs.com/ for example 0,0.00</li>
    </ul>
    <h3>Emitted Model: {{ theModel }}</h3>
    <p>
      <nq-input-number v-model="theModel" pattern="0,0" />
    </p>
    <p>
      <nq-input-number v-model="theModel" pattern="0,0.0" />
    </p>
    <p>
      <nq-input-number v-model="theModel" pattern="0,0.00" />
    </p>
    <p>
      <nq-input-number v-model="theModel" pattern="0,0.000" />
    </p>
    <p>
      <nq-input-number v-model="theModel" pattern="0 b" />
    </p>
  </q-page>
</template>

<script>
export default {
  name: 'Number',
  data () {
    return {
      theModel: 12345.678
    }
  }
}
</script>
